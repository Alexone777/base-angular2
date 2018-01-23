import {Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {ICourse} from "../../../../interfaces/ICourse";
import {CourseService} from "../../../../core/services/courses.service";


@Component({
  selector: 'app-course',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'course.component.html',
  styleUrls: ['course.component.scss'],
})


export class CourseComponent implements OnInit {

  @Input('course') course : ICourse;
  @Output('delete') deleteItem = new EventEmitter();

  constructor( public courseService: CourseService ) {

  }

  ngOnInit() {

  }

  editCourse(){
    console.log(123);
  }

  deleteCourse(){
    this.deleteItem.emit({
      id : this.course.id
    })
  }
  isUpcomming() : number {
    return Math.ceil((+new Date() - this.course.date) / (1000 * 3600 * 24))
  }
}
