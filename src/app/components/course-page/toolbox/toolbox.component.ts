import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: 'toolbox.component.html',
  styleUrls: ['toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {
  public filterVal:string = '';
  constructor() {
  }
  findCourse(){
    console.log(this.filterVal);
    this.filterVal = '';
  }
  addCourse(){
    console.log('addCourse');
  }

  ngOnInit() {
  }


}
