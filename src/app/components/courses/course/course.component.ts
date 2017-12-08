import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Course } from '../../../interfaces/Course';

@Component({
  selector: 'app-course',
  templateUrl: 'course.component.html',
  styleUrls: ['course.component.scss']
})


export class CourseComponent implements OnInit,Course {
  @Input('title') title;
  @Input('id') id;
  @Input('duration') duration;
  @Input('date') date;
  @Output('delete') deleteItem = new EventEmitter();
  constructor() {
  }
  ngOnInit() {

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
