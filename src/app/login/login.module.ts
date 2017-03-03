import { NgModule } from '@angular/core';
import { LoginComponent } from "./login.component";
import { IonicModule } from 'ionic-angular';

@NgModule({
  imports: [IonicModule],
  declarations: [LoginComponent],
  entryComponents: [LoginComponent]
})
export class LoginModule {}
