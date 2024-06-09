import { Component } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent {
  cartItems = [
    { name: 'Produto 1', quantity: 2, price: 100.00 },
    { name: 'Produto 2', quantity: 1, price: 200.00 },
    { name: 'Produto 3', quantity: 3, price: 150.00 },
  ];

  totalPrice = 0;
  discountAmount = 0;
  interestAmount = 0;
  paymentOption = 'avista';
  installments = 1;
  installmentOptions = Array.from({ length: 12 }, (_, i) => i + 1);

  constructor() {
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  }

  updateTotalPrice() {
    this.calculateTotalPrice();

    if (this.paymentOption === 'avista') {
      this.discountAmount = this.totalPrice * 0.05;
      this.totalPrice -= this.discountAmount;
    } else if (this.paymentOption === 'parcelado' && this.installments > 4) {
      const monthlyInterestRate = 0.015;
      const totalInterest = Math.pow(1 + monthlyInterestRate, this.installments) - 1;
      this.interestAmount = this.totalPrice * totalInterest;
      this.totalPrice += this.interestAmount;
    } else {
      this.discountAmount = 0;
      this.interestAmount = 0;
    }
  }

  finalizePurchase() {
    let finalPrice = this.totalPrice;
    if (this.paymentOption === 'avista') {
      alert(`Compra finalizada! Valor final: R$ ${finalPrice.toFixed(2)} com desconto.`);
    } else {
      alert(`Compra finalizada! Valor final: R$ ${finalPrice.toFixed(2)} em ${this.installments}x.`);
    }
  }
}