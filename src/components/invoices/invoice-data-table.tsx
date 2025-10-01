"use client"

import * as React from "react"
import { MoreHorizontal, Download, FileCode, Ban } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { type Invoice } from "@/app/lib/definitions"
import { Card } from "../ui/card"

function InvoiceActions({ invoice }: { invoice: Invoice }) {
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
        <DropdownMenuItem onClick={() => alert(`Viendo la factura ${invoice.id}`)}>
          Ver detalles
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Download className="mr-2 h-4 w-4" />
          <span>Descargar PDF</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FileCode className="mr-2 h-4 w-4" />
          <span>Descargar XML</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="focus:bg-destructive/80 focus:text-destructive-foreground text-destructive">
          <Ban className="mr-2 h-4 w-4" />
          <span>Cancelar Factura</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function InvoiceStatusBadge({ status }: { status: Invoice["status"] }) {
  const statusMap = {
    Paid: 'Pagada',
    Pending: 'Pendiente',
    Overdue: 'Vencida',
    Canceled: 'Cancelada',
  }
  const translatedStatus = statusMap[status] || status;

  if (status === "Paid") {
    return (
      <Badge style={{ backgroundColor: 'hsl(var(--chart-2))', color: 'hsl(var(--primary-foreground))' }} className="border-transparent capitalize">
        {translatedStatus}
      </Badge>
    );
  }
  if (status === "Pending") {
    return (
      <Badge style={{ backgroundColor: 'hsl(var(--chart-4))', color: 'hsl(var(--primary-foreground))' }} className="border-transparent capitalize">
        {translatedStatus}
      </Badge>
    );
  }
  if (status === "Overdue") {
    return <Badge variant="destructive" className="capitalize">{translatedStatus}</Badge>;
  }
  if (status === "Canceled") {
    return <Badge variant="secondary" className="capitalize">{translatedStatus}</Badge>;
  }
  return <Badge variant="outline" className="capitalize">{translatedStatus}</Badge>;
}


export function InvoiceDataTable({ data }: { data: Invoice[] }) {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Factura</TableHead>
            <TableHead>Cliente</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead className="text-right">Monto</TableHead>
            <TableHead className="w-[50px] text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>{invoice.customerName}</TableCell>
              <TableCell>
                <InvoiceStatusBadge status={invoice.status} />
              </TableCell>
              <TableCell>{new Date(invoice.date).toLocaleDateString('es-ES')}</TableCell>
              <TableCell className="text-right">
                {new Intl.NumberFormat("es-PA", { style: "currency", currency: "PAB" }).format(invoice.amount)}
              </TableCell>
              <TableCell className="text-right">
                <InvoiceActions invoice={invoice} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
