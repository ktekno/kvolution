import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { ItemCarouselComponent } from './components/item-carousel/item-carousel.component';
import { CartComponent } from './components/cart/cart.component';
import { AppService } from './app.service'; 

const routes: Routes = [
  // lazy-loaded route, a module with its own sub-routes
  // {
  //   path: 'admin',
  //   loadChildren: './reports/reports.module#AdminModule',
  // },
  // // component route, to show a specific component
  // {
  //   path: 'sign-in',
  //   component: SignInComponent,
  // },
  // // default route, to redirect somewhere
  // {
  //   path: '**',
  //   redirectTo: 'sign-in',
  // }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ItemCarouselComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    CarouselModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
