export interface Order {
    date?: string;
    items: { name: string, quantity: number, price: number }[];
    totalPrice: number;
    paymentOption: string;
    installments: number;
  }
  