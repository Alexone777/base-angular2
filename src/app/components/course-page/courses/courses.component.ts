import { Component, OnInit } from '@angular/core';
import {CourseService} from "../../../core/services/courses.service";
import {ICourse} from "../../../interfaces/ICourse";


@Component({
  selector: 'app-courses',
  templateUrl: 'courses.component.html',
  styleUrls: ['courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public courses: ICourse[];
  public coursesItems: ICourse[];

  constructor( public courseService: CourseService ) {

  }

  ngOnInit() {
    this.courses = this.courseService.getList()
  }

  deleteItem($event){
    this.courseService.removeItem($event.id)
  }


}
