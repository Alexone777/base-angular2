import { Injectable } from '@angular/core';

import { COURSES } from './course-data'
import { ICourse } from '../../interfaces/ICourse'



@Injectable()
export class CourseService {


  private courseList : ICourse[];
  public courseFilter : string;
  public course : any;


  constructor(){
    this.courseList = COURSES;
  }

  coursesList: ICourse[] = [];

  public getList(){
    return this.courseList
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
    return this.coursesList.filter(item => item.title === title)
  }

  public updateItems(course: ICourse){
    this.coursesList = [...this.courseList, course];
    return this.coursesList
  }
  public removeItem(id:number){
    console.log(this.courseList.filter(item => item.id !== id));
    return this.courseList.filter(item => item.id !== id)
  }

}

