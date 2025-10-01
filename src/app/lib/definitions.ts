export type Invoice = {
  id: string;
  customerName: string;
  ruc: string;
  date: string;
  status: 'Paid' | 'Pending' | 'Overdue' | 'Canceled';
  amount: number;
};
