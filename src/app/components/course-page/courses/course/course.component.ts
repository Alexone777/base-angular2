import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {ICourse} from "../../../../interfaces/ICourse";
import {CourseService} from "../../../../core/services/courses.service";


@Component({
  selector: 'app-course',
  templateUrl: 'course.component.html',
  styleUrls: ['course.component.scss'],
})


export class CourseComponent implements OnInit {
  @Input('course') course : ICourse;
  @Output('delete') deleteItem = new EventEmitter();
  public today:any;
  public timeDiff:number;
  public diffDays:number;


  constructor( public courseService: CourseService ) {
    this.today = new Date;

  }

  ngOnInit() {

    this.timeDiff = Math.abs( this.course.date.getTime() - this.today.getTime() );
    this.diffDays = Math.ceil(this.timeDiff / (1000 * 3600 * 24));
  }

  editCourse(){
    console.log(123);
  }

  deleteCourse(){
    this.deleteItem.emit({
      id : this.course.id
    })
  }

  isUpcomming() {
    console.log(this.diffDays > 0 && this.diffDays <= 14);

    if( this.diffDays > 0 && this.diffDays <= 14 ){
      return true
    }
    return false
  }
}
