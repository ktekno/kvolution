import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-received-page',
  templateUrl: './order-received-page.component.html',
  styleUrls: ['./order-received-page.component.css']
})
export class OrderReceivedPageComponent implements OnInit {

  isSmallMobileDevice: boolean = false;
  ordered_contents: any;

  constructor() {
    this.isSmallMobileDevice = window.matchMedia("(max-width: 900px)").matches;
    this.ordered_contents = [{
        discountBadge: "Sale 50% off",
        imgSrc: "/assets/temp-img/lenovo.png",
        regularPrice: 10000,
        discountedPrice: 10000,
        priceBadge: 10000,
        titleSpecs: "SPECS",
        quantity: 1,
        subSpecs: `Specs Specs Specs<br>Specs Specs Specs`,
        url: "/"
        },{
          discountBadge: "Sale 50% off",
          imgSrc: "/assets/temp-img/acer.png",
          regularPrice: 10000,
          discountedPrice: 10000,
          priceBadge: 20000,
          titleSpecs: "SPECS",
          quantity: 2,
          subSpecs: `Specs Specs Specs<br>Specs Specs Specs`,
          url: "/"
        },{
          discountBadge: "Sale 50% off",
          imgSrc: "/assets/temp-img/asus.png",
          regularPrice: 10000,
          discountedPrice: 10000,
          priceBadge: 30000,
          titleSpecs: "SPECS",
          quantity: 3,
          subSpecs: `Specs Specs Specs<br>Specs Specs Specs`,
          url: "/"
        },{
          discountBadge: "Sale 50% off",
          imgSrc: "/assets/temp-img/dell.png",
          regularPrice: 10000,
          discountedPrice: 10000,
          priceBadge: 40000,
          titleSpecs: "SPECS",
          quantity: 4,
          subSpecs: `Specs Specs Specs<br>Specs Specs Specs`,
          url: "/"
    }];
  }

  ngOnInit(): void {
  }

}
