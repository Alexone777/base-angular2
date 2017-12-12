import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../../interfaces/ICourse';

@Component({
  selector: 'app-courses',
  templateUrl: 'courses.component.html',
  styleUrls: ['courses.component.scss']
})
export class CoursesComponent implements OnInit,ICourse {
  public courseList: ICourse[];
  title: string;
  id : number;
  duration: string;
  date: string;
  description: string;
  constructor() { }

  ngOnInit() {
    this.courseList = [
      {
        title : 'Video course',
        id : 1,
        duration : '2h26m',
        date : '22.12.2017',
        description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem ipsum itaque laudantium maiores neque nihil odio rerum velit voluptates.'
      },{
        title : 'Video course',
        id : 2,
        duration : '1h26m',
        date : '12.12.2018',
        description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem ipsum itaque laudantium maiores neque nihil odio rerum velit voluptates.'
      },{
        title : 'Video course',
        id : 3,
        duration : '26m',
        date : '12.08.2018',
        description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem ipsum itaque laudantium maiores neque nihil odio rerum velit voluptates.'
      }
    ]
  }
  deleteItem($event){
    console.log($event)
  }

}
