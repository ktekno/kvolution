import { Injectable } from '@angular/core';  
 
 @Injectable()
 export class AppService {  
    
    cart_contents: any;
    
    constructor(){
        this.cart_contents = [{
            discountBadge: "Sale 50% off",
            imgSrc: "/assets/temp-img/lenovo.png",
            priceBadge: "₱10,000.00",
            titleSpecs: "SPECS",
            quantity: "4",
            subSpecs: `Specs Specs Specs<br>Specs Specs Specs`,
            url: "/"
            },{
              discountBadge: "Sale 50% off",
              imgSrc: "/assets/temp-img/acer.png",
              priceBadge: "₱20,000.00",
              titleSpecs: "SPECS",
              quantity: "3",
              subSpecs: `Specs Specs Specs<br>Specs Specs Specs`,
              url: "/"
            },{
              discountBadge: "Sale 50% off",
              imgSrc: "/assets/temp-img/asus.png",
              priceBadge: "₱30,000.00",
              titleSpecs: "SPECS",
              quantity: "2",
              subSpecs: `Specs Specs Specs<br>Specs Specs Specs`,
              url: "/"
            },{
              discountBadge: "Sale 50% off",
              imgSrc: "/assets/temp-img/dell.png",
              priceBadge: "₱40,000.00",
              titleSpecs: "SPECS",
              quantity: "1",
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
        priceBadge: "₱40,000.00",
        titleSpecs: "SPECS",
        subSpecs: `Specs Specs Specs<br>Specs Specs Specs`,
        url: "/"
      });
    }
    
 } 