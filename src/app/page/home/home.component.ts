import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<img src=assets/img/left-arrow.png>', '<img src=assets/img/right-arrow.png>'],
    responsive: {
      0: {
        items: 1
      },
      200: {
        items: 2
      },
      640: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
  constructor() { }

  ngOnInit(): void {
  }

}
