import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _appService: AppService) { }

  ngOnInit(): void {
  }

  getQuantityTotal(): number {
    return this._appService.cart_contents.reduce(function(prev: any, cur: any) {return parseFloat(prev) + parseFloat(cur.quantity);}, 0)
  }
}
