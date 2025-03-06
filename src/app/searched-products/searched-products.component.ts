import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { IProducts } from '../models/products.model';

@Component({
  selector: 'app-searched-products',
  templateUrl: './searched-products.component.html',
  styleUrl: './searched-products.component.css',
})
export class SearchedProductsComponent implements OnInit {
  category: string = '';
  enteredText: string = '';
  products: IProducts[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.category = params['category'];
      this.enteredText = params['text'];
      console.log(' inputs ', this.category, ' ', this.enteredText);

      this.products = this.productService.getSerchedProducts(
        this.category,
        this.enteredText
      );

      //console.log(' products ', this.product[0].name);
    });
  }
}
