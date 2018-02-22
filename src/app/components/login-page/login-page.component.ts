import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from "../../core/services/authorization.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['login-page.component.scss'],
  providers: [AuthorizationService]
})
export class LoginPageComponent implements OnInit {

  public login: string = 'Warner';
  public password: string = 'ea';

  constructor(public authorizationService : AuthorizationService) {
  }

  ngOnInit(){
    this.authorizationService.subject.subscribe(res => {
      alert("username = " + res)
    });
  }

  logIn() {
    this.authorizationService.login(this.login, this.password);
  }
}
