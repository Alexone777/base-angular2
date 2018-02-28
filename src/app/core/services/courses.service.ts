import {Injectable} from '@angular/core';

import {COURSES} from './course-data'
import {ICourse} from '../../interfaces/ICourse'
import {Observable} from "rxjs/Observable";
import {RequestService} from "./request.service";
import {map} from "rxjs/operators";


@Injectable()
export class CourseService {

  private courses: ICourse[] = [];


  constructor(private request: RequestService) {

  }

  public getList(params) {
    const url = `courses?start=${params.start}&count=${params.count}`;

    return this.request.get(url).pipe(
      map(res => {
        this.courses = [...this.courses, ...res]
        return this.courses
      })
    )
  }

  public getCourse(id) {
    const filtered =  this.courses.find(course =>  course.id === id)

    if( filtered ){
      return Observable.of(filtered)
    }
    return this.request.get(`courses/${id}`)
  }

}

