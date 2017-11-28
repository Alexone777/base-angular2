import { Component, OnInit } from '@angular/core';
import { Course } from '../../interfaces/Course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})


export class CourseComponent implements OnInit,Course {
  title = 'asdasd';
  id = 1;
  duration = 'asdad';
  date = 'asdad';
  constructor() {
  }
  ngOnInit() {

  }
}
