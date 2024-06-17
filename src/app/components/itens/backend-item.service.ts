import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../../models/itemModel';

@Injectable({
  providedIn: 'root'
})
export class BackendItemService {
  private apiUrl = 'http://localhost:5000/api/items/save-items'; // Altere para a URL do seu backend

  constructor(private http: HttpClient) { }

  saveItems(items: Item[]): Observable<any> {
    return this.http.post(this.apiUrl, items);
  }
}
