import { Component } from '@angular/core';
import { LoginService } from "./login.service";
import { ViewController } from "ionic-angular/index";

@Component({
  templateUrl: 'login.html'
})
export class LoginComponent {

  constructor(private loginService: LoginService, private viewController: ViewController) {}

  login(username) {
    this.loginService.login(username);
    this.viewController.dismiss();
  }
}
