import { Injectable, OnInit } from '@angular/core';
import { IProducts } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {
    // this.getProducts();
  }

  products: IProducts[] = [];

  getProducts = async () => {
    const productsData = await fetch('http://localhost:3001/api/v1/products');
    this.products = await productsData.json();
  };

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
