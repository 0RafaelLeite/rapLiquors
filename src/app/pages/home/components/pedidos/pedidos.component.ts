import { Component } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {
  orders = [
    {
      date: '8 de Junho',
      items: ['item x2', 'item x3', 'item x5', 'item'],
      status: 'A caminho'
    },
    {
      date: '3 de Maio',
      items: ['item x2', 'item x3', 'item x5', 'item'],
      status: 'Entregue'
    }
  ];
}