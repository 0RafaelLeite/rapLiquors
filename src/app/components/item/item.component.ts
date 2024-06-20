import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { Item } from './item.model';

@Component({
  selector: 'app-itens',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItensComponent implements OnInit {
  itens: Item[] = [];
  quantities: number[] = [];
  filteredItens: Item[] = [];
  selectedTipo: string | null = null;

  constructor(private ItemService: ItemService) { }

  ngOnInit(): void {
    this.ItemService.getItems().subscribe(items => {
      this.itens = items;
      this.quantities = Array(items.length).fill(1);
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
    //TODO: implementar carrinho
  }
}
export { Item };

