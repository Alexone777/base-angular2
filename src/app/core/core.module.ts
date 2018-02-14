import { NgModule } from '@angular/core';
import {CourseService} from "./services/courses.service";
import {AuthorizationService} from "./services/authorization.service";
import {RequestService} from "./services/request.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptor} from "./interceptors/token.interceptor";

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    CourseService,
    RequestService,
    AuthorizationService,
    TokenInterceptor
  ],
  bootstrap: []
})
export class CoreModule { }
