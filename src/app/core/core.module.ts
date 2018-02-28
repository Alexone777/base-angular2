import { NgModule } from '@angular/core';
import {CourseService} from "./services/courses.service";
import {AuthorizationService} from "./services/authorization.service";
import {RequestService} from "./services/request.service";

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    CourseService,
    RequestService,
    AuthorizationService
  ],
  bootstrap: []
})
export class CoreModule { }
