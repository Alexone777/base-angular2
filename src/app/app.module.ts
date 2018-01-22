import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import { LoginPageComponent } from './components/login-page/login-page.component';
import {SharedModule} from "./shared/shared.module";
import {CoursePageModule} from "./components/course-page/course-page.module";


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    SharedModule,
    CoursePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
