import { Component, OnInit } from '@angular/core';
import { itemService } from '../../services/itens.service';
import { Item } from '../../models/itemModel';
import { CartService, CartItem } from '../../services/carrinho.service'
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

  constructor(private itemService: itemService, private cartService: CartService) { }

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

  addToCart(id: number, name: string, price: number, quantity: number): void {
    const cartItem: CartItem = { id, name, price, quantity };
    this.cartService.addItem(cartItem);
  }
}

export { Item };

