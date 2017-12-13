import { NgModule } from '@angular/core';
import {CourseService} from "../services/courses.service";
import {AuthorizationService} from "../services/authorization.service";

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    CourseService,
    AuthorizationService
  ],
  bootstrap: []
})
export class CoreModule { }
