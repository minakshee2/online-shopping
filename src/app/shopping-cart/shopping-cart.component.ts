import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ICart } from '../models/cart.model';
import { UpdateCartService } from '../services/update-cart.service';
import { IProducts } from '../models/products.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent implements OnInit {
  cartItems: ICart[] = [];
  product: ICart;

  isDelete: boolean = false;
  counter: number = 0;
  qtyAvailable: number = 0;
  isCartEmpty: boolean = false;

  constructor(
    private cartService: CartService,
    private updateCartService: UpdateCartService,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe((items) => {
      this.cartItems = items;
    });

    if( this.cartItems.length == 0 ){
      this.isCartEmpty = true;
    }
  }

  getItemQty(qty: number) {
    this.counter = qty;
    return this.counter;
  }

  addToCart(item: ICart) {
    this.counter = item.qty;
    this.incrementCounter();
    this.qtyAvailable = this.productService.getStockCheck(item.productId);

    if (this.counter > this.qtyAvailable) {
      this.counter = this.qtyAvailable;
    }

    this.product = {
      productId: item.productId,
      name: item.name,
      img: item.img,
      price: item.price,
      qty: this.counter,
    };

    this.updateCartService.addToCart(this.product);
  }

  removeFromCart(item: ICart) {
    this.isDelete = true;
    this.product = {
      productId: item.productId,
      name: item.name,
      img: item.img,
      price: item.price,
      qty: this.counter,
    };
    this.updateCartService.removeFromCart(this.product, this.isDelete);
  }

  updateCart(item: ICart) {
    this.counter = item.qty;

    this.decrementCounter();

    this.isDelete = false;

    this.product = {
      productId: item.productId,
      name: item.name,
      img: item.img,
      price: item.price,
      qty: this.counter,
    };
    this.updateCartService.removeFromCart(this.product, this.isDelete);
  }

  incrementCounter() {
    this.counter++;
  }

  decrementCounter() {
    this.counter--;
  }

  getCartSummary() {
    return this.updateCartService.getCartSummary();
  }
}
