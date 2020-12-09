import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public featuredProducts = [{
    discountBadge: "Sale 50% off",
    imgSrc: "/assets/temp-img/lenovo.png",
    priceBadge: "₱10,000.00",
    titleSpecs: "SPECS",
    subSpecs: `Specs Specs Specs<br>Specs Specs Specs`
  },{
    discountBadge: "Sale 50% off",
    imgSrc: "/assets/temp-img/acer.png",
    priceBadge: "₱20,000.00",
    titleSpecs: "SPECS",
    subSpecs: `Specs Specs Specs<br>Specs Specs Specs`
  },{
    discountBadge: "Sale 50% off",
    imgSrc: "/assets/temp-img/asus.png",
    priceBadge: "₱30,000.00",
    titleSpecs: "SPECS",
    subSpecs: `Specs Specs Specs<br>Specs Specs Specs`
  },{
    discountBadge: "Sale 50% off",
    imgSrc: "/assets/temp-img/dell.png",
    priceBadge: "₱40,000.00",
    titleSpecs: "SPECS",
    subSpecs: `Specs Specs Specs<br>Specs Specs Specs`
  },{
    discountBadge: "Sale 50% off",
    imgSrc: "/assets/temp-img/acer.png",
    priceBadge: "₱50,000.00",
    titleSpecs: "SPECS",
    subSpecs: `Specs Specs Specs<br>Specs Specs Specs`
  },{
    discountBadge: "Sale 50% off",
    imgSrc: "/assets/temp-img/lenovo.png",
    priceBadge: "₱60,000.00",
    titleSpecs: "SPECS",
    subSpecs: `Specs Specs Specs<br>Specs Specs Specs`
  }];
  
  public bestSellerProducts = [{
    discountBadge: "Sale 50% off",
    imgSrc: "/assets/temp-img/lenovo.png",
    priceBadge: "₱10,000.00",
    titleSpecs: "SPECS2",
    subSpecs: `Specs Specs Specs<br>Specs Specs Specs`
  },{
    discountBadge: "Sale 50% off",
    imgSrc: "/assets/temp-img/acer.png",
    priceBadge: "₱20,000.00",
    titleSpecs: "SPECS2",
    subSpecs: `Specs Specs Specs<br>Specs Specs Specs`
  },{
    discountBadge: "Sale 50% off",
    imgSrc: "/assets/temp-img/asus.png",
    priceBadge: "₱30,000.00",
    titleSpecs: "SPECS2",
    subSpecs: `Specs Specs Specs<br>Specs Specs Specs`
  },{
    discountBadge: "Sale 50% off",
    imgSrc: "/assets/temp-img/dell.png",
    priceBadge: "₱40,000.00",
    titleSpecs: "SPECS2",
    subSpecs: `Specs Specs Specs<br>Specs Specs Specs`
  },{
    discountBadge: "Sale 50% off",
    imgSrc: "/assets/temp-img/acer.png",
    priceBadge: "₱50,000.00",
    titleSpecs: "SPECS2",
    subSpecs: `Specs Specs Specs<br>Specs Specs Specs`
  },{
    discountBadge: "Sale 50% off",
    imgSrc: "/assets/temp-img/lenovo.png",
    priceBadge: "₱60,000.00",
    titleSpecs: "SPECS2",
    subSpecs: `Specs Specs Specs<br>Specs Specs Specs`
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
