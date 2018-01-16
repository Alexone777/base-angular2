import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import { LoginPageComponent } from './components/login-page/login-page.component';
import {CoursePageComponent} from "./components/course-page/course-page.component";
import {SharedModule} from "./shared/shared.module";


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    CoursePageComponent

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
