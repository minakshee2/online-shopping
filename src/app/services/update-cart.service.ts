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
    //this.cartService.addToCart(product);
    console.log('Adding product to cart ****:', product);
    this.cartService.addToCart(product).subscribe({
      next: (response) => {
        console.log('Success:', response);
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
    //return this.cartService.getCartSummary();
  }

  removeFromCart(product: ICart) {
    this.cartService
      .removeFromCart(product)
      .subscribe((data) => console.log(data));
    //return this.cartService.getCartSummary();
  }

  getCartSummary() {
    return this.cartService.getCartSummary();
  }
}
