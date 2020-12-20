import { Component, ElementRef, OnInit } from '@angular/core';
import { formatNumber } from '@angular/common'
import { AppService } from '../../app.service'; 

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  constructor(private _elementRef : ElementRef, public _appService: AppService) { 
    
  }
  
  change(value: number, index: number): void {
      this._appService.cart_contents[index].quantity = value;
      this._appService.cart_contents[index].priceBadge = value * parseFloat(this._appService.cart_contents[index].discountedPrice);
  }

  ngOnInit(): void {
  }

  deleteFromCart(index: number): void{
    this._appService.cart_contents.splice(index, 1);
  }

  getQuantityTotal(): number {
    return this._appService.cart_contents.reduce(function(prev: any, cur: any) {return parseFloat(prev) + parseFloat(cur.quantity);}, 0)
  }

  getPriceTotal(): number {
    return this._appService.cart_contents.reduce(function(prev: any, cur: any) {return parseFloat(prev) + parseFloat(cur.priceBadge);}, 0)
  }
}
