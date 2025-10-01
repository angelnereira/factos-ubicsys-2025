"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const invoiceSchema = z.object({
  customerName: z.string().min(2, { message: "El nombre del cliente debe tener al menos 2 caracteres." }),
  ruc: z.string().min(5, { message: "El RUC debe tener al menos 5 caracteres." }),
  description: z.string().optional(),
  amount: z.coerce.number().positive({ message: "El monto debe ser un número positivo." }),
  demoMode: z.boolean().default(true),
})

export default function NewInvoicePage() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof invoiceSchema>>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: {
      customerName: "",
      ruc: "",
      description: "",
      amount: undefined,
      demoMode: true,
    },
  })

  function onSubmit(values: z.infer<typeof invoiceSchema>) {
    console.log(values)
    toast({
      title: "Factura Enviada",
      description: `Factura para ${values.customerName} enviada a HKA en modo ${values.demoMode ? 'demostración' : 'producción'}.`,
    })
    form.reset();
  }

  return (
    <div className="flex justify-center">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Crear Nueva Factura</CardTitle>
          <CardDescription>Complete los detalles a continuación para enviar una nueva factura a HKA.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="customerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre del Cliente</FormLabel>
                    <FormControl><Input placeholder="Global Tech Inc." {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ruc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>RUC/DV</FormLabel>
                    <FormControl><Input placeholder="12345678-9" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Monto</FormLabel>
                    <FormControl><Input type="number" placeholder="250.00" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descripción</FormLabel>
                    <FormControl><Textarea placeholder="Factura por servicios prestados..." {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="demoMode"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel>Modo de Demostración</FormLabel>
                      <FormDescription>Enviar al ambiente de demostración de HKA para pruebas.</FormDescription>
                    </div>
                    <FormControl><Switch checked={field.value} onCheckedChange={field.onChange} /></FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                <Send className="mr-2 h-4 w-4" /> Enviar a HKA
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
