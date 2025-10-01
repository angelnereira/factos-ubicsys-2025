
"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { Save, CheckCircle, AlertTriangle } from "lucide-react"

const settingsSchema = z.object({
  companyName: z.string().min(1, "El nombre de la empresa es requerido."),
  ruc: z.string().min(1, "El RUC es requerido."),
  businessName: z.string().min(1, "La razón social es requerida."),
  address: z.string().min(1, "La dirección es requerida."),
  phone: z.string().min(1, "El teléfono es requerido."),
  email: z.string().email("Debe ser un correo electrónico válido."),

  branchCode: z.string().min(1, "El código de sucursal es requerido."),
  billingPoint: z.string().min(1, "El punto de facturación es requerido."),
  emissionType: z.string().min(1, "El tipo de emisión es requerido."),

  demoTokenEmpresa: z.string(),
  demoTokenPassword: z.string(),
  isDemoActive: z.boolean().default(true),

  prodTokenEmpresa: z.string(),
  prodTokenPassword: z.string(),
  isProdActive: z.boolean().default(false),
})
.refine(data => !(data.isDemoActive && data.isProdActive), {
    message: "Solo un ambiente (Demo o Producción) puede estar activo a la vez.",
    path: ["isProdActive"],
})
.refine(data => {
    if (data.isDemoActive && (!data.demoTokenEmpresa || !data.demoTokenPassword)) {
        return false;
    }
    return true;
}, {
    message: "Las credenciales de Demo son requeridas si el ambiente está activo.",
    path: ["demoTokenEmpresa"],
})
.refine(data => {
    if (data.isProdActive && (!data.prodTokenEmpresa || !data.prodTokenPassword)) {
        return false;
    }
    return true;
}, {
    message: "Las credenciales de Producción son requeridas si el ambiente está activo.",
    path: ["prodTokenEmpresa"],
});


export default function SettingsPage() {
    const { toast } = useToast()

    const form = useForm<z.infer<typeof settingsSchema>>({
        resolver: zodResolver(settingsSchema),
        defaultValues: {
            companyName: "",
            ruc: "",
            businessName: "",
            address: "",
            phone: "",
            email: "",
            branchCode: "001",
            billingPoint: "001",
            emissionType: "01",
            demoTokenEmpresa: "",
            demoTokenPassword: "",
            isDemoActive: true,
            prodTokenEmpresa: "",
            prodTokenPassword: "",
            isProdActive: false,
        },
    })

    const handleActiveChange = (activeEnv: 'demo' | 'prod') => {
        if (activeEnv === 'demo') {
            form.setValue('isDemoActive', true);
            form.setValue('isProdActive', false);
        } else {
            form.setValue('isDemoActive', false);
            form.setValue('isProdActive', true);
        }
    }

    async function validateConnection(env: 'demo' | 'prod') {
        toast({
            title: `Validando conexión ${env === 'demo' ? 'Demo' : 'Producción'}...`,
            description: "Esto puede tardar unos segundos.",
        });

        // Simular llamada a API
        await new Promise(resolve => setTimeout(resolve, 1500));

        const token = form.getValues(env === 'demo' ? 'demoTokenEmpresa' : 'prodTokenEmpresa');

        if (token && token !== 'error') {
             toast({
                title: "Conexión Exitosa",
                description: `Las credenciales para el ambiente ${env === 'demo' ? 'Demo' : 'Producción'} son válidas.`,
                variant: "default",
            });
        } else {
            toast({
                title: "Error de Conexión",
                description: "No se pudo validar la conexión. Verifique las credenciales.",
                variant: "destructive",
            });
        }
    }

    function onSubmit(values: z.infer<typeof settingsSchema>) {
        console.log(values)
        // Lógica para guardar en Supabase aquí
        toast({
            title: "Configuración Guardada",
            description: "Sus cambios han sido guardados exitosamente.",
        })
    }

    return (
    <div className="space-y-6">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Datos de la Empresa</CardTitle>
                        <CardDescription>Información general de su empresa para la facturación.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField control={form.control} name="companyName" render={({ field }) => (<FormItem><FormLabel>Nombre de la empresa</FormLabel><FormControl><Input placeholder="Mi Empresa S.A." {...field} /></FormControl><FormMessage /></FormItem>)} />
                        <FormField control={form.control} name="ruc" render={({ field }) => (<FormItem><FormLabel>RUC</FormLabel><FormControl><Input placeholder="123456-7-891011" {...field} /></FormControl><FormMessage /></FormItem>)} />
                        <FormField control={form.control} name="businessName" render={({ field }) => (<FormItem><FormLabel>Razón Social</FormLabel><FormControl><Input placeholder="Mi Empresa S.A." {...field} /></FormControl><FormMessage /></FormItem>)} />
                        <FormField control={form.control} name="address" render={({ field }) => (<FormItem><FormLabel>Dirección</FormLabel><FormControl><Input placeholder="Calle 1, Ciudad de Panamá" {...field} /></FormControl><FormMessage /></FormItem>)} />
                        <FormField control={form.control} name="phone" render={({ field }) => (<FormItem><FormLabel>Teléfono</FormLabel><FormControl><Input placeholder="+507 123-4567" {...field} /></FormControl><FormMessage /></FormItem>)} />
                        <FormField control={form.control} name="email" render={({ field }) => (<FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="contacto@miempresa.com" {...field} /></FormControl><FormMessage /></FormItem>)} />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Configuración Fiscal</CardTitle>
                        <CardDescription>Valores por defecto para la emisión de documentos fiscales.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <FormField control={form.control} name="branchCode" render={({ field }) => (<FormItem><FormLabel>Código de Sucursal</FormLabel><FormControl><Input placeholder="001" {...field} /></FormControl><FormMessage /></FormItem>)} />
                        <FormField control={form.control} name="billingPoint" render={({ field }) => (<FormItem><FormLabel>Punto de Facturación</FormLabel><FormControl><Input placeholder="001" {...field} /></FormControl><FormMessage /></FormItem>)} />
                        <FormField control={form.control} name="emissionType" render={({ field }) => (<FormItem><FormLabel>Tipo de Emisión</FormLabel><FormControl><Input placeholder="01" {...field} /></FormControl><FormMessage /></FormItem>)} />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Credenciales HKA</CardTitle>
                        <CardDescription>Configure las credenciales de conexión para los ambientes de HKA.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="demo" className="w-full">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="demo">Demo</TabsTrigger>
                                <TabsTrigger value="prod">Producción</TabsTrigger>
                            </TabsList>
                            <TabsContent value="demo" className="space-y-6 pt-4">
                                <FormField control={form.control} name="demoTokenEmpresa" render={({ field }) => (<FormItem><FormLabel>Token Empresa</FormLabel><FormControl><Input type="text" placeholder="Ingrese su token de empresa" {...field} /></FormControl><FormMessage /></FormItem>)} />
                                <FormField control={form.control} name="demoTokenPassword" render={({ field }) => (<FormItem><FormLabel>Token Password</FormLabel><FormControl><Input type="text" placeholder="Ingrese su token password" {...field} /></FormControl><FormMessage /></FormItem>)} />
                                <FormItem>
                                    <FormLabel>URL</FormLabel>
                                    <FormControl><Input readOnly value="https://demoemision.thefactoryhka.com.pa/ws/obj/v1.0/Service.svc" /></FormControl>
                                </FormItem>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button type="button" variant="outline" onClick={() => validateConnection('demo')} className="w-full sm:w-auto"><CheckCircle className="mr-2" />Validar Conexión Demo</Button>
                                    <FormField control={form.control} name="isDemoActive" render={({ field }) => (
                                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 sm:p-4 w-full sm:w-auto flex-1">
                                            <FormLabel className="mb-0 pr-4">Activar Demo</FormLabel>
                                            <FormControl><Switch checked={field.value} onCheckedChange={() => handleActiveChange('demo')} /></FormControl>
                                        </FormItem>
                                    )} />
                                </div>
                            </TabsContent>
                            <TabsContent value="prod" className="space-y-6 pt-4">
                                <FormField control={form.control} name="prodTokenEmpresa" render={({ field }) => (<FormItem><FormLabel>Token Empresa</FormLabel><FormControl><Input type="text" placeholder="Ingrese su token de empresa" {...field} /></FormControl><FormMessage /></FormItem>)} />
                                <FormField control={form.control} name="prodTokenPassword" render={({ field }) => (<FormItem><FormLabel>Token Password</FormLabel><FormControl><Input type="text" placeholder="Ingrese su token password" {...field} /></FormControl><FormMessage /></FormItem>)} />
                                <FormItem>
                                    <FormLabel>URL</FormLabel>
                                    <FormControl><Input readOnly value="https://emision.thefactoryhka.com.pa/ws/obj/v1.0/Service.svc" /></FormControl>
                                </FormItem>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button type="button" variant="outline" onClick={() => validateConnection('prod')} className="w-full sm:w-auto"><AlertTriangle className="mr-2" />Validar Conexión Producción</Button>
                                     <FormField control={form.control} name="isProdActive" render={({ field }) => (
                                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 sm:p-4 w-full sm:w-auto flex-1">
                                            <FormLabel className="mb-0 pr-4">Activar Producción</FormLabel>
                                            <FormControl><Switch checked={field.value} onCheckedChange={() => handleActiveChange('prod')} /></FormControl>
                                        </FormItem>
                                    )} />
                                </div>
                                <FormMessage>{form.formState.errors.isProdActive?.message}</FormMessage>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
                
                <div className="flex justify-end">
                    <Button type="submit" size="lg">
                        <Save className="mr-2" /> Guardar Configuración
                    </Button>
                </div>
            </form>
        </Form>
    </div>
  );
}
