import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,  
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpserviceInterceptor implements HttpInterceptor {
  token: string | undefined;
  tokenVal=localStorage.getItem('token'); 
  

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('inside interceptor')
    request = request.clone({ headers: request.headers.append('Content-Type', 'application/json')});
    request = request.clone({ headers: request.headers.set('Authorization',"Bearer " + this.tokenVal)});
    return next.handle(request);
  }
}
