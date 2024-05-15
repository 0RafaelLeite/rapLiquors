import { Component } from '@angular/core';

@Component({
  selector: 'app-populares',
  templateUrl: './populares.component.html',
  styleUrl: './populares.component.css'
})
export class PopularesComponent  {
  quantidadeItem1: number = 0;
  quantidadeItem2: number = 0;
  quantidadeItem3: number = 0;
  quantidadeItem4: number = 0;
  quantidadeItem5: number = 0;
  incrementarQuantidade(item: number) {
    this.quantidadeItem1++;
  }

  decrementarQuantidade(item: number) {
    if (this.quantidadeItem1 > 0) {
      this.quantidadeItem1--;
    }
  }

  adicionarItem(item: number) {
    console.log(`Adicionando item ${item} - Quantidade: ${this.quantidadeItem1}`);
  }
}
