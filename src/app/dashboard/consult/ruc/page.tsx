"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Search, Loader2 } from "lucide-react"

type RucInfo = {
    name: string;
    dv: string;
    status: string;
}

export default function RucConsultationPage() {
    const [ruc, setRuc] = useState("")
    const [rucResult, setRucResult] = useState<RucInfo | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleConsult = (e: React.FormEvent) => {
        e.preventDefault()
        if (!ruc) return
        setIsLoading(true)
        setRucResult(null)
        setError(null)
        
        setTimeout(() => {
            if (ruc === "error") {
                setError("RUC not found or invalid.")
            } else {
                setRucResult({
                    name: "Global Tech Inc.",
                    dv: "9",
                    status: "Active"
                })
            }
            setIsLoading(false)
        }, 1500)
    }

    return (
        <div className="flex justify-center">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>RUC/DV Consultation</CardTitle>
                    <CardDescription>Enter a RUC to consult taxpayer information.</CardDescription>
                </CardHeader>
                <form onSubmit={handleConsult}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="ruc" className="text-sm font-medium">RUC</label>
                            <Input 
                                id="ruc"
                                placeholder="e.g., 12345678"
                                value={ruc}
                                onChange={(e) => setRuc(e.target.value)}
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-4">
                        <Button type="submit" className="w-full" disabled={isLoading || !ruc}>
                            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Search className="mr-2 h-4 w-4" />}
                            Consult
                        </Button>
                        {error && (
                            <div className="w-full rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-center">
                                <p className="text-sm font-medium text-destructive">{error}</p>
                            </div>
                        )}
                        {rucResult && (
                            <div className="w-full rounded-lg border p-4 space-y-2">
                                <h3 className="font-semibold text-center">Consultation Result</h3>
                                <div className="text-sm"><strong>Name:</strong> {rucResult.name}</div>
                                <div className="text-sm"><strong>DV:</strong> {rucResult.dv}</div>
                                <div className="text-sm"><strong>Status:</strong> {rucResult.status}</div>
                            </div>
                        )}
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}
