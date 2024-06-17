import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() { }

  getCartItems(): CartItem[] {
    return this.cartItemsSubject.value;
  }

  addItemToCart(item: CartItem) {
    const cartItems = this.getCartItems();
    const existingItem = cartItems.find(i => i.name === item.name);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      cartItems.push(item);
    }
    this.cartItemsSubject.next(cartItems);
  }

  clearCart() {
    this.cartItemsSubject.next([]);
  }
}
