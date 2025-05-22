import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-menu',
  templateUrl: './all-menu.component.html',
  styleUrl: './all-menu.component.css',
})
export class AllMenuComponent {
  currentCategory: string | null = null;
  currentFashionCategory: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.currentCategory = params['category'] || null;
      this.currentFashionCategory = params['fashionCategory'] || null;
    });
  }

  isActive(category: string, fashionCategory?: string): boolean {
    return (
      this.currentCategory === category &&
      (fashionCategory === undefined ||
        this.currentFashionCategory === fashionCategory)
    );
  }
}
