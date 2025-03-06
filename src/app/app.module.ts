import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeadlinesSectionComponent } from './headlines-section/headlines-section.component';
import { BoxCardComponent } from './box-card/box-card.component';
import { ShoppingSectionComponent } from './shopping-section/shopping-section.component';
import { HeadlineMsgSectionComponent } from './headline-msg-section/headline-msg-section.component';
import { MatCardModule } from '@angular/material/card';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { FormsModule } from '@angular/forms';
import { SearchedProductsComponent } from './searched-products/searched-products.component';
import { ProductBoxComponent } from './product-box/product-box.component';
import { AllMenuComponent } from './all-menu/all-menu.component';
import { DisplayProductsComponent } from './display-products/display-products.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { SignInMenuComponent } from './sign-in-menu/sign-in-menu.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import { DisplayAllComponent } from './display-all/display-all.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NavigationComponent,
    HeadlinesSectionComponent,
    BoxCardComponent,
    ShoppingSectionComponent,
    HeadlineMsgSectionComponent,
    FooterSectionComponent,
    SearchedProductsComponent,
    ProductBoxComponent,
    AllMenuComponent,
    DisplayProductsComponent,
    RegisterUserComponent,
    LoginUserComponent,
    SignInMenuComponent,
    ShoppingCartComponent,

    DisplayAllComponent,
  ],

  imports: [BrowserModule, AppRoutingModule, MatCardModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
