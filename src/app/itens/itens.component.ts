// src/app/itens/itens.component.ts
import { Component, OnInit } from '@angular/core';
import { itemService } from '../itens/itens.service';
import { Item } from '../models/itemModel';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class itensComponent implements OnInit {
  itens: Item[] = [];
  quantities: number[] = [];

  constructor(private itemService: itemService) { }

  ngOnInit(): void {
    this.itemService.getItens().subscribe(data => {
      this.itens = data;
      this.quantities = new Array(this.itens.length).fill(1);
    });
  }

  addToCart(nome: string, preco: number, quantity: number): void {
    // Lógica para adicionar ao carrinho
    //console.log(Added ${quantity} x ${nome} at R$ ${preco});
  }
}
