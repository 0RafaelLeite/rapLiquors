import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../../services/carrinho.service';
import { OrderService } from '../../services/order.service';
@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  cartItems: CartItem[] = [];
  originalTotalPrice = 0;
  totalPrice = 0;
  discountAmount = 0;
  interestAmount = 0;
  paymentOption = 'avista';
  installments = 1;
  installmentOptions = Array.from({ length: 12 }, (_, i) => i + 1);
  
  constructor(private cartService: CartService, private orderService: OrderService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.calculateTotalPrice();
    });
  }

  calculateTotalPrice() {
    this.originalTotalPrice = this.cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    this.updateTotalPrice();
  }

  updateTotalPrice() {
    if (this.paymentOption === 'avista') {
      this.discountAmount = this.originalTotalPrice * 0.05;
      this.totalPrice = this.originalTotalPrice - this.discountAmount;
      this.interestAmount = 0; 
    } else if (this.paymentOption === 'parcelado' && this.installments > 4) {
      const monthlyInterestRate = 0.015;
      const totalInterest = Math.pow(1 + monthlyInterestRate, this.installments) - 1;
      this.interestAmount = this.originalTotalPrice * totalInterest;
      this.totalPrice = this.originalTotalPrice + this.interestAmount;
      this.discountAmount = 0; 
    } else {
      this.totalPrice = this.originalTotalPrice;
      this.discountAmount = 0;
      this.interestAmount = 0;
    }
  }

  finalizePurchase() {
    const order = {
      items: this.cartItems,
      totalPrice: this.totalPrice,
      paymentOption: this.paymentOption,
      installments: this.installments
    };
    this.orderService.createOrder(order).subscribe({
      next: () => {
        alert(`Compra finalizada! Valor final: R$ ${this.totalPrice.toFixed(2)}.`);
        this.cartService.clearCart();
      },
      error: () => {
        alert('Erro ao finalizar a compra. Tente novamente.');
      }
    });
  }
}
