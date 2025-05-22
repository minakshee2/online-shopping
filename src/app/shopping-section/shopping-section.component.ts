import { Component, OnInit } from '@angular/core';
import { BoxCardComponent } from '../box-card/box-card.component';
import { DisplayProductsService } from '../services/display-products-service';
import { IDisplayProducts } from '../models/display.model';

@Component({
  selector: 'app-shopping-section',
  templateUrl: './shopping-section.component.html',
  styleUrl: './shopping-section.component.css',
})
export class ShoppingSectionComponent implements OnInit {
  constructor(private displayProducts: DisplayProductsService) {}

  products: IDisplayProducts[] = [];

  ngOnInit(): void {
    setTimeout(() => {
      this.products = this.displayProducts.getAllDisplayProducts();
    }, 2000);
    console.log('display products ', this.products);
  }

  // getDisplayDetails = async(req,res) =>{
  //  this.products = await this.displayProducts.getAllDisplayProducts();
  //  req.send(this.products);
  // }
}
