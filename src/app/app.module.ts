import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxNumberSpinnerModule } from 'ngx-number-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ItemCarouselComponent } from './components/item-carousel/item-carousel.component';
import { CartComponent } from './components/cart/cart.component';
import { CartSummaryTableComponent } from './components/cart-summary-table/cart-summary-table.component'; 

import { HomePageComponent } from './page/home-page/home.component';
import { CartPageComponent } from './page/cart-page/cart-page.component';
import { CheckoutPageComponent } from './page/checkout-page/checkout-page.component';
import { OrderReceivedPageComponent } from './page/order-received-page/order-received-page.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { RegisterPageComponent } from './page/register-page/register-page.component';
import { UserInfoPageComponent } from './page/user-info-page/user-info-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ItemCarouselComponent,
    CartComponent,
    CartSummaryTableComponent,
    
    HomePageComponent,
    CartPageComponent,
    CheckoutPageComponent,
    OrderReceivedPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    UserInfoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    CommonModule,
    NgxNumberSpinnerModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule { }
