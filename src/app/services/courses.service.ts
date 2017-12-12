import { Injectable } from '@angular/core';

import { COURSES } from './course-data'
import { ICourse } from '../interfaces/ICourse'

@Injectable()
export class CourseService {
  private courseList : ICourse[];

  constructor(){
    this.courseList = COURSES;
  }
  coursesList: ICourse[] = [];

  public getList(){
    return this.courseList
  }

  public createCourse(){
    return ''
  }

  public getItemById(id:number){
    return this.coursesList.find(item => item.id === id)
  }

  public updateItem(course: ICourse){
    this.coursesList = [...this.courseList, course];
    return this.coursesList
  }
  public removeItem(id:number){
    return ''
  }

}

