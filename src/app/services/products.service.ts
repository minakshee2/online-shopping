import { Injectable, OnInit } from '@angular/core';
import { IProducts } from '../models/products.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {
    // this.getProducts();
  }

  products: IProducts[] = [];

  private apiUrl = 'http://localhost:3001/api/v1/products';

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }


  filteredProducts: IProducts[] = [];

  getSerchedProducts(category: string, subCategory: string): IProducts[] {
    console.log('category ', category, ' ', subCategory);
    if (category.toLowerCase() === 'all') {
      if (subCategory) {
        const filteredProducts = this.products.filter(
          (p) => p.subCategory?.toLowerCase() === subCategory?.toLowerCase()
        );
        return filteredProducts;
      }
      return this.products;
    }
    if (!subCategory) {
      const filteredProducts = this.products.filter(
        (p) => p.category?.toLocaleLowerCase() === category?.toLocaleLowerCase()
      );
      return filteredProducts;
    }

    return this.products.filter(
      (p) =>
        p.category?.toLowerCase() === category?.toLowerCase() &&
        p.subCategory?.toLowerCase() === subCategory?.toLowerCase()
    );
  }

  getProductsByCategory(
    category: string,
    fashionCategory: string
  ): IProducts[] {
    // console.log(' service category ', category, ' ', fashionCategory);

    switch (category.toLowerCase()) {
      case 'clothing':
        this.filteredProducts = this.products.filter(
          (p) =>
            p.category === category && p.fashionCategory === fashionCategory
        );
        break;
      case 'electronics':
        this.filteredProducts = this.products.filter(
          (p) => p.category === category
        );
        break;
      case 'beauty':
        this.filteredProducts = this.products.filter(
          (p) => p.category === category
        );
        break;
      case 'home decor':
        this.filteredProducts = this.products.filter(
          (p) => p.category === category
        );
        break;
      default:
        break;
    }

    return this.filteredProducts;
  }

  getStockCheck(productId: number) {
    return this.products.find((item) => item.id === productId)?.quantity ?? 0;
  }
}
