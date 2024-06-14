import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    try {
      //Obtenemos el token del cookie
      const token = this.cookieService.get('token');
      //Modificamos el request
      let newRequest = request;
      //Agregamos el bearer
      newRequest = request.clone(
        {
          setHeaders: {
            authorization: `Bearer ${token}`
          }
        }
      )

      return next.handle(newRequest);

    } catch (e) {
      console.log('Error', e)
      return next.handle(request);
    }
    
  }
}
