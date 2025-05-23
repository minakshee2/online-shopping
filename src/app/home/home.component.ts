import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { DisplayProductsService } from '../services/display-products-service';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  //@Input() isMenuOpen: boolean = false;
  //isMenuOpen: boolean = true;

  //this.stateService.showComponent  = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductsService,
    private displayProducts: DisplayProductsService,
    public stateService: StateService
  ) {
    this.stateService.showComponent = true;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.productService.products = data;
    });

    this.displayProducts.getDisplayProducts().subscribe((data) => {
      this.displayProducts.displayProducts = data;
    });
  }
}
