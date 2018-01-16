import { NgModule } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {CoreModule} from "../../core/core.module";
import {CoursePageComponent} from "../course-page/course-page.component";



@NgModule({

  declarations: [
    CoursePageComponent
  ],
  imports: [
    SharedModule,
    CoreModule
  ]


})
export class CoursePageComponentModule { }

