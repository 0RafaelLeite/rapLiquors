import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  register(data: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, data);
  }

  login(data: { userIdentifier: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, data);
  }

  addAddress(address: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/auth/address`, address);
  }

  createBeverage(beverage: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/beverages`, beverage);
  }

  updateBeverage(id: string, beverage: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/beverages/${id}`, beverage);
  }

  deleteBeverage(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/beverages/${id}`);
  }

  updateStock(id: string, quantity: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/beverages/stock/${id}`, { quantity });
  }

  createOrder(order: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/orders`, order);
  }

  getOrders(): Observable<any> {
    return this.http.get(`${this.apiUrl}/orders`);
  }
}
