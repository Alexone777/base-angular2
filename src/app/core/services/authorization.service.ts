import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationService {
  public user: string;
  constructor(){

  }

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
}
