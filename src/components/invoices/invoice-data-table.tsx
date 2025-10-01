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
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => alert(`Viewing invoice ${invoice.id}`)}>
          View details
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Download className="mr-2 h-4 w-4" />
          <span>Download PDF</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FileCode className="mr-2 h-4 w-4" />
          <span>Download XML</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="focus:bg-destructive/80 focus:text-destructive-foreground text-destructive">
          <Ban className="mr-2 h-4 w-4" />
          <span>Cancel Invoice</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function InvoiceStatusBadge({ status }: { status: Invoice["status"] }) {
  if (status === "Paid") {
    return (
      <Badge style={{ backgroundColor: 'hsl(var(--chart-2))', color: 'hsl(var(--primary-foreground))' }} className="border-transparent capitalize">
        {status}
      </Badge>
    );
  }
  if (status === "Pending") {
    return (
      <Badge style={{ backgroundColor: 'hsl(var(--chart-4))', color: 'hsl(var(--primary-foreground))' }} className="border-transparent capitalize">
        {status}
      </Badge>
    );
  }
  if (status === "Overdue") {
    return <Badge variant="destructive" className="capitalize">{status}</Badge>;
  }
  if (status === "Canceled") {
    return <Badge variant="secondary" className="capitalize">{status}</Badge>;
  }
  return <Badge variant="outline" className="capitalize">{status}</Badge>;
}


export function InvoiceDataTable({ data }: { data: Invoice[] }) {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="w-[50px] text-right">Actions</TableHead>
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
              <TableCell>{new Date(invoice.date).toLocaleDateString()}</TableCell>
              <TableCell className="text-right">
                {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(invoice.amount)}
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
