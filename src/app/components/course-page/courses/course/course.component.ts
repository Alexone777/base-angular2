import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {ICourse} from "../../../../interfaces/ICourse";
import {durationPipe} from "../../../../shared/pipes/durationPipe.pipe";
// import {filterCoursesByName} from "../../../../shared/pipes/filterCoursesByName.pipe";


@Component({
  selector: 'app-course',
  templateUrl: 'course.component.html',
  styleUrls: ['course.component.scss'],
  // pipes:[ durationPipe, filterCoursesByName ]
})


export class CourseComponent implements OnInit {
  @Input('course') course : ICourse;
  @Output('delete') deleteItem = new EventEmitter();
  public today:any;
  public timeDiff:number;
  public diffDays:number;


  constructor(  ) {
    this.today = new Date;

  }

  ngOnInit() {

    this.timeDiff = Math.abs(this.today.getTime() - this.course.date.getTime());
    this.diffDays = Math.ceil(this.timeDiff / (1000 * 3600 * 24));
  }

  editCourse(){
    console.log(123);
  }

  deleteCourse(){
    this.deleteItem.emit({
      value : 5
    })
  }

  isUpcomming() {
    if( (this.today.getTime() - this.course.date.getTime()) > 0 && this.diffDays <= 14 ){
      return true
    }
    return false
  }
}
