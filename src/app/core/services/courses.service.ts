import { Injectable } from '@angular/core';

import { COURSES } from './course-data'
import { ICourse } from '../../interfaces/ICourse'
import {Observable} from "rxjs/Observable";
import {RequestService} from "./request.service";



@Injectable()
export class CourseService {


  constructor(private request: RequestService){

  }

  public getList(params) {
    const url = `courses?start=${params.start}&count=${params.count}`;

    return this.request.get(url);
  }

}

