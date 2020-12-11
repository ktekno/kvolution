import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() {
  }
  
  change(value: number): void {
      console.log(value);
  }

  ngOnInit(): void {
  }

}
