import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  ViewChild,
} from '@angular/core';
import { IProducts } from '../models/products.model';
import { ICart } from '../models/cart.model';
import { UpdateCartService } from '../services/update-cart.service';
import { ProductsService } from '../services/products.service';
import { CartService } from './../services/cart.service';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrl: './product-box.component.css',
})
export class ProductBoxComponent {
  @Input() product: IProducts;
  productDetails: ICart;
  counter: number = 0;
  qtyAvailable: number = 0;

  constructor(
    private cartService: CartService,
    private updateCartService: UpdateCartService,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.cartService.getCartQty(this.product.productId).subscribe((items) => {
      if (items.length == 0) {
        this.counter = 0;
        return;
      }
      this.product.quantity = items[0].qty;
      this.counter = this.product.quantity;
       
    });
     
  }

  addToCart() {
    this.incrementCounter();
    this.qtyAvailable = this.productService.getStockCheck(
      this.product.productId
    );

    if (this.counter > this.qtyAvailable) {
      this.counter = this.qtyAvailable;
    }

    this.productDetails = {
      productId: this.product.productId,
      name: this.product.name,
      img: this.product.img,
      price: this.product.price,
      qty: this.counter,
    };
    this.cartService.addToCart(this.productDetails).subscribe({
      next: (response) => {
        console.log('Success:', response);
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
  }

  updateCart() {
    //this.counter = item.qty;

    this.decrementCounter();
    //item.qty = this.counter;
    //this.isDelete = false;

    this.productDetails = {
      productId: this.product.productId,
      name: this.product.name,
      img: this.product.img,
      price: this.product.price,
      qty: this.counter,
    };

    if (this.counter <= 0) {
      this.cartService
        .removeFromCart(this.productDetails)
        .subscribe((data) => console.log(data));
    } else {
      this.cartService.addToCart(this.productDetails).subscribe({
        next: (response) => {
          console.log('Success:', response);
        },
        error: (error) => {
          console.error('Error:', error);
        },
      });
    }
  }

  // removeFromCart() {
  //   this.decrementCounter();
  //   this.productDetails = {
  //     productId: this.product.productId,
  //     name: this.product.name,
  //     img: this.product.img,
  //     price: this.product.price,
  //     qty: this.counter,
  //   };
  //   this.cartService
  //     .removeFromCart(this.productDetails)
  //     .subscribe((data) => console.log(data));
  // }

  incrementCounter() {
    this.counter++;
  }

  decrementCounter() {
    this.counter--;
    if (this.counter < 0) {
      this.counter = 0;
    }
  }
}
