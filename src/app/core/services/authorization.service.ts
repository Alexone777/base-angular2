import { Injectable } from '@angular/core';
import {RequestService} from "./request.service";

@Injectable()
export class AuthorizationService {
  public user: string;




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
    return localStorage.get('token');
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
        debugger;
      })
  }

  isAuthorized = () => !!this.getAuthKey();


 /*
  logIn(){
    console.log(this.user);
    localStorage.setItem('user', this.user);
    localStorage.setItem('password', 'anyPassword');
  }

  logOff(){
    console.log('login');
    localStorage.removeItem('user');
    localStorage.removeItem('password');
  }

  IsAuthenticated():boolean {
    return localStorage.getItem('user') !== 'anyUser';
  }

  GetUserInfo(): string {
    return localStorage.getItem('user');
  }
  */
}
