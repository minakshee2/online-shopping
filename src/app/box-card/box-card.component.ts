import { Component } from '@angular/core';

@Component({
  selector: 'app-box-card',
  templateUrl: './box-card.component.html',
  styleUrl: './box-card.component.css',
})
export class BoxCardComponent {
  title: string = 'Shop for home essentials';
  buttonName: string = 'Discover more in home';
  imgDscr1: string = 'Cleaning Tools';
  imgDscr2: string = 'Home Storage';
  imgDscr3: string = 'Home Decor';
  imgDscr4: string = 'Bedding';

  msg: string = '';

  getImagePath(id: string) {
    return '/assets/images/' + id + '.jpg';
  }

  // 'https://material.angular.io/assets/img/examples/shiba2.jpg';
}
