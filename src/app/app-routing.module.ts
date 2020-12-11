import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './page/home-page/home.component';
import { CartComponent } from './page/cart-page/cart.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'cart' , component: CartComponent}
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
