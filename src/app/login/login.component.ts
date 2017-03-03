import { Component } from '@angular/core';
import { LoginService } from "./login.service";
import {NavController} from "ionic-angular/index";

@Component({
  templateUrl: 'login.html'
})
export class LoginComponent {

  constructor(private loginService: LoginService, private nav: NavController) {}

  login(username) {
    this.loginService.login(username);
    this.nav.pop();
  }
}
