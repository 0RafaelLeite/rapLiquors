import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Order } from '../models/orderModel';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:5000/api/orders';

  constructor(private http: HttpClient) {}

  createOrder(order: Order): Observable<Order> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    });

    return this.http.post<Order>(this.apiUrl, order, { headers }).pipe(
      catchError((error) => {
        throw 'Erro ao criar pedido: ' + error;
      })
    );
  }

  getOrders(): Observable<Order[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    });

    return this.http.get<Order[]>(this.apiUrl, { headers }).pipe(
      catchError((error) => {
        throw 'Erro ao obter pedidos: ' + error;
      })
    );
  }
}
