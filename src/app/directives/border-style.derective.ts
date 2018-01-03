import { Directive, ElementRef } from '@angular/core';
import {CourseService} from "../core/services/courses.service";

@Directive({
  selector: `[border-style]`
})


export class BorderStyleDirective {


  public upComming : any;

  constructor(el: ElementRef, public courseService : CourseService){
    el.nativeElement.style.border = '3px solid red';
    this.upComming = this.courseService.isUpcomming();
  }





}
