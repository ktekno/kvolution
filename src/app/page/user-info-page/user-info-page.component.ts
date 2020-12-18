import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.css']
})
export class UserInfoPageComponent implements OnInit {

  public isSuccess: number = -1;
  constructor() { }

  ngOnInit(): void {
  }

  updateUser(): void {
    this.isSuccess = 1;
  }
}
