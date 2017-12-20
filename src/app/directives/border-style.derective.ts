import { Directive, ElementRef, Input } from '@angular/core'


@Directive({
  selector: `[border-style]`
})

export class BorderStyleDirective {
  constructor(el: ElementRef){
    el.nativeElement.style.border = '3px solid green';
  }

}
