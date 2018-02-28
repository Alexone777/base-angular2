import { NgModule } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {CoursePageComponent} from "./course-page.component";
import {CoursePageRoutingModule} from "./course-page-routing.module";
import {AddCourseComponent} from "../add-course/add-course.component";
import {CoursesComponent} from "./courses/courses.component";
import {CourseComponent} from "./courses/course/course.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CoursePageComponent,
    AddCourseComponent,
    CoursesComponent,
    CourseComponent

  ],
  imports: [
    SharedModule,
    CoursePageRoutingModule,
    CommonModule,
    FormsModule
  ]


})

export class CoursePageModule {}
