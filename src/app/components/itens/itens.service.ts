import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../../models/itemModel';

@Injectable({
  providedIn: 'root'
})
export class itemService {
  private itensURL = '../../assets/itens.json';

  constructor(private http: HttpClient) { }

  getItens(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itensURL);
  }
}
