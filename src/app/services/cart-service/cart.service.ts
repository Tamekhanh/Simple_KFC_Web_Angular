import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  private cart: any[] = [];

  addToCart(item: any): void {
    const cartItem = this.cart.find(cartItem => cartItem === item);
    if (cartItem) {
      cartItem.amount += 1;
    } else {
      item.amount = 1;
      this.cart.push(item);
    }
    console.log('Item added to cart:', item);
  }
  addToCartDetail(item: any): void {
    const cartItem = this.cart.find(cartItem => cartItem.id === item.id);
    if (cartItem) {
      cartItem.amount += item.amount;
    } else {
      this.cart.push(item);
    }
    console.log('Item added to cart:', item);
  }

  getCartItem(): any[] {
    return this.cart;
  }

  removeFromCart (item:any):void {
    const index = this.cart.indexOf(item);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }
  incrementItemAmount(item: any): void {
    const cartItem = this.cart.find(cartItem => cartItem === item);
    if (cartItem) {
      cartItem.amount += 1;
    }
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, item) => total + (item.sale_price || item.base_price) * item.amount, 0);
  }

  decrementItemAmount(item: any): void {
    const cartItem = this.cart.find(cartItem => cartItem === item);
    if (cartItem && cartItem.amount > 1) {
      cartItem.amount -= 1;
    }
  }

  getTotalItemAmount(): number {
    return this.cart.reduce((total, item) => total + item.amount, 0);
  }
}
