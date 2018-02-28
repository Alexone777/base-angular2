import { Component, OnInit,Input } from '@angular/core';
import {CourseService} from "../../../core/services/courses.service";
import {ICourse} from "../../../interfaces/ICourse";
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'app-courses',
  templateUrl: 'courses.component.html',
  styleUrls: ['courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public start = 0;
  public count = 3;
  public courses$: Observable<ICourse[]>;

  constructor( public courseService: CourseService ) {
  }

  ngOnInit() {
    this.updateCourses()
  }
  addCourse(){
    this.start += 3;
    this.updateCourses()
  }
  private updateCourses(){
    this.courses$ = this.courseService.getList({start: this.start, count: this.count})
  }
}
