import { Injectable,Injector,INJECTOR } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _injector:Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authService = this._injector.get(AuthService);
    let tokenisedReq = req.clone({
        setHeaders:{
          Authorization:`Bearer ${authService.getToken()}`
        }
    });
    return next.handle(tokenisedReq);
  }
}