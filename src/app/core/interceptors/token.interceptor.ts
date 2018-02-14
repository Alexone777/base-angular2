import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthorizationService} from "../services/authorization.service";


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const authService = this.injector.get(AuthorizationService);
    const token = authService.getAuthKey();





    console.log(token);
    //
    // debugger;
    // req = req.clone({
    //     setHeaders: {
    //       Authorization: `${this.auth.getAuthKey()}`
    //     }
    //   });

    return next.handle(req);
  }
}
