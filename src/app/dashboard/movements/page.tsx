
"use client"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal, Copy, RefreshCw, Send, CheckCircle, AlertTriangle, Clock, XCircle, FileDown, PlusCircle, Server, Database, FolderOpen,Webhook } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { type Movement, type MovementStatus } from "@/app/lib/definitions"
import { useToast } from "@/hooks/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const mockMovements: Movement[] = [
  { id: "MVT-001", invoiceId: "INV-101", timestamp: new Date(), status: "Timbrada" },
  { id: "MVT-002", invoiceId: "INV-102", timestamp: new Date(Date.now() - 2 * 60 * 1000), status: "Enviada" },
  { id: "MVT-003", invoiceId: "INV-103", timestamp: new Date(Date.now() - 5 * 60 * 1000), status: "Error" },
  { id: "MVT-004", invoiceId: "INV-104", timestamp: new Date(Date.now() - 10 * 60 * 1000), status: "Recibida" },
  { id: "MVT-005", invoiceId: "INV-105", timestamp: new Date(Date.now() - 15 * 60 * 1000), status: "Timbrada" },
];

function StatusBadge({ status, className }: { status: MovementStatus; className?: string }) {
  const statusConfig = {
    Recibida: { icon: <Clock className="h-3 w-3" />, color: "bg-blue-500", label: "Recibida" },
    "En proceso": { icon: <RefreshCw className="h-3 w-3 animate-spin" />, color: "bg-yellow-500", label: "En Proceso" },
    Enviada: { icon: <Send className="h-3 w-3" />, color: "bg-indigo-500", label: "Enviada" },
    Timbrada: { icon: <CheckCircle className="h-3 w-3" />, color: "bg-green-500", label: "Timbrada" },
    Error: { icon: <XCircle className="h-3 w-3" />, color: "bg-red-500", label: "Error" },
  };

  const config = statusConfig[status];

  return (
    <Badge className={`flex items-center gap-2 border-transparent text-white ${config.color} ${className}`}>
      {config.icon}
      <span>{config.label}</span>
    </Badge>
  );
}

function MovementActions({ movement }: { movement: Movement }) {
  const { toast } = useToast();

  const handleRetry = () => {
    toast({ title: "Reintentando envío", description: `Se está reintentando el envío de la factura ${movement.invoiceId}.` });
  };
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Abrir menú</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
        <DropdownMenuItem>Ver Detalle</DropdownMenuItem>
        <DropdownMenuItem onClick={handleRetry} disabled={movement.status !== 'Error'}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Reintentar
        </DropdownMenuItem>
        <DropdownMenuItem>
            <FileDown className="mr-2 h-4 w-4" />
            Descargar XML/PDF
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


export default function MovementsPage() {
  const [isAutoSendOn, setIsAutoSendOn] = useState(true);
  const { toast } = useToast()

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: "Copiado", description: "El endpoint del webhook ha sido copiado al portapapeles."});
  };

  const webhookUrl = "https://facturapro.com/api/webhooks/invoices";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Monitor y Automatización</h1>
        <p className="text-muted-foreground">Supervise la salud de la API, gestione facturas remotas y configure la automatización.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Monitor de Salud API HKA</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm">
          <div className="flex flex-col gap-2 p-4 rounded-lg bg-secondary/50">
            <span className="text-muted-foreground">Estado Conexión</span>
            <div className="flex items-center gap-2 font-semibold">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Activa
            </div>
          </div>
          <div className="flex flex-col gap-2 p-4 rounded-lg bg-secondary/50">
            <span className="text-muted-foreground">Ambiente Activo</span>
            <Badge variant="outline" className="w-fit">Demo</Badge>
          </div>
          <div className="flex flex-col gap-2 p-4 rounded-lg bg-secondary/50">
            <span className="text-muted-foreground">Último Ping</span>
            <span className="font-semibold">hace 32s</span>
          </div>
          <div className="flex flex-col gap-2 p-4 rounded-lg bg-secondary/50">
            <span className="text-muted-foreground">Folios Restantes</span>
            <span className="font-semibold">4,821</span>
          </div>
          <div className="flex flex-col gap-2 p-4 rounded-lg bg-secondary/50">
            <span className="text-muted-foreground">Latencia Promedio</span>
            <span className="font-semibold">148ms</span>
          </div>
          <div className="flex flex-col gap-2 p-4 rounded-lg bg-secondary/50">
            <span className="text-muted-foreground">Caídas (24h)</span>
            <span className="font-semibold text-green-600">0</span>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-3">
            <CardHeader>
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle>Puntos de Recepción de Documentos</CardTitle>
                        <CardDescription>Configure cómo su sistema recibe facturas de fuentes externas.</CardDescription>
                    </div>
                    <Button variant="outline"><PlusCircle className="mr-2 h-4 w-4" /> Nuevo Punto</Button>
                </div>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="webhook">
                    <TabsList className="grid w-full grid-cols-5">
                        <TabsTrigger value="webhook"><Webhook className="mr-2"/> Webhook</TabsTrigger>
                        <TabsTrigger value="api"><Server className="mr-2"/> API Externa</TabsTrigger>
                        <TabsTrigger value="db"><Database className="mr-2"/> Base de Datos</TabsTrigger>
                        <TabsTrigger value="folder"><FolderOpen className="mr-2"/> Carpeta/Archivos</TabsTrigger>
                        <TabsTrigger value="ftp">FTP/SFTP</TabsTrigger>
                    </TabsList>
                    <TabsContent value="webhook" className="pt-4 space-y-4">
                        <p className="text-sm text-muted-foreground">Reciba facturas instantáneamente a través de un endpoint HTTP POST.</p>
                        <div>
                            <Label htmlFor="webhook-url" className="text-muted-foreground">Endpoint Webhook Activo</Label>
                            <div className="flex items-center gap-2">
                                <Input id="webhook-url" readOnly value={webhookUrl} />
                                <Button variant="outline" size="icon" onClick={() => copyToClipboard(webhookUrl)}>
                                <Copy className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="api" className="pt-4">
                        <p className="text-sm text-muted-foreground">Configure el sistema para consultar periódicamente un endpoint de su API.</p>
                        {/* Aquí irían los campos para configurar API */}
                    </TabsContent>
                    <TabsContent value="db" className="pt-4">
                        <p className="text-sm text-muted-foreground">Conéctese directamente a su base de datos para leer facturas pendientes.</p>
                         {/* Aquí irían los campos para configurar DB */}
                    </TabsContent>
                     <TabsContent value="folder" className="pt-4">
                        <p className="text-sm text-muted-foreground">Monitoree una carpeta local, de red, o FTP/SFTP en busca de nuevos archivos.</p>
                         {/* Aquí irían los campos para configurar carpetas */}
                    </TabsContent>
                     <TabsContent value="ftp" className="pt-4">
                        <p className="text-sm text-muted-foreground">Sincronice archivos de facturas desde un servidor FTP o SFTP.</p>
                         {/* Aquí irían los campos para configurar FTP/SFTP */}
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
      </div>

       <Card>
          <CardHeader>
            <CardTitle>Automatización de Envío</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                    <Label htmlFor="auto-send">Auto-envío a HKA</Label>
                    <p className="text-xs text-muted-foreground">Envía automáticamente las facturas recibidas en el webhook a HKA.</p>
                </div>
                <Switch id="auto-send" checked={isAutoSendOn} onCheckedChange={setIsAutoSendOn} />
            </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ opacity: isAutoSendOn ? 1 : 0.5 }}>
                <div className="space-y-2">
                    <Label htmlFor="frequency">Frecuencia de Envío</Label>
                    <Select defaultValue="5" disabled={!isAutoSendOn}>
                        <SelectTrigger id="frequency"><SelectValue /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="0">Inmediato</SelectItem>
                            <SelectItem value="5">Cada 5 minutos</SelectItem>
                            <SelectItem value="15">Cada 15 minutos</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="retries">Reintentos en Caso de Error</Label>
                    <Select defaultValue="3" disabled={!isAutoSendOn}>
                        <SelectTrigger id="retries"><SelectValue /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">1 Reintento</SelectItem>
                            <SelectItem value="2">2 Reintentos</SelectItem>
                            <SelectItem value="3">3 Reintentos</SelectItem>
                            <SelectItem value="5">5 Reintentos</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
          </CardContent>
        </Card>

      <Card>
        <CardHeader>
          <CardTitle>Log de Movimientos en Tiempo Real</CardTitle>
        </CardHeader>
        <CardContent>
           <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[180px]">Timestamp</TableHead>
                <TableHead>Factura No.</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockMovements.map((mov) => (
                <TableRow key={mov.id}>
                  <TableCell>{mov.timestamp.toLocaleString('es-PA')}</TableCell>
                  <TableCell className="font-medium">{mov.invoiceId}</TableCell>
                  <TableCell><StatusBadge status={mov.status} /></TableCell>
                  <TableCell className="text-right">
                    <MovementActions movement={mov} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
