import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AppService } from '../../app.service'; 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit  {


  constructor(private _elementRef : ElementRef, public _appService: AppService) { 
    
  }

  ngOnInit(): void {
  }

  openCart(): void{
    if (window.matchMedia("(max-width: 540px)").matches)
      this._elementRef.nativeElement.querySelector("#cartNavBar").style.width="100%";
    else
      this._elementRef.nativeElement.querySelector("#cartNavBar").style.width="400px";
  }

  closeNav(): void{
    this._elementRef.nativeElement.querySelector("#cartNavBar").style.width="0px";
  }

  deleteFromCart(index: number): void{
    this._appService.cart_contents.splice(index, 1);
  }

  goToDetails(index: number): void{
    window.location.href = this._appService.cart_contents[index].url;
  }
}
