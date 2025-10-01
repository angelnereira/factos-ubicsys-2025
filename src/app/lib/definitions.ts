
export type InvoiceStatus = 'Paid' | 'Pending' | 'Overdue' | 'Canceled';

export type Invoice = {
  id: string;
  customerName: string;
  ruc: string;
  date: string;
  status: InvoiceStatus;
  amount: number;
};

export type MovementStatus = 'Recibida' | 'En proceso' | 'Enviada' | 'Timbrada' | 'Error';

export type Movement = {
  id: string;
  invoiceId: string;
  timestamp: Date;
  status: MovementStatus;
}
