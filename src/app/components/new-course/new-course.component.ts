import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {CourseService} from "../../core/services/courses.service";
import 'rxjs/add/operator/switchMap';
import {Observable} from "rxjs/Observable";
import {ICourse} from "../../interfaces/ICourse";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['new-course.component.scss']
})
export class NewCourseComponent implements OnInit {

  // public course$: Observable<ICourse>;
  public newForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.course$ = this.route.paramMap
    //   .switchMap((params: any) => this.service.getCourse(parseInt(params.get('id'),10)));
    // console.log(this.course$);
    this.createForm();
  }

  createForm() {
    this.newForm = this.fb.group({
      name: ['', Validators.required ],
      description: ['', Validators.required ],
      length: ['', Validators.required ],
      date: ['', Validators.required ]

    });
  }

}

