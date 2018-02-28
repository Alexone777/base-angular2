import { NgModule } from '@angular/core';

import {HeaderComponent} from "./header/header.component";
import {LogoComponent} from "./header/logo/logo.component";
import {FooterComponent} from "./footer/footer.component";
import {LogInComponent} from "./header/log-in/log-in.component";
import {MenuComponent} from "./header/menu/menu.component";
import {CommonModule, DatePipe, UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {durationPipe} from "./pipes/durationPipe.pipe";
import {filterCoursesByName} from "./pipes/filterCoursesByName.pipe";
import {ToolboxComponent} from "../components/course-page/toolbox/toolbox.component";
import {BorderStyleDirective} from "../components/course-page/directives/course.derective";


@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    FooterComponent,
    LogInComponent,
    MenuComponent,
    ToolboxComponent,


    BorderStyleDirective,

    durationPipe,
    filterCoursesByName
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
    MenuComponent,
    ToolboxComponent,


    BorderStyleDirective,

    durationPipe,
    filterCoursesByName

  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
