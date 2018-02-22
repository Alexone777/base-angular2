import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import { LoginPageComponent } from './components/login-page/login-page.component';
import {SharedModule} from "./shared/shared.module";
import {CoursePageModule} from "./components/course-page/course-page.module";

import 'rxjs/add/observable/of';
import { AddCourseComponent } from './components/add-course/add-course.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./core/interceptors/token.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AddCourseComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
    SharedModule,
    CoursePageModule
  ],
  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
