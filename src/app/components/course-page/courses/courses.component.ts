import { Component, OnInit,Input } from '@angular/core';
import {CourseService} from "../../../core/services/courses.service";


@Component({
  selector: 'app-courses',
  templateUrl: 'courses.component.html',
  styleUrls: ['courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor( public courseService: CourseService ) {
  }

  ngOnInit() {
    this.courseService.getList().subscribe(res => {
      this.courseService.courseList = res.courseList;
    })
  }

  deleteItem($event){
    this.courseService.removeItem($event.id)
  }

  updateObj() {
    this.courseService.courseList[0] = {...this.courseService.courseList[0]};
  }
}
