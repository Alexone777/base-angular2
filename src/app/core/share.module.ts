
import { NgModule } from '@angular/core';


import {HeaderComponent} from "../components/header/header.component";
import {LogoComponent} from "../components/header/logo/logo.component";
import {FooterComponent} from "../components/footer/footer.component";
import {LogInComponent} from "../components/header/log-in/log-in.component";
import {CourseComponent} from "../components/course-page/courses/course/course.component";
import {MenuComponent} from "../components/header/menu/menu.component";
import {CoursesComponent} from "../components/course-page/courses/courses.component";
import {ToolboxComponent} from "../components/course-page/toolbox/toolbox.component";
import {CoursePageComponent} from "../components/course-page/course-page.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    FooterComponent,
    LogInComponent,
    CourseComponent,
    MenuComponent,
    CoursesComponent,
    ToolboxComponent,
    CoursePageComponent
  ],
  imports:[
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    LogoComponent,
    FooterComponent,
    LogInComponent,
    CourseComponent,
    MenuComponent,
    CoursesComponent,
    ToolboxComponent,
    CoursePageComponent

  ],
  providers: [],
  bootstrap: []
})
export class ShareModule { }
