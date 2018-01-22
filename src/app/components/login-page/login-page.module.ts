import { NgModule } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {LoginPageComponent} from "./login-page.component";


@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    SharedModule,
  ],
  exports: [
    LoginPageComponent
  ]


})

export class LoginPageModule {}
