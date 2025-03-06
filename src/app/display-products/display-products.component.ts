import { Component, OnInit } from '@angular/core';
import { IProducts } from '../models/products.model';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrl: './display-products.component.css',
})
export class DisplayProductsComponent implements OnInit {
  category: string = '';
  fashionCategory: string = '';
  enteredText: string = '';
  products: IProducts[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.category = params['category'];
      this.fashionCategory = params['fashionCategory'];

      //console.log('params ', this.category);

      this.products = this.productService.getProductsByCategory(
        this.category,
        this.fashionCategory
      );
    });
  }
}
