import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariablesService } from '../services/global-variables.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  //isMenuOpen: boolean = false;

  constructor(
    private router: Router,
    public globalVariables: GlobalVariablesService
  ) {}

  onClick() {
    this.globalVariables.isMenuOpen = !this.globalVariables.isMenuOpen;
    this.router.navigate(['home']);
  }
}
