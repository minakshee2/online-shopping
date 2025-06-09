import { Injectable } from '@angular/core';
import { ICart } from '../models/cart.model';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartSubject: BehaviorSubject<ICart[]> = new BehaviorSubject<ICart[]>(
    []
  );

  constructor(private http: HttpClient) {}

  private addToCartUrl = 'http://localhost:3005/api/v1/cart';
  private apiCartUrl = 'http://localhost:3005/api/v1/cart/items';
  //private apiUpdateCartUrl = 'http://localhost:3005/api/v1/updatecart';
  private removeFromCartUrl = 'http://localhost:3005/api/v1/cart';

  cart$ = this.cartSubject.asObservable();
  currentCart: ICart[];

  getCartItems(): Observable<ICart[]> {
    return this.http.get<ICart[]>(this.apiCartUrl);
    // return this.http.get<ICart[]>(this.apiCartUrl).pipe(
    //   tap((data) => {
    //     this.cartSubject.next(data);
    //   })
    // );
  }

  addToCart(item: ICart): Observable<ICart[]> {
    console.log('check for product', item.productId);

    return this.http.post<ICart[]>(this.addToCartUrl, item);
  }

  removeFromCart(item: ICart): Observable<any> {
    console.log('remove item ');
    //const params = new HttpParams().set('productId', item.productId);
    const params = { productId: item.productId };

    const url = `${this.removeFromCartUrl}/${item.productId}`;
    console.log('&&&&&&&&&&&&&&&&', params, url);
    return this.http.delete(url);
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
