import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationService {
  constructor(){

  }

  logIn(){
    console.log('login');
    localStorage.setItem('user', 'anyUser');
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
