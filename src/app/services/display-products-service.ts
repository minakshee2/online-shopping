import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DisplayProductsService {
  constructor() {
    // this.getProducts();
  }

  displayProducts: any[] = [];

  getDisplayProducts = async () => {
    const productsData = await fetch('http://localhost:3000/api/v1/display');
    this.displayProducts = await productsData.json();
    console.log('display products', this.displayProducts);

    //return this.displayProducts;
  };

  getAllDisplayProducts() {
    return this.displayProducts;
  }
}
