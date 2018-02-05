import { Component, OnInit } from '@angular/core';
import {COURSES} from "../../../core/services/course-data";

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss']
})
export class MenuComponent implements OnInit {

  public coursesLength: any;
  constructor() { }

  ngOnInit() {
    this.coursesLength = COURSES.length;
  }

}
