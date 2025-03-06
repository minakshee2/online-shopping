import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AllCategoryServiceTsService } from './../services/all-category-service.ts.service';
import { ProductsService } from '../services/products.service';
import { IProducts } from '../models/products.model';
import { Router } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { SignInMenuComponent } from '../sign-in-menu/sign-in-menu.component';
import { MatButton } from '@angular/material/button';
import { Overlay } from '@angular/cdk/overlay';
import { UsersServicesService } from '../services/users-services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit, AfterViewInit {
  allCategory: string[] = [];
  totalCartItems: number = 0;

  constructor(
    private categoryService: AllCategoryServiceTsService,
    private router: Router,
    private matDialog: MatDialog,
    private usersService: UsersServicesService
  ) {}

  ngAfterViewInit(): void {}

  selctedCategory: string = 'All';
  enteredText: string = '';
  product: any;

  userName: string;

  ngOnInit(): void {
    this.allCategory = this.getAllCategory();
    this.getUserName();
  }

  getAllCategory() {
    return this.categoryService.getAllCategory();
  }

  onChangeCatgory(event: any) {
    this.selctedCategory = event.target[event.target.selectedIndex].text;
  }

  onSearch() {
    this.router.navigate(['/searchedProducts'], {
      queryParams: { category: this.selctedCategory, text: this.enteredText },
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

  getUserName() {
    this.userName = this.usersService.getUserName();
    console.log('user name ', this.userName);
  }

  displayCart() {
    this.router.navigate(['cart']);
  }
}
