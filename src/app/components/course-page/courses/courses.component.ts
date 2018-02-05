import { Component, OnInit,Input } from '@angular/core';
import {CourseService} from "../../../core/services/courses.service";
import {ICourse} from "../../../interfaces/ICourse";


@Component({
  selector: 'app-courses',
  templateUrl: 'courses.component.html',
  styleUrls: ['courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public courses: ICourse[]

  constructor( public courseService: CourseService ) {
  }

  ngOnInit() {

    this.courseService.getList().subscribe(res => {
      this.courseService.courseList = res.courseList
        .map(x=>x)
        .filter(x=> {
          if((x.date - +new Date()) / (1000 * 3600 * 24) >= -1) {
            return x
          }
        });
    })
  }

  deleteItem($event){
    this.courseService.removeItem($event.id)
  }

  updateObj() {
    this.courseService.courseList[0] = {...this.courseService.courseList[0]};
  }
}
