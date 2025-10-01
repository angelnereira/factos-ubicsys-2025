"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Ban, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function CancelInvoicePage() {
    const [invoiceId, setInvoiceId] = useState("")
    const [reason, setReason] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const { toast } = useToast()

    const handleCancel = (e: React.FormEvent) => {
        e.preventDefault()
        if (!invoiceId || !reason) {
             toast({
                title: "Campos Requeridos",
                description: "Por favor, ingrese el ID de la factura y el motivo de la cancelación.",
                variant: "destructive",
            });
            return;
        }

        setIsLoading(true)
        
        console.log(`Cancelando factura ${invoiceId} por: ${reason}`)

        setTimeout(() => {
            if(invoiceId === 'error') {
                 toast({
                    title: "Error en la Cancelación",
                    description: `No se pudo cancelar la factura ${invoiceId}. Verifique el ID e inténtelo de nuevo.`,
                    variant: "destructive",
                });
            } else {
                toast({
                    title: "Solicitud de Cancelación Enviada",
                    description: `La solicitud para cancelar la factura ${invoiceId} ha sido enviada a HKA.`,
                });
                setInvoiceId("")
                setReason("")
            }
            setIsLoading(false)
        }, 1500)
    }

    return (
        <div className="flex justify-center">
            <Card className="w-full max-w-lg">
                <CardHeader>
                    <CardTitle>Cancelar Factura</CardTitle>
                    <CardDescription>Ingrese el ID de la factura y el motivo para solicitar su cancelación a HKA.</CardDescription>
                </CardHeader>
                <form onSubmit={handleCancel}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="invoiceId" className="text-sm font-medium">ID de Factura</label>
                            <Input 
                                id="invoiceId"
                                placeholder="e.g., INV-001"
                                value={invoiceId}
                                onChange={(e) => setInvoiceId(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="reason" className="text-sm font-medium">Motivo de la Cancelación</label>
                            <Textarea
                                id="reason"
                                placeholder="Escriba aquí el motivo de la cancelación..."
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                            />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" className="w-full" disabled={isLoading || !invoiceId || !reason}>
                            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Ban className="mr-2 h-4 w-4" />}
                            Solicitar Cancelación
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}
