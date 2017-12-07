import { Component, OnInit } from '@angular/core';
import { Course } from '../../../interfaces/Course';

@Component({
  selector: 'app-course',
  templateUrl: 'course.component.html',
  styleUrls: ['course.component.scss']
})


export class CourseComponent implements OnInit,Course {
  title = 'Video course';
  id = 1;
  duration = '1h26m';
  date = '22.12.2017';
  constructor() {
  }
  ngOnInit() {

  }
}
