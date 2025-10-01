"use client";

import { useEffect, useState } from 'react';
import { InvoiceDataTable } from '@/components/invoices/invoice-data-table';
import { invoices as mockInvoices } from '@/app/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Loader2, PlusCircle } from 'lucide-react';
import Link from 'next/link';
import { type Invoice } from '@/app/lib/definitions';
import { Skeleton } from '@/components/ui/skeleton';

function DataTableSkeleton() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 space-y-4">
      <div className="space-y-2">
        <Skeleton className="h-6 w-1/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular la carga de datos desde una API
    const timer = setTimeout(() => {
      setInvoices(mockInvoices);
      setIsLoading(false);
    }, 1500); // Simular un retraso de 1.5 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Principal</h1>
          <p className="text-muted-foreground">
            Aquí hay una lista de sus facturas recientes.
          </p>
        </div>
        <Button asChild className="w-full md:w-auto">
          <Link href="/dashboard/invoices/new">
            <PlusCircle className="mr-2 h-4 w-4" /> Nueva Factura
          </Link>
        </Button>
      </div>
      {isLoading ? (
        <DataTableSkeleton />
      ) : (
        <InvoiceDataTable data={invoices} />
      )}
    </div>
  );
}
