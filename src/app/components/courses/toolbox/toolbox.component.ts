import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: 'toolbox.component.html',
  styleUrls: ['toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {
  newValue:string = '';
  constructor() {
  }
  addCourse(){
    console.log(this.newValue);
    this.newValue = '';
  }

  ngOnInit() {
  }


}
