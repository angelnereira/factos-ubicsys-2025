"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { FileQuestion, Loader2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function InvoiceStatusPage() {
    const [invoiceId, setInvoiceId] = useState("")
    const [status, setStatus] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleCheckStatus = (e: React.FormEvent) => {
        e.preventDefault()
        if (!invoiceId) return
        setIsLoading(true)
        setStatus(null)
        setTimeout(() => {
            const statuses = ["Processed", "Pending", "Error: Not Found", "Canceled"]
            const randomStatus = statuses[Math.floor(Math.random() * statuses.length)]
            setStatus(randomStatus)
            setIsLoading(false)
        }, 1500)
    }

    const getStatusVariant = (currentStatus: string | null) => {
        if (!currentStatus) return "outline";
        if (currentStatus.startsWith("Error")) return "destructive";
        if (currentStatus === "Processed") return "default";
        return "secondary";
    }

    return (
        <div className="flex justify-center">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Invoice Status Inquiry</CardTitle>
                    <CardDescription>Enter an invoice ID to check its current status with HKA.</CardDescription>
                </CardHeader>
                <form onSubmit={handleCheckStatus}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="invoiceId" className="text-sm font-medium">Invoice ID</label>
                            <Input 
                                id="invoiceId"
                                placeholder="e.g., INV-001"
                                value={invoiceId}
                                onChange={(e) => setInvoiceId(e.target.value)}
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-4">
                        <Button type="submit" className="w-full" disabled={isLoading || !invoiceId}>
                            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <FileQuestion className="mr-2 h-4 w-4" />}
                            Check Status
                        </Button>
                        {status && (
                            <div className="w-full rounded-lg border p-4 text-center">
                                <p className="text-sm text-muted-foreground">Status for <span className="font-bold text-foreground">{invoiceId}</span>:</p>
                                <Badge className="mt-2 text-base" variant={getStatusVariant(status)}>
                                    {status}
                                </Badge>
                            </div>
                        )}
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}
