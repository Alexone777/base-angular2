import { Component, OnInit,Input } from '@angular/core';
import {CourseService} from "../../../core/services/courses.service";
import {ICourse} from "../../../interfaces/ICourse";


@Component({
  selector: 'app-courses',
  templateUrl: 'courses.component.html',
  styleUrls: ['courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public start = 0;
  public count = 10;

  constructor( public courseService: CourseService ) {
  }

  ngOnInit() {

    this.courseService.getList({start: this.start, count: this.count}).subscribe(res => {
      console.log(res)
    })
  }
}
