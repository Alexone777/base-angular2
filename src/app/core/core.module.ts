import { NgModule } from '@angular/core';
import {CourseService} from "./services/courses.service";
import {AuthorizationService} from "./services/authorization.service";
import {DatePipe, UpperCasePipe} from "@angular/common";

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    CourseService,
    AuthorizationService,
    DatePipe,
    UpperCasePipe
  ],
  bootstrap: []
})
export class CoreModule { }
