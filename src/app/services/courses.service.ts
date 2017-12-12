import { Injectable } from '@angular/core';

import { COURSES } from './course-data'
import { ICourse } from '../interfaces/ICourse'

@Injectable()
export class CourseService {

  constructor(){
    this.courseList = COURSES;
  }
  coursesList: ICourse[] = [];

}

