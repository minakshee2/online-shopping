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
import { CartService } from '../services/cart.service';
import { ICart } from '../models/cart.model';
import { UpdateCartService } from '../services/update-cart.service';
import { ProductsService } from '../services/products.service';

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
    private updateCartService: UpdateCartService,
    private productService: ProductsService
  ) {}

  addToCart() {
    this.incrementCounter();
    this.qtyAvailable = this.productService.getStockCheck(this.product.id);

    if (this.counter > this.qtyAvailable) {
      this.counter = this.qtyAvailable;
    }

    this.productDetails = {
      productId: this.product.id,
      name: this.product.name,
      img: this.product.img,
      price: this.product.price,
      qty: this.counter,
    };
    this.updateCartService.addToCart(this.productDetails);
  }

  removeFromCart() {
    this.decrementCounter();
    this.productDetails = {
      productId: this.product.id,
      name: this.product.name,
      img: this.product.img,
      price: this.product.price,
      qty: this.counter,
    };
    this.updateCartService.removeFromCart(this.productDetails, false);
  }

  incrementCounter() {
    this.counter++;
  }

  decrementCounter() {
    this.counter--;
  }
}
