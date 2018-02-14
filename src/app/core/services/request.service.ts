import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";

@Injectable()
export class RequestService {
  private baseUrl: string = 'http://localhost:3004';



  constructor(private http: HttpClient) {
  }

  private configureUrl(url: string) {
    return `${this.baseUrl}/${url}`
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };

  get(url: string) {
    return this.http.get(this.configureUrl(url))
      .pipe(
        catchError(this.handleError)
      );
  }

  post(url: string, body: any) {
    return this.http.post(this.configureUrl(url), body)
      .pipe(
        catchError(this.handleError)
      );

  }

  put(url: string, body: {}) {
    return this.http.put(this.configureUrl(url), body)
      .pipe(
        catchError(this.handleError)
      );
  }
}

