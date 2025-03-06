import { Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { ICart } from '../models/cart.model';
import { IProducts } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class UpdateCartService {
  constructor(private cartService: CartService) {}

  addToCart(product: ICart) {
    this.cartService.addToCart(product);
    //return this.cartService.getCartSummary();
  }

  removeFromCart(product: ICart, isDelete: boolean) {
    this.cartService.removeFromCart(product, isDelete);
    //return this.cartService.getCartSummary();
  }

  getCartSummary() {
    return this.cartService.getCartSummary();
  }
}
