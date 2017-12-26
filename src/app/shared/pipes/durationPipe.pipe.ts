import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformHours'
})

export class durationPipe implements PipeTransform {

  transform( value: number ) : string  {

    if( value > 0 && value/60 < 1 ){

      let minutes = value/60;

      return minutes + 'min'

      } else if ( value/60 > 1 ) {

        let hours = value/60;
        let minutes = value%60;

      return hours + 'h' + ' ' + minutes + 'min'

    }
  }
}
