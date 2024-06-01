import { Component } from '@angular/core';

@Component({
  selector: 'app-populares',
  templateUrl: './populares.component.html',
  styleUrl: './populares.component.css'
})
export class PopularesComponent  {
  quantities: number[] = [1, 1, 1, 1];

  addToCart(product: string, price: number, quantity: number) {
    console.log(`Adicionado ao carrinho: ${product} - Quantidade: ${quantity} - Preço: R$${price}`);
    // Aqui você pode adicionar a lógica para realmente adicionar o produto ao carrinho
  }
}