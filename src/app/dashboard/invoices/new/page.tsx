"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm, useWatch } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, Send, Save, Trash2, PlusCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

const itemSchema = z.object({
  code: z.string().min(1, "Requerido"),
  description: z.string().min(1, "Requerido"),
  quantity: z.coerce.number().positive("Debe ser > 0"),
  unit: z.string().min(1, "Requerido"),
  unitPrice: z.coerce.number().positive("Debe ser > 0"),
  discount: z.coerce.number().min(0).default(0),
  itbmsRate: z.enum(["00", "01", "02", "03"]), // 00: 0%, 01: 7%, 02: 10%, 03: 15%
})

const paymentSchema = z.object({
  type: z.string().min(1, "Requerido"),
  value: z.coerce.number().positive("Debe ser > 0"),
})

const invoiceSchema = z.object({
  docType: z.string().default("01"),
  emissionType: z.string().default("01"),
  docNumber: z.string().optional(),
  billingPoint: z.string().min(1, "Requerido"),
  branchCode: z.string().min(1, "Requerido"),
  emissionDate: z.string().min(1, "Requerido"),
  
  customerType: z.enum(["01", "02"]),
  ruc: z.string().optional(),
  dv: z.string().optional(),
  customerName: z.string().min(1, "Requerido"),
  address: z.string().min(1, "Requerido"),
  phone: z.string().optional(),
  email: z.string().email("Email inválido").optional(),
  country: z.string().default("PA"),
  
  items: z.array(itemSchema).min(1, "Debe agregar al menos un item."),
  payments: z.array(paymentSchema).min(1, "Debe agregar al menos una forma de pago."),

  additionalInfo: z.string().optional(),
}).refine(data => {
    if (data.customerType === '01' && (!data.ruc || !data.dv)) {
        return false;
    }
    return true;
}, {
    message: "RUC y DV son requeridos para este tipo de cliente",
    path: ["ruc"],
});


type InvoiceFormValues = z.infer<typeof invoiceSchema>;

function TotalsSection({ control }: { control: any }) {
    const items = useWatch({ control, name: 'items' });
    const payments = useWatch({ control, name: 'payments' });

    const itbmsRates: { [key: string]: number } = { "00": 0, "01": 0.07, "02": 0.10, "03": 0.15 };

    const totals = items.reduce((acc: any, item: any) => {
        const itemPrice = item.quantity * item.unitPrice;
        const itemDiscount = (itemPrice * item.discount) / 100;
        const netPrice = itemPrice - itemDiscount;
        const itbmsValue = netPrice * (itbmsRates[item.itbmsRate] || 0);

        acc.netTotal += netPrice;
        acc.discountTotal += itemDiscount;
        acc.itbmsTotal += itbmsValue;
        acc.grossTotal += netPrice + itbmsValue;
        return acc;
    }, { netTotal: 0, discountTotal: 0, itbmsTotal: 0, grossTotal: 0 });

    const totalPaid = payments.reduce((acc: number, payment: any) => acc + (payment.value || 0), 0);
    const balance = totals.grossTotal - totalPaid;

    const formatCurrency = (value: number) => new Intl.NumberFormat('es-PA', { style: 'currency', currency: 'PAB' }).format(value);

    return (
        <Card>
            <CardHeader><CardTitle>Totales</CardTitle></CardHeader>
            <CardContent className="space-y-4 text-sm">
                <div className="flex justify-between"><span>Subtotal Neto:</span> <span className="font-medium">{formatCurrency(totals.netTotal)}</span></div>
                <div className="flex justify-between"><span>Descuento:</span> <span className="font-medium text-red-500">{formatCurrency(totals.discountTotal)}</span></div>
                <div className="flex justify-between"><span>ITBMS:</span> <span className="font-medium">{formatCurrency(totals.itbmsTotal)}</span></div>
                <hr/>
                <div className="flex justify-between text-lg font-bold"><span>TOTAL FACTURA:</span> <span>{formatCurrency(totals.grossTotal)}</span></div>
                 <hr/>
                <div className="flex justify-between"><span>Total Pagado:</span> <span className="font-medium">{formatCurrency(totalPaid)}</span></div>
                <div className={cn("flex justify-between font-bold", balance !== 0 ? 'text-red-600' : 'text-green-600')}>
                    <span>Balance:</span> <span>{formatCurrency(balance)}</span>
                </div>
            </CardContent>
        </Card>
    )
}

export default function NewInvoicePage() {
  const { toast } = useToast()
  const form = useForm<InvoiceFormValues>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: {
      docType: "01",
      emissionType: "01",
      billingPoint: "001",
      branchCode: "001",
      emissionDate: new Date().toISOString().split('T')[0],
      customerType: "01",
      country: "PA",
      items: [],
      payments: [],
      additionalInfo: "",
    },
  })

  const { fields: itemFields, append: appendItem, remove: removeItem } = useFieldArray({ control: form.control, name: "items" });
  const { fields: paymentFields, append: appendPayment, remove: removePayment } = useFieldArray({ control: form.control, name: "payments" });
  const customerType = useWatch({ control: form.control, name: 'customerType' });
  
  function onSubmit(values: InvoiceFormValues) {
    console.log("Enviar a HKA:", values)
    toast({
      title: "Factura Enviada a HKA",
      description: `La factura para ${values.customerName} ha sido enviada.`,
    })
  }
  
  function handleSaveDraft() {
    const values = form.getValues();
    console.log("Guardar Borrador:", values);
    toast({
        title: "Borrador Guardado",
        description: "La factura ha sido guardada como borrador.",
    });
  }

  function handleDownloadXml() {
    const values = form.getValues();
    console.log("Descargar XML:", values);
    toast({
        title: "XML Generado",
        description: "El XML de la factura ha sido generado para descarga.",
    });
  }


  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Emisión de Factura Manual</h1>
                    <p className="text-muted-foreground">Genere y envíe una nueva factura electrónica a HKA.</p>
                </div>
            </div>

            <Card>
                <CardHeader><CardTitle>1. Datos de Emisión</CardTitle></CardHeader>
                <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <FormField control={form.control} name="docType" render={({ field }) => (<FormItem><FormLabel>Tipo de Documento</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="01">Factura</SelectItem></SelectContent></Select><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="emissionType" render={({ field }) => (<FormItem><FormLabel>Tipo de Emisión</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="01">Electrónica</SelectItem></SelectContent></Select><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="docNumber" render={({ field }) => (<FormItem><FormLabel># Documento (Opcional)</FormLabel><FormControl><Input placeholder="Autogenerado si vacío" {...field} /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="emissionDate" render={({ field }) => (<FormItem><FormLabel>Fecha Emisión</FormLabel><FormControl><Input type="date" {...field} /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="branchCode" render={({ field }) => (<FormItem><FormLabel>Sucursal</FormLabel><FormControl><Input placeholder="001" {...field} /></FormControl><FormMessage /></FormItem>)} />
                    <FormField control={form.control} name="billingPoint" render={({ field }) => (<FormItem><FormLabel>Punto Facturación</FormLabel><FormControl><Input placeholder="001" {...field} /></FormControl><FormMessage /></FormItem>)} />
                </CardContent>
            </Card>

             <Card>
                <CardHeader><CardTitle>2. Datos del Cliente</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormField control={form.control} name="customerType" render={({ field }) => (<FormItem><FormLabel>Tipo Cliente FE</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl><SelectContent><SelectItem value="01">RUC (Jurídico/Natural)</SelectItem><SelectItem value="02">Consumidor Final</SelectItem></SelectContent></Select><FormMessage /></FormItem>)} />
                        {customerType === '01' && (
                            <>
                                <FormField control={form.control} name="ruc" render={({ field }) => (<FormItem><FormLabel>RUC</FormLabel><FormControl><Input placeholder="123456-7-891011" {...field} /></FormControl><FormMessage /></FormItem>)} />
                                <FormField control={form.control} name="dv" render={({ field }) => (<FormItem><FormLabel>DV</FormLabel><FormControl><Input placeholder="45" {...field} /></FormControl><FormMessage /></FormItem>)} />
                            </>
                        )}
                         <FormField control={form.control} name="customerName" render={({ field }) => (<FormItem className={cn(customerType === '02' && "md:col-span-2")}><FormLabel>Razón Social / Nombre</FormLabel><FormControl><Input placeholder="Global Tech Inc." {...field} /></FormControl><FormMessage /></FormItem>)} />
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormField control={form.control} name="address" render={({ field }) => (<FormItem className="md:col-span-2"><FormLabel>Dirección</FormLabel><FormControl><Input placeholder="Calle 1, Ciudad de Panamá" {...field} /></FormControl><FormMessage /></FormItem>)} />
                        <FormField control={form.control} name="email" render={({ field }) => (<FormItem><FormLabel>Email (Opcional)</FormLabel><FormControl><Input type="email" placeholder="contacto@empresa.com" {...field} /></FormControl><FormMessage /></FormItem>)} />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader><CardTitle>3. Items de la Factura</CardTitle></CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Código</TableHead>
                                <TableHead className="w-1/3">Descripción</TableHead>
                                <TableHead className="text-right">Cant.</TableHead>
                                <TableHead>Unidad</TableHead>
                                <TableHead className="text-right">P. Unit.</TableHead>
                                <TableHead className="text-right">Desc. (%)</TableHead>
                                <TableHead>ITBMS</TableHead>
                                <TableHead className="text-right">Total</TableHead>
                                <TableHead></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {itemFields.map((field, index) => {
                                const item = form.watch(`items.${index}`);
                                const itemPrice = (item.quantity || 0) * (item.unitPrice || 0);
                                const itemDiscount = (itemPrice * (item.discount || 0)) / 100;
                                const netPrice = itemPrice - itemDiscount;
                                const itbmsValue = netPrice * ({ "00": 0, "01": 0.07, "02": 0.10, "03": 0.15 }[item.itbmsRate] || 0);
                                const total = netPrice + itbmsValue;
                                return (
                                <TableRow key={field.id}>
                                    <TableCell><FormField control={form.control} name={`items.${index}.code`} render={({ field }) => <Input {...field} className="w-24"/>} /></TableCell>
                                    <TableCell><FormField control={form.control} name={`items.${index}.description`} render={({ field }) => <Input {...field} />} /></TableCell>
                                    <TableCell><FormField control={form.control} name={`items.${index}.quantity`} render={({ field }) => <Input type="number" {...field} className="w-20 text-right"/>} /></TableCell>
                                    <TableCell><FormField control={form.control} name={`items.${index}.unit`} render={({ field }) => <Input {...field} className="w-20"/>} /></TableCell>
                                    <TableCell><FormField control={form.control} name={`items.${index}.unitPrice`} render={({ field }) => <Input type="number" {...field} className="w-24 text-right"/>} /></TableCell>
                                    <TableCell><FormField control={form.control} name={`items.${index}.discount`} render={({ field }) => <Input type="number" {...field} className="w-20 text-right"/>} /></TableCell>
                                    <TableCell>
                                        <FormField control={form.control} name={`items.${index}.itbmsRate`} render={({ field }) => (
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl><SelectTrigger className="w-24"><SelectValue /></SelectTrigger></FormControl>
                                                <SelectContent>
                                                    <SelectItem value="00">0%</SelectItem>
                                                    <SelectItem value="01">7%</SelectItem>
                                                    <SelectItem value="02">10%</SelectItem>
                                                    <SelectItem value="03">15%</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        )} />
                                    </TableCell>
                                    <TableCell className="text-right font-medium">{total.toFixed(2)}</TableCell>
                                    <TableCell><Button type="button" variant="ghost" size="icon" onClick={() => removeItem(index)}><Trash2 className="h-4 w-4 text-red-500"/></Button></TableCell>
                                </TableRow>
                            )})}
                        </TableBody>
                    </Table>
                    <Button type="button" variant="outline" size="sm" className="mt-4" onClick={() => appendItem({ code: '', description: '', quantity: 1, unit: 'Und', unitPrice: 0, discount: 0, itbmsRate: '01' })}>
                        <PlusCircle className="mr-2 h-4 w-4" /> Agregar Item
                    </Button>
                     {form.formState.errors.items && <p className="text-sm font-medium text-destructive mt-2">{form.formState.errors.items.message}</p>}
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                    <Card>
                        <CardHeader><CardTitle>4. Formas de Pago</CardTitle></CardHeader>
                        <CardContent>
                             <Table>
                                <TableHeader><TableRow><TableHead>Tipo</TableHead><TableHead className="text-right">Valor</TableHead><TableHead></TableHead></TableRow></TableHeader>
                                <TableBody>
                                    {paymentFields.map((field, index) => (
                                        <TableRow key={field.id}>
                                            <TableCell>
                                                 <FormField control={form.control} name={`payments.${index}.type`} render={({ field }) => (
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl><SelectTrigger><SelectValue placeholder="Seleccione..." /></SelectTrigger></FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="01">Efectivo</SelectItem>
                                                            <SelectItem value="02">Cheque</SelectItem>
                                                            <SelectItem value="03">ACH</SelectItem>
                                                            <SelectItem value="04">Tarjeta de Crédito/Débito</SelectItem>
                                                            <SelectItem value="99">Otro</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                )} />
                                            </TableCell>
                                            <TableCell>
                                                <FormField control={form.control} name={`payments.${index}.value`} render={({ field }) => <Input type="number" {...field} className="text-right" />} />
                                            </TableCell>
                                            <TableCell>
                                                <Button type="button" variant="ghost" size="icon" onClick={() => removePayment(index)}><Trash2 className="h-4 w-4 text-red-500"/></Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                             <Button type="button" variant="outline" size="sm" className="mt-4" onClick={() => appendPayment({ type: '', value: 0 })}>
                                <PlusCircle className="mr-2 h-4 w-4" /> Agregar Pago
                            </Button>
                            {form.formState.errors.payments && <p className="text-sm font-medium text-destructive mt-2">{form.formState.errors.payments.message}</p>}
                        </CardContent>
                    </Card>
                </div>

                <div className="md:col-span-1">
                    <TotalsSection control={form.control} />
                </div>
            </div>

            <CardFooter className="flex-col md:flex-row justify-end gap-4 p-0">
                <Button type="button" variant="outline" onClick={handleDownloadXml}><Download className="mr-2"/> Descargar XML</Button>
                <Button type="button" variant="secondary" onClick={handleSaveDraft}><Save className="mr-2"/> Guardar Borrador</Button>
                <Button type="submit" size="lg"><Send className="mr-2"/> Enviar a HKA</Button>
            </CardFooter>
        </form>
      </Form>
    </div>
  )
}
