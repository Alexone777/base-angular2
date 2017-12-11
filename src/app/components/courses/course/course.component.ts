import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Course } from '../../../interfaces/Course';

@Component({
  selector: 'app-course',
  templateUrl: 'course.component.html',
  styleUrls: ['course.component.scss']
})


export class CourseComponent implements OnInit,Course {
  @Input('init') course;
  @Output('delete') deleteItem = new EventEmitter();


  constructor() {
  }
  ngOnInit() {
    console.log(this.course.id);
  }
  editCourse(){
    console.log(123);
  }
  deleteCourse(){
    this.deleteItem.emit({
      value : 5
    })
  }
}
