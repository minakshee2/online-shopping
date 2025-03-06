import { Injectable } from '@angular/core';
import { IProducts } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  products: IProducts[] = [
    {
      id: 1,
      category: 'clothing',
      subCategory: 'tshirt',
      fashionCategory: 'boys',
      name: 'Bumeex Toddler Boys 3pk Short Sleeve Tshirt',
      brand: 'online-shopping',
      img: '/assets/images/clothing/clothing1.jpg',
      price: 40,
      quantity: 5,
    },
    {
      id: 2,
      category: 'clothing',
      subCategory: 'tshirt',
      fashionCategory: 'boys',
      name: 'The Childrens Place Baby Boys Dinos Short Sleeve Graphic T Shirt',
      brand: 'online-shopping',
      img: '/assets/images/clothing/clothing2.jpg',
      price: 30,
      quantity: 100,
    },
    {
      id: 3,
      category: 'clothing',
      subCategory: 'jeans',
      fashionCategory: 'boys',
      name: 'The Childrens Place Boys Basic Bootcut Jeans',
      brand: 'online-shopping',
      img: '/assets/images/clothing/clothing3.jpg',
      price: 15,
      quantity: 100,
    },
    {
      id: 4,
      category: 'clothing',
      subCategory: 'jeans',
      fashionCategory: 'boys',
      name: 'Levi Strauss Signature Gold Mens Athletic Fit Jeans',
      brand: 'online-shopping',
      img: '/assets/images/clothing/clothing4.jpg',
      price: 20,
      quantity: 100,
    },
    {
      id: 5,
      category: 'clothing',
      subCategory: 'jeans',
      fashionCategory: 'girls',
      name: 'Peacolate 3-6Years Girl Denim Jeans',
      brand: 'online-shopping',
      img: '/assets/images/clothing/clothing5.jpg',
      price: 15,
      quantity: 100,
    },
    {
      id: 6,
      category: 'clothing',
      subCategory: 'dress',
      fashionCategory: 'girls',
      name: 'Uhnice Little Girls Sequin Sleeveless Mesh Rainbow Dress for Wedding Party',
      brand: 'online-shopping',
      img: '/assets/images/clothing/clothing6.jpg',
      price: 28,
      quantity: 100,
    },
    {
      id: 7,
      category: 'clothing',
      subCategory: 'dress',
      fashionCategory: 'womens',
      name: 'EUOVMY Womens Short Sleeve Loose Plain Maxi Dresses Casual Vacation Long Dresses with Pockets',
      brand: 'online-shopping',
      img: '/assets/images/clothing/clothing7.jpg',
      price: 20,
      quantity: 100,
    },
    {
      id: 8,
      category: 'clothing',
      subCategory: 'dress',
      fashionCategory: 'womens',
      name: 'HOTOUCH Womens Summer Short Sleeve A-Line Midi Dresses Casual Floral T-Shirt Dress Flowy Beach Sundress with Pockets',
      brand: 'online-shopping',
      img: '/assets/images/clothing/clothing8.jpg',
      price: 15,
      quantity: 100,
    },
    {
      id: 9,
      category: 'clothing',
      subCategory: 'tops',
      fashionCategory: 'womens',
      name: 'Anymeet 2025 Womens Tops Short Sleeve Spring Summer Tunic Casual Tshirts Pleated Blouses for Leggings M-3XL',
      brand: 'online-shopping',
      img: '/assets/images/clothing/clothing9.jpg',
      price: 13,
      quantity: 100,
    },
    {
      id: 10,
      category: 'clothing',
      subCategory: 'tops',
      fashionCategory: 'womens',
      name: 'AUTOMET Long Sleeve Shirts Womens Pleated Business Casual Blouses with Smocked Cuffs',
      brand: 'online-shopping',
      img: '/assets/images/clothing/clothing10.jpg',
      price: 15,
      quantity: 100,
    },
    {
      id: 11,
      category: 'clothing',
      subCategory: 'tops',
      fashionCategory: 'womens',
      name: 'VALOLIA Womens Blouses 3/4 Sleeve Dressy Tops Business Casual Double Layers Shirts',
      brand: 'online-shopping',
      img: '/assets/images/clothing/clothing11.jpg',
      price: 22,
      quantity: 100,
    },
    {
      id: 12,
      category: 'clothing',
      subCategory: 'shirt',
      fashionCategory: 'mens',
      name: 'COOFANDY Mens Short Sleeve Button Down Shirt Casual Summer Beach Vacation Shirt with Pocket',
      brand: 'online-shopping',
      img: '/assets/images/clothing/clothing12.jpg',
      price: 25,
      quantity: 100,
    },
    {
      id: 13,
      category: 'clothing',
      subCategory: 'shirt',
      fashionCategory: 'mens',
      name: 'COOFANDY Mens Short Sleeve Button Down Shirts Summer Casual Textured Shirt Vacation Beach Wedding Shirts with Pocket',
      brand: 'online-shopping',
      img: '/assets/images/clothing/clothing13.jpg',
      price: 27,
      quantity: 100,
    },
    {
      id: 14,
      category: 'clothing',
      subCategory: 'tshirt',
      fashionCategory: 'mens',
      name: 'COOFANDY Mens Cotton Henley T-Shirts Short Sleeve Button Casual Basic Tees Work Shirts with Split Side',
      brand: 'online-shopping',
      img: '/assets/images/clothing/clothing14.jpg',
      price: 17,
      quantity: 100,
    },
    {
      id: 15,
      category: 'clothing',
      subCategory: 'tshirt',
      fashionCategory: 'mens',
      name: 'PEGENO Mens Fashion Casual Front Placket Short Sleeve Henley T-Shirts Cotton Shirts',
      brand: 'online-shopping',
      img: '/assets/images/clothing/clothing15.jpg',
      price: 15,
      quantity: 100,
    },
    {
      id: 16,
      category: 'electronics',
      subCategory: 'refrigerator',
      fashionCategory: '',
      name: 'ACFR322 RCA Mini Refrigerator, Compact Freezer Compartment, Adjustable Thermostat Control, Reversible Door, Ideal Fridge for Dorm, Office, Apartment, Platinum Stainless, 3.2 Cubic Feet',
      brand: 'online-shopping',
      img: '/assets/images/electronics/electronic1.jpg',
      price: 550,
      quantity: 100,
    },
  ];

  filteredProducts: IProducts[] = [];

  getSerchedProducts(category: string, subCategory: string): IProducts[] {
    //console.log('category ', category);

    return this.products.filter(
      (p) => p.category === category && p.subCategory === subCategory
    );
  }

  getProductsByCategory(
    category: string,
    fashionCategory: string
  ): IProducts[] {
    // console.log(' service category ', category, ' ', fashionCategory);

    switch (category) {
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
      default:
        break;
    }

    return this.filteredProducts;
  }

  getStockCheck(productId: number) {
    return this.products.find((item) => item.id === productId)?.quantity ?? 0;
  }
}
