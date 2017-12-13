import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationService {
  private IsAuthenticated: boolean;
  IsAuthenticated = false;
  constructor(){

  }

  logIn(IsAuthenticated){
    console.log('login');
    localStorage.setItem('user', 'anyUser');
    localStorage.setItem('password', 'anePassword');
    IsAuthenticated = true
  }

  logOff(IsAuthenticated){
    console.log('login');
    localStorage.removeItem('user');
    localStorage.removeItem('password');
    IsAuthenticated = false
  }

  GetUserInfo(): string {
    return localStorage.getItem('user');
  }
}
