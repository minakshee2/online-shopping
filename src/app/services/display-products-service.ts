import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IDisplayProducts } from '../models/display.model';

@Injectable({
  providedIn: 'root',
})
export class DisplayProductsService {
  constructor(private http: HttpClient) {}

  displayProducts: any[] = [];
  displayProducts$: BehaviorSubject<IDisplayProducts[]> = new BehaviorSubject<
    IDisplayProducts[]
  >([]);

  private apiUrl = 'http://localhost:3000/api/v1/display';

  getDisplayProducts(): Observable<IDisplayProducts[]> {
    return this.http.get<IDisplayProducts[]>(this.apiUrl).pipe(
      tap((data) => {
        this.displayProducts$.next(data);
      })
    );
  }

  // getDisplayProducts = async () => {
  //   const productsData = await fetch('http://localhost:3000/api/v1/display');
  //   this.displayProducts = await productsData.json();
  //   console.log('display products', this.displayProducts);

  // };

  getAllDisplayProducts() {
    return this.displayProducts;
  }
}
