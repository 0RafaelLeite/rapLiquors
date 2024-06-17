// src/app/itens/itens.component.ts
import { Component, OnInit } from '@angular/core';
import { itemService } from '../itens/itens.service';
import { Item } from '../models/itemModel';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent implements OnInit {
  itens: Item[] = [];
  quantities: number[] = [];
  filteredItens: Item[] = [];
  selectedTipo: string | null = null;

  constructor(private itemService: itemService) { }

  ngOnInit(): void {
    this.itemService.getItens().subscribe(data => {
      this.itens = data;
      this.filteredItens = data;
      this.quantities = new Array(this.itens.length).fill(1);
    });
  }

  filterItens(tipo: string): void {
    if (this.selectedTipo === tipo) {
      this.selectedTipo = null;
      this.filteredItens = this.itens;
    } else {
      this.selectedTipo = tipo;
      this.filteredItens = this.itens.filter(item => item.tipo === tipo);
    }
  }

  addToCart(nome: string, preco: number, quantity: number): void {
    // Lógica para adicionar ao carrinho
    //console.log(Added ${quantity} x ${nome} at R$ ${preco});
  }
}
export { Item };

