import { prisma } from '@/lib/prisma'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle, AlertTriangle } from 'lucide-react'

export default async function TestDbPage() {
  let config = null
  let error = null

  try {
    config = await prisma.configuracion.findFirst()
  } catch (e: any) {
    error = e.message
  }

  return (
    <div className="flex justify-center">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Prueba de Conexión a Base de Datos</CardTitle>
          <CardDescription>
            Intentando conectar y consultar la tabla 'Configuracion' usando Prisma Client.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error ? (
            <div className="flex items-center gap-4 rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-destructive">
              <AlertTriangle className="h-6 w-6" />
              <div>
                <p className="font-bold">Conexión Fallida</p>
                <p className="text-sm mt-1">{error}</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4 rounded-lg border border-green-500/50 bg-green-500/10 p-4 text-green-700">
              <CheckCircle className="h-6 w-6" />
              <div>
                <p className="font-bold">Conexión Exitosa</p>
                <p className="text-sm mt-1">
                  Se ha conectado a la base de datos y se ha obtenido la configuración.
                </p>
              </div>
            </div>
          )}

          {config && (
            <div className="mt-4 rounded-lg border p-4 space-y-2 bg-secondary/50">
              <h4 className="font-semibold text-center">Datos Obtenidos</h4>
              <pre className="text-sm overflow-auto">
                {JSON.stringify(config, null, 2)}
              </pre>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
