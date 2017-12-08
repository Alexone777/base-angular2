import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public courseList: any = [];
  constructor() { }

  ngOnInit() {
    this.courseList = [
      {
        title : 'Video course',
        id : 1,
        duration : '2h26m',
        date : '22.12.2017'
      },{
        title : 'Video course',
        id : 2,
        duration : '1h26m',
        date : '12.12.2018'
      },{
        title : 'Video course',
        id : 3,
        duration : '26m',
        date : '12.08.2018'
      }
    ]
  }
  deleteItem($event){
    console.log($event)
  }

}
