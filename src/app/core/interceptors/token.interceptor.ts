import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthorizationService} from "../services/authorization.service";
import {Observable} from "rxjs/Observable";


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthorizationService) {
  }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: this.authService.getAuthKey() || ''
      }
    });
    return next.handle(request);
  }
}
