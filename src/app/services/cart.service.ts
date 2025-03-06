import { Injectable } from '@angular/core';
import { ICart } from '../models/cart.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartSubject: BehaviorSubject<ICart[]> = new BehaviorSubject<ICart[]>(
    []
  );

  cart$ = this.cartSubject.asObservable();

  getCart(): ICart[] {
    return this.cartSubject.getValue();
  }

  addToCart(item: ICart): void {
    const currentCart = this.cartSubject.getValue();
    const itemIndex = currentCart.findIndex(
      (cartItem) => cartItem.productId === item.productId
    );

    if (itemIndex !== -1) {
      currentCart[itemIndex].qty = item.qty;
    } else {
      currentCart.push(item);
    }

    this.cartSubject.next([...currentCart]);
    //console.log(this.getCart());
  }

  removeFromCart(item: ICart, isDelete: boolean): void {
    const currentCart = this.cartSubject.getValue();
    //console.log(' item qty ', item.qty);

    const itemIndex = currentCart.findIndex(
      (cartItem) => cartItem.productId === item.productId
    );

    if (
      itemIndex !== -1 &&
      currentCart[itemIndex].qty > 1 &&
      isDelete === false
    ) {
      currentCart[itemIndex].qty = item.qty;
    } else {
      this.cartSubject.next(
        currentCart.filter((cartItem) => cartItem.productId !== item.productId)
      );
    }
  }

  getCartSummary() {
    return this.cartSubject.value.reduce(
      (summary, product) => {
        summary.totalQty += product.qty;
        summary.totalAmt += product.qty * product.price;
        return summary;
      },
      { totalQty: 0, totalAmt: 0 }
    );
  }

  clearCart(): void {
    this.cartSubject.next([]);
  }

  // constructor() {}

  // public cartItems: ICart[] = [];

  // itemData: ICart | undefined;
  // cartId: number = 0;

  // addToCart(id: number, qty: number) {
  //   //console.log(' this.isItemExist ', this.isItemExist(id));

  //   if (!this.isItemExist(id)) {
  //     this.cartItems.push({
  //       cartId: 1,
  //       productId: id,
  //       name: 'abcsd',
  //       qty: qty,
  //       price: 100,
  //     });
  //   } else {
  //     this.updateCart(id, qty);
  //   }

  //   console.log('cart ', this.cartItems);
  // }

  // updateCart(id: number, qty: number) {
  //   this.cartId = this.getCartId(id);
  //   console.log(' update cart ', qty, ' ', this.cartId);
  //   let index = this.cartItems.findIndex((item) => item.cartId === this.cartId);
  //   this.cartItems[index].qty = qty;
  // }

  // getCartId(id: number) {
  //   this.itemData = this.cartItems.find((item) => item.productId === id);
  //   return this.itemData?.cartId ?? 0;
  // }

  // isItemExist(id: number) {
  //   this.itemData = this.cartItems.find((item) => item.productId === id);
  //   if (this.itemData) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}
