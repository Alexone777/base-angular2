import { NgModule } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {CoursePageComponent} from "./course-page.component";
import {CoursePageRoutingModule} from "./course-page-routing.module";
import {AddCourseComponent} from "../add-course/add-course.component";
import {CoursesComponent} from "./courses/courses.component";
import {CourseComponent} from "./courses/course/course.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NewCourseComponent} from "../new-course/new-course.component";
import {ToolboxComponent} from "./toolbox/toolbox.component";
import {ErrorComponent} from "../404/404.component";


@NgModule({
  declarations: [
    CoursePageComponent,
    AddCourseComponent,
    CoursesComponent,
    CourseComponent,
    NewCourseComponent,
    ToolboxComponent,
    ErrorComponent

  ],
  imports: [
    SharedModule,
    CoursePageRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]


})

export class CoursePageModule {}
