import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _checkEmail = `${environment.apiUrl}/user/email`;
  private _registerUrl = `${environment.apiUrl}/user/signup`;
  private _loginUrl = `${environment.apiUrl}/user/signin`;
  private _googleUrl = `${environment.apiUrl}/user/googlelogin`;

  constructor(private http: HttpClient, private router: Router) { }

  checkUserEmailService(email: string) {
    return this.http.post<any>(this._checkEmail, { email });
  }

  registerUser(user: { fullname: string; email: string; phonenumber: string; password: string; }) {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user: { email: string; password: string; }) {
    return this.http.post<any>(this._loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedOut() {
    localStorage.removeItem('token');
    return this.router.navigate(['']);
  }

  googleLoginService() {
    return this.http.get<any>(this._googleUrl);
  }
}
