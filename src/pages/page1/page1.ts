import { Component } from '@angular/core';
import {LoginService} from "../../app/login/login.service";

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  username: string;

  constructor(private loginService: LoginService) {}

  ionViewWillEnter() {
    this.username = this.loginService.username;
  }
}
