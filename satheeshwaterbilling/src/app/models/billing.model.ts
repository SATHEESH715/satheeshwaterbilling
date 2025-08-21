export interface Billing {
  id: string; // UUID
  userId: string; // UUID
  categoryId: string; // UUID
  quantity: number;
  totalAmount: number;
  paymentStatus: 'pending' | 'paid' | 'failed';
  createdAt: Date;
  updatedAt: Date;
}
