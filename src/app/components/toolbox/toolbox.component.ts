import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {
  @Input('value') currentValue = '';

  constructor() {
  }
  findCourse(){
    console.log(this.currentValue);
  }

  ngOnInit() {
  }

}
