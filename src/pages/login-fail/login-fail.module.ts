import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginFailPage } from './login-fail';

@NgModule({
  declarations: [
    LoginFailPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginFailPage),
  ],
  exports: [
    LoginFailPage
  ]
})
export class LoginFailPageModule {}
