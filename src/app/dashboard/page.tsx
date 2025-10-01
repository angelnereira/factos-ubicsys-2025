import { InvoiceDataTable } from '@/components/invoices/invoice-data-table';
import { invoices } from '@/app/lib/mock-data';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Here's a list of your recent invoices.
          </p>
        </div>
        <Button asChild className="w-full md:w-auto">
          <Link href="/dashboard/invoices/new">
            <PlusCircle className="mr-2 h-4 w-4" /> New Invoice
          </Link>
        </Button>
      </div>
      <InvoiceDataTable data={invoices} />
    </div>
  );
}
