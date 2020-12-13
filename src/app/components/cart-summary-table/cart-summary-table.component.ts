import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service'; 

@Component({
  selector: 'app-cart-summary-table',
  templateUrl: './cart-summary-table.component.html',
  styleUrls: ['./cart-summary-table.component.css']
})
export class CartSummaryTableComponent implements OnInit {

  constructor(public _appService: AppService) { }

  ngOnInit(): void {
  }

  getQuantityTotal(): number {
    return this._appService.cart_contents.reduce(function(prev: any, cur: any) {return parseFloat(prev) + parseFloat(cur.quantity);}, 0)
  }

  getPriceTotal(): number {
    return this._appService.cart_contents.reduce(function(prev: any, cur: any) {return parseFloat(prev) + parseFloat(cur.priceBadge);}, 0)
  }

}
