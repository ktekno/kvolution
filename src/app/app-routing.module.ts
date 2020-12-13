import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './page/home-page/home.component';
import { CartPageComponent } from './page/cart-page/cart-page.component';

const routes: Routes = [
  {path: '' , component: HomePageComponent },
  {path: 'cart' , component: CartPageComponent }
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
