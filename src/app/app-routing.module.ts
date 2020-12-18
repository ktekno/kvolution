import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './page/home-page/home.component';
import { CartPageComponent } from './page/cart-page/cart-page.component';
import { CheckoutPageComponent } from './page/checkout-page/checkout-page.component';
import { OrderReceivedPageComponent } from './page/order-received-page/order-received-page.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { RegisterPageComponent } from './page/register-page/register-page.component';
import { UserInfoPageComponent } from './page/user-info-page/user-info-page.component';
import { ProductDetailPageComponent } from './page/product-detail-page/product-detail-page.component';
import { SearchResultPageComponent } from './page/search-result-page/search-result-page.component';
import { ShowOrderPageComponent } from './page/show-order-page/show-order-page.component';
import { OrderDetailsPageComponent } from './page/order-details-page/order-details-page.component';
import { ForgotPasswordComponent } from './page/forgot-password/forgot-password.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { TemplatePageComponent } from './page/template-page/template-page.component';

const routes: Routes = [
  { path: '' , component: HomePageComponent },
  { path: 'cart' , component: CartPageComponent },
  { path: 'checkout' , component: CheckoutPageComponent },
  { path: 'order-received' , component: OrderReceivedPageComponent },
  { path: 'login' , component: LoginPageComponent },
  { path: 'forgot-password' , component: ForgotPasswordComponent },
  { path: 'register' , component: RegisterPageComponent },
  { path: 'user-info' , component: UserInfoPageComponent },
  { path: 'product' , component: ProductDetailPageComponent },
  { path: 'search-result' , component: SearchResultPageComponent },
  { path: 'show-orders' , component: ShowOrderPageComponent },
  { path: 'order-details' , component: OrderDetailsPageComponent },
  { path: ':template' , component: TemplatePageComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
