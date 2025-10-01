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
  customerName: z.string().min(2, { message: "Customer name must be at least 2 characters." }),
  ruc: z.string().min(5, { message: "RUC must be at least 5 characters." }),
  description: z.string().optional(),
  amount: z.coerce.number().positive({ message: "Amount must be a positive number." }),
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
      title: "Invoice Submitted",
      description: `Invoice for ${values.customerName} sent to HKA in ${values.demoMode ? 'demo' : 'production'} mode.`,
    })
    form.reset();
  }

  return (
    <div className="flex justify-center">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Create New Invoice</CardTitle>
          <CardDescription>Fill in the details below to submit a new invoice to HKA.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="customerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Customer Name</FormLabel>
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
                    <FormLabel>Amount</FormLabel>
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
                    <FormLabel>Description</FormLabel>
                    <FormControl><Textarea placeholder="Invoice for services rendered..." {...field} /></FormControl>
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
                      <FormLabel>Demo Mode</FormLabel>
                      <FormDescription>Submit to the HKA demo environment for testing.</FormDescription>
                    </div>
                    <FormControl><Switch checked={field.value} onCheckedChange={field.onChange} /></FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                <Send className="mr-2 h-4 w-4" /> Submit to HKA
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
