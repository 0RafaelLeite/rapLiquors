import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Order } from '../models/orderModel';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:5000/api/orders';

  constructor(private http: HttpClient, private authService: AuthService) { }

  createOrder(order: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, order);
  }

  getOrders(): Observable<Order[]> {
    const userId = this.authService.getUserId();
    return this.http.get<Order[]>(`${this.apiUrl}`);
  }
}
