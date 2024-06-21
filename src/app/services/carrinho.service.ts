import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  getCartItems(): CartItem[] {
    return this.cartItemsSubject.value;
  }

  addItem(item: CartItem): void {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = [...currentItems, item];
    this.cartItemsSubject.next(updatedItems);
  }

  clearCart() {
    this.cartItemsSubject.next([]);
  }
}
