import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { LogInComponent } from './components/header/log-in/log-in.component';
import { CourseComponent } from './components/course-page/courses/course/course.component';
import { CoursesComponent } from './components/course-page/courses/courses.component';
import { ToolboxComponent } from './components/course-page/toolbox/toolbox.component';
import { CoursePageComponent } from './components/course-page/course-page.component';


@NgModule({
  declarations: [
    AppComponent,
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
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
