import { Directive, ElementRef, Input } from '@angular/core';
import {COURSES} from "../core/services/course-data";
import {ICourse} from "../interfaces/ICourse";



@Directive({
  selector: `[borderStyle]`
})

export class BorderStyleDirective {

  public courses : ICourse[];
  public coursesTopRated : any;


  @Input() borderStyle: boolean;

  constructor(private el: ElementRef){
  }

  ngOnInit(){

    let border : string;

    if (this.borderStyle) {
      border = '3px solid green';
    } else {
      border = 'none';
    }

    this.el.nativeElement.style.border = border;
  }


}
