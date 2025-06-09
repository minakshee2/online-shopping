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
    this.loadCart();
  }

  loadCart() {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;

      // if (this.cartItems.length == 0) {
      //   this.isCartEmpty = true;
      // }
    });
  }

  getItemQty(qty: number) {
    this.counter = qty;
    return this.counter;
  }

  addToCart(item: ICart) {
    this.counter = item.qty;
    this.incrementCounter();
    //this.cartItems[0].qty = this.counter;
    //item.qty = this.counter;
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
    this.loadCart();
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
    this.updateCartService.removeFromCart(this.product);
    console.log('refresh  cart');

    this.loadCart();
  }

  updateCart(item: ICart) {
    this.counter = item.qty;

    this.decrementCounter();
    //item.qty = this.counter;
    //this.isDelete = false;

    this.product = {
      productId: item.productId,
      name: item.name,
      img: item.img,
      price: item.price,
      qty: this.counter,
    };

    if (this.counter <= 0) {
      this.updateCartService.removeFromCart(this.product);
    } else {
      this.updateCartService.addToCart(this.product);
    }
    this.loadCart();
  }

  incrementCounter() {
    this.counter++;
  }

  decrementCounter() {
    this.counter--;
    if (this.counter < 0) {
      this.counter = 0;
    }
  }

  getCartSummary() {
    return this.updateCartService.getCartSummary();
  }
}
