import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { LoginService } from "./login/login.service";
import { LoginComponent } from "./login/login.component";
import { MenuComponent } from "./menu.component";

@Component({
  template: '<ion-nav #baseNav></ion-nav>',
  providers: [LoginService]
})
export class MyApp {
  @ViewChild('baseNav') nav: Nav;

  constructor(public platform: Platform, private loginService: LoginService) {
    this.initializeApp();
  }

  ngOnInit() {
    const componentStack: Array<{page: Component}> = [{
      page: MenuComponent
    }];

    if (!this.loginService.isLoggedIn) {
      componentStack.unshift({ page: LoginComponent });
    }

    this.nav.insertPages(0, componentStack, { animate: false });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
