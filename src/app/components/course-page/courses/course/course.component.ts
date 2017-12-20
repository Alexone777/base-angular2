import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {ICourse} from "../../../../interfaces/ICourse";


@Component({
  selector: 'app-course',
  templateUrl: 'course.component.html',
  styleUrls: ['course.component.scss']
})


export class CourseComponent implements OnInit {
  @Input('course') course : ICourse;
  @Output('delete') deleteItem = new EventEmitter();
  public today:any;
  public newDate:any;
  public dd:any;
  public mm:any;
  public yyyy:any;
  public timeDiff:number;
  public diffDays:number;


  constructor() {
    this.today = new Date;

  }

  ngOnInit() {
    this.dd = this.course.date.getDate();
    this.mm = this.course.date.getMonth()+1;
    this.yyyy = this.course.date.getFullYear();
    this.timeDiff = Math.abs(this.today.getTime() - this.course.date.getTime())
    this.diffDays = Math.ceil(this.timeDiff / (1000 * 3600 * 24));



    if(this.dd<10) {
      this.dd = '0'+this.dd
    }

    if(this.mm<10) {
      this.mm = '0'+this.mm
    }

    this.newDate = this.mm + '/' + this.dd + '/' + this.yyyy;

    return this.diffDays;
  }

  editCourse(){
    console.log(123);
  }

  deleteCourse(){
    this.deleteItem.emit({
      value : 5
    })
  }

  isUpComming() {
    if ( (this.today.getTime() - this.course.date.getTime()) < 0 && this.diffDays <= 14 ){
      return true
    }
    return false
  }
}
