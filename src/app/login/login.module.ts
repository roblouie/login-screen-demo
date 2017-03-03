import { NgModule } from '@angular/core';
import { LoginComponent } from "./login.component";
import { IonicModule } from 'ionic-angular';
import { LogoutComponent } from "./logout.component";

@NgModule({
  imports: [IonicModule],
  declarations: [LoginComponent, LogoutComponent],
  entryComponents: [LoginComponent, LogoutComponent],
  exports: [LogoutComponent]
})
export class LoginModule {}
