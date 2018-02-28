import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursePageComponent} from "./course-page.component";
import {AddCourseComponent} from "../add-course/add-course.component";

const routes: Routes = [
  {
    path: '',
    component: CoursePageComponent
  },
  {
    path: ':id',
    component: AddCourseComponent
  },
  {
    path: 'new',
    component: AddCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursePageRoutingModule {
}
