import { Injectable } from '@angular/core';
import {RequestService} from "./request.service";
import {ReplaySubject} from "rxjs/ReplaySubject";

@Injectable()
export class AuthorizationService {
  public user: string;

  public subject: ReplaySubject<string> = new ReplaySubject();

  constructor(private request: RequestService){

  }

  login(login, password) {
    this.request.post('auth/login', {login, password})
      .subscribe((res) => {
        console.log(res)
        this.setAuthKey(res.token)
      })
  }

  getAuthKey() {
    return localStorage.getItem('token');
  };

  setAuthKey(authkey) {
    if (authkey) {
      localStorage.setItem('token', authkey);
    } else {
      localStorage.removeItem(authkey);
    }
  };

  getUserInfo() {
    this.request.post('auth/userinfo', {})
      .subscribe(res => {
        this.subject.next(res.name.first);
      },(err) => {
        console.log(err);
        debugger;
      })
  };

  logoff(){
    localStorage.removeItem('token');
    this.subject.unsubscribe()
    console.log(123);
  }

  isAuthorized = () => !!this.getAuthKey();


}
