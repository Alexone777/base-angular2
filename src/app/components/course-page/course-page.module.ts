import { NgModule } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {CoursePageComponent} from "./course-page.component";


@NgModule({
  declarations: [CoursePageComponent],
  imports: [
    SharedModule,
  ],
  exports: [
    CoursePageComponent
  ]


})

export class CoursePageModule {}
