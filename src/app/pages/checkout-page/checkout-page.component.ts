import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  isSmallMobileDevice: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isSmallMobileDevice = window.matchMedia("(max-width: 969px)").matches;
  }

}
