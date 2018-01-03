import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filterByName'
})

export class filterCoursesByName implements PipeTransform {


  transform( courses : any , filterVal : any ) : any  {
    if( !filterVal ){
      return courses
    }
    return courses.filter( (course) => course.title.toLowerCase().includes(filterVal.toLowerCase()) )
  }
}
