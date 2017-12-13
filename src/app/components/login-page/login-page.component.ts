import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from "../../services/authorization.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['login-page.component.scss'],
  providers: [AuthorizationService]
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
