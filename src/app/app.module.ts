import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./core/shared.module";
import { LoginPageComponent } from './components/login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
