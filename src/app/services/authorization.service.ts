import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationService {
  private IsAuthenticated: boolean;
  constructor(){

  }

  logIn(IsAuthenticated){
    console.log('login');
    localStorage.setItem('user', 'anyUser');
    localStorage.setItem('password', 'anyPassword');
  }

  logOff(IsAuthenticated){
    console.log('login');
    localStorage.removeItem('user');
    localStorage.removeItem('password');
  }

  IsAuthenticated() {
    return localStorage.getItem('password') === 'anyPassword';
  }

  GetUserInfo(): string {
    return localStorage.getItem('user');
  }
}
