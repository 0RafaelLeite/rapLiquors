export interface OrderItem {
  beverageId: string;
  name: string;
  quantity: number;
  price: number;
}

export interface Order {
  _id: string;
  userId: string;
  items: OrderItem[];
  totalPrice: number;
  paymentOption: string;
  installments: number;
  createdAt: Date;
}
