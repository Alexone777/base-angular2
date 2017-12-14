import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from "../../../core/services/authorization.service";

@Component({
  selector: 'app-log-in',
  templateUrl: 'log-in.component.html',
  styleUrls: ['log-in.component.css'],
  providers: [AuthorizationService]
})
export class LogInComponent implements OnInit {

  constructor(public authorizationService : AuthorizationService) { }

  ngOnInit() {

  }

}
