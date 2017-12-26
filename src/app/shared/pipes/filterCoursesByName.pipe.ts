import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})

export class filterCoursesByName implements PipeTransform {
  transform( value: string ) : string {

  }
}
