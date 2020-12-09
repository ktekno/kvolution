import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit  {
  constructor(private _elementRef : ElementRef) { 
  }

  ngOnInit(): void {
  }

  openCart(): void{
    if (window.matchMedia("(max-width: 540px)").matches)
      this._elementRef.nativeElement.querySelector("#cartNavBar").style.width="100%";
    else
      this._elementRef.nativeElement.querySelector("#cartNavBar").style.width="350px";
  }

  closeNav(): void{
    this._elementRef.nativeElement.querySelector("#cartNavBar").style.width="0px";
  }

}
