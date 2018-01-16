import { Directive, ElementRef, Input } from '@angular/core';



@Directive({
  selector: `[borderStyle]`
})

export class BorderStyleDirective {

  @Input() borderStyle: boolean;

  constructor(private el: ElementRef){
  }

  ngOnInit(){

    let border : string;

    if (this.borderStyle) {
      border = '3px solid green';
    } else {
      border = '3px solid orange';
    }

    this.el.nativeElement.style.border = border;
  }


}
