import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { DisplayProductsService } from '../services/display-products-service';
import { GlobalVariablesService } from '../services/global-variables.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  //@Input() isMenuOpen: boolean = false;
  //isMenuOpen: boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductsService,
    private displayProducts: DisplayProductsService,
    public globalVariables: GlobalVariablesService
  ) {
    this.productService.getProducts();
    this.displayProducts.getDisplayProducts();
    this.globalVariables.isDefaultHeadlines = true;
    this.router.navigate(['headlines'], { relativeTo: this.route });
    //console.log('HomeComponent initialized');
    // this.router.navigate(['headlines']);
  }

  ngOnInit(): void {}
}
