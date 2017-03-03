import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import {LoginModule} from "./login/login.module";
import {MenuComponent} from "./menu.component";

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    MenuComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    LoginModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    MenuComponent
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule {}
