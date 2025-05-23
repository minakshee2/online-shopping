import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent implements OnInit {
  //isMenuOpen: boolean = false;
  toggleMenu: boolean = true;
  constructor(
    private router: Router,
    private stateService: StateService
  ) {}

  ngOnInit(): void {}

  toggleComponent() {
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationStart) {
    //     this.stateService.setIsToggleMenu(!this.toggleMenu);
    //   }
    // });
    console.log('clicked', this.router.events);

    // this.router.events.subscribe((event) => {
    //   console.log('event is:', event);
    //   if (event instanceof NavigationStart) {
    //     console.log('url is:', event.url);
    //     if (event.url === '/home') {
    //       this.stateService.setIsToggleMenu(true);
    //     } else {
    //       this.stateService.setIsToggleMenu(false);
    //     }
    //   }
    // });

    this.stateService.showComponent = !this.stateService.showComponent;
  }
}
