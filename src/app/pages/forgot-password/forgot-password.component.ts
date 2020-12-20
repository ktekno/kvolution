import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public isSuccess: number = -1;

  constructor() { }

  ngOnInit(): void {
  }

  sendRequest(): void {
    this.isSuccess = 0;
  }
}
