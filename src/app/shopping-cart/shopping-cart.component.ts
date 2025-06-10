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

  totalQty: number = 0;
  totalAmt: number = 0;

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
      //console.log('loadcart ', items[0].qty);
      // if (this.cartItems.length == 0) {
      //   this.isCartEmpty = true;
      // }
    });
  }

  // getItemQty(qty: number) {
  //   this.counter = qty;
  //   return this.counter;
  // }

  addToCart(item: ICart) {
    this.counter = item.qty;
    this.incrementCounter();
    //this.cartItems.qty = this.counter;
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

    this.cartService.addToCart(this.product).subscribe({
      next: (response) => {
        console.log('Success:', response);
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
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
    this.cartService
      .removeFromCart(this.product)
      .subscribe((data) => console.log(data));
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
      this.cartService
        .removeFromCart(this.product)
        .subscribe((data) => console.log(data));
    } else {
      this.cartService.addToCart(this.product).subscribe({
        next: (response) => {
          console.log('Success:', response);
        },
        error: (error) => {
          console.error('Error:', error);
        },
      });
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
    this.cartService.getCartSummary().subscribe((summary) => {
    console.log('summary ', summary);
    
  });
}
}
