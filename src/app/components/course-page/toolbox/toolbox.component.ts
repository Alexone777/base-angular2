import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {CourseService} from "../../../core/services/courses.service";

@Component({
  selector: 'app-toolbox',
  templateUrl: 'toolbox.component.html',
  styleUrls: ['toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {

  constructor( public courseService : CourseService) {

  }
  findCourse(){
  }
  addCourse(){
    console.log('addCourse');
  }

  ngOnInit() {
  }


}
