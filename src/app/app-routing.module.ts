import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './page/home-page/home.component';
import { CartPageComponent } from './page/cart-page/cart-page.component';
import { CheckoutPageComponent } from './page/checkout-page/checkout-page.component';

const routes: Routes = [
  {path: '' , component: HomePageComponent },
  {path: 'cart' , component: CartPageComponent },
  {path: 'checkout' , component: CheckoutPageComponent }
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
