import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AllCategoryServiceService } from '../services/all-category-service.service';

import { ActivatedRoute, Router } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { SignInMenuComponent } from '../sign-in-menu/sign-in-menu.component';
import { MatButton } from '@angular/material/button';
import { Overlay } from '@angular/cdk/overlay';
import { AuthServicesService } from '../services/authservices.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit, AfterViewInit {
  allCategory: string[] = [];
  totalCartItems: number = 0;

  constructor(
    private categoryService: AllCategoryServiceService,
    private router: Router,
    private matDialog: MatDialog,
    private authService: AuthServicesService,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngAfterViewInit(): void {}

  selctedCategory: string = 'All';
  enteredText: string = '';
  product: any;

  userName: string;

  ngOnInit(): void {
    this.allCategory = this.getAllCategory();
    this.usersService.userName$.subscribe((data) => {
      if (data) {
        this.userName = localStorage.getItem('userName') || '';
        console.log('User name from local storage: ', this.userName);
      }
    });
  }

  getAllCategory() {
    return this.categoryService.getAllCategory();
  }

  onChangeCatgory(event: any) {
    this.selctedCategory = event.target[event.target.selectedIndex].text;
  }

  onSearch() {
    console.log('star for search');

    this.router.navigate(['searchedProducts'], {
      queryParams: { category: this.selctedCategory, text: this.enteredText },
      relativeTo: this.route,
    });
  }

  openDialog() {
    let dialogRef = this.matDialog.open(SignInMenuComponent, {
      width: '350px',
      height: '300px',
      position: {
        top: '3%',
        left: '70%',
      },
      restoreFocus: true,
    });
  }

 
  displayCart() {
    this.router.navigate(['home/cart']);
  }
}
