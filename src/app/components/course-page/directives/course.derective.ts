import { Directive, ElementRef, Input } from '@angular/core';




@Directive({
  selector: `[borderStyle]`
})

export class BorderStyleDirective {
  public currentDate: any;
  @Input('borderStyle') courseDate: any;

  constructor(private el: ElementRef){
  }

  ngOnInit(){
    this.currentDate = +new Date() / (1000 * 3600 * 24);
    this.courseDate = this.courseDate / (1000 * 3600 * 24)
    let border : string;

    if (this.courseDate < this.currentDate && this.courseDate >= this.currentDate - 14) {
      border = '3px solid green';
    } else if (this.courseDate >= this.currentDate) {
      border = '3px solid orange';
    } else {
      border = 'none';
    }

    this.el.nativeElement.style.border = border;
  }


}
