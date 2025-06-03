import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchedProductsComponent } from './searched-products/searched-products.component';
import { AllMenuComponent } from './all-menu/all-menu.component';
import { DisplayProductsComponent } from './display-products/display-products.component';
import { SignInMenuComponent } from './sign-in-menu/sign-in-menu.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ShoppingSectionComponent } from './shopping-section/shopping-section.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: ShoppingSectionComponent },
      { path: 'searchedProducts', component: SearchedProductsComponent },
      { path: 'menu', component: AllMenuComponent },

      {
        path: 'displayProduct',

        component: DisplayProductsComponent,
      },
      { path: 'cart', component: ShoppingCartComponent },
    ],
  },

  { path: 'register', component: RegisterUserComponent },
  { path: 'signin', component: LoginUserComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
