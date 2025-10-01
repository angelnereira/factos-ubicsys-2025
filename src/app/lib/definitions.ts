export type InvoiceStatus = 'Paid' | 'Pending' | 'Overdue' | 'Canceled';

export type Invoice = {
  id: string;
  customerName: string;
  ruc: string;
  date: string;
  status: InvoiceStatus;
  amount: number;
};
