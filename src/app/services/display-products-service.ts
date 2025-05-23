import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DisplayProductsService {
  constructor(private http: HttpClient) {}

  displayProducts: any[] = [];

  private apiUrl = 'http://localhost:3000/api/v1/display';

  getDisplayProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
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
