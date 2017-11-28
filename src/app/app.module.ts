import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { LogInComponent } from './components/header/log-in/log-in.component';
import { CourseComponent } from './components/course/course.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    FooterComponent,
    LogInComponent,
    CourseComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
