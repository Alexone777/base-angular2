import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewCourseComponent} from "./components/new-course/new-course.component";
import {ErrorComponent} from "./components/404/404.component";

const routes: Routes = [
  {
    path: 'courses',
    loadChildren: 'app/components/course-page/course-page.module#CoursePageModule'
  },
  {
    path: 'new',
    component: NewCourseComponent
  },
  {
    path: '**',
    component: ErrorComponent
  },
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
