import { Injectable } from '@angular/core';

import { COURSES } from './course-data'
import { ICourse } from '../../interfaces/ICourse'
import {Observable} from "rxjs/Observable";



@Injectable()
export class CourseService {

  public courseList : ICourse[];
  public courseFilter : string;
  public course : any;


  constructor(){

  }

  coursesList: ICourse[] = [];

  public getList(){
    return Observable.of({courseList: COURSES});
  }

  public createCourse({
    id,
    topRated,
    date,
    description,
    duration,
    title
  }): ICourse {
    return {
      id,topRated, date, description, duration, title
    }
  }

  public getItemByName(title:string){
    console.log(title)
    return this.coursesList.filter(item => item.title === title)
  }

  private updateItems(course: ICourse){
    this.coursesList = [...this.courseList, course];
    return this.coursesList
  }

  public removeItem(id:number){
    return this.courseList = this.courseList.filter(x=>x.id !== id)
  }

}

