import { Injectable } from '@angular/core';  
 
 @Injectable()
 export class AppService {  
    
    cart_contents: any;
    
    constructor(){
        this.cart_contents = [{
            itemClassificationBadge: "New Arrival",
            itemClassification: "new-arival",
            imgSrc: "/assets/temp-img/lenovo.png",
            regularPrice: 10000,
            discountedPrice: 10000,
            priceBadge: 10000,
            titleSpecs: "SPECS",
            quantity: 1,
            subSpecs: `Specs Specs Specs<br>Specs Specs Specs`,
            url: "/"
            },{
              itemClassificationBadge: "New Arrival",
              itemClassification: "new-arrival",
              imgSrc: "/assets/temp-img/acer.png",
              regularPrice: 10000,
              discountedPrice: 10000,
              priceBadge: 20000,
              titleSpecs: "SPECS",
              quantity: 2,
              subSpecs: `Specs Specs Specs<br>Specs Specs Specs`,
              url: "/"
            },{
              itemClassificationBadge: "Sale 50% off",
              itemClassification: "discount",
              imgSrc: "/assets/temp-img/asus.png",
              regularPrice: 10000,
              discountedPrice: 10000,
              priceBadge: 30000,
              titleSpecs: "SPECS",
              quantity: 3,
              subSpecs: `Specs Specs Specs<br>Specs Specs Specs`,
              url: "/"
            },{
              itemClassificationBadge: "Sale 50% off",
              itemClassification: "discount",
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

    addToCart(cart_content: any): void{
      console.log(cart_content);
      //Replace with API
      this.cart_contents.push({
        discountBadge: "Sale 50% off",
        imgSrc: "/assets/temp-img/dell.png",
        priceBadge: "40,000.00",
        titleSpecs: "SPECS",
        subSpecs: `Specs Specs Specs<br>Specs Specs Specs`,
        url: "/"
      });
    }
    
 } 