import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AllCategoryServiceTsService {
  constructor() {}

  allCategory = ['All', 'Electronics', 'Clothing', 'Home Decor', 'Beauty'];

  getAllCategory() {
    return this.allCategory;
  }
}
