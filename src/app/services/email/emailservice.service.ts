import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmailserviceService {

  token?: string;

  setToken(token: string) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }


  private _checkEmail = "http://localhost:3000/api/user/emailcheck";
  private _updateUrl = "http://localhost:3000/api/user/updatepassword";
  private _OtpUrl = "http://localhost:3000/api/user/verifyOTP";
  private _checkUser = "http://localhost:3000/api/user/userExistsOrNot";

  constructor(private http:HttpClient,private router:Router) { }

  otpVerify(otp: string,Id:string) {
    const body = { otp, Id };
    console.log("front end reached00");
    return this.http.post<any>(this._OtpUrl, body);
  }

  checkUserExists(linkId: string) {
    return this.http.post<any>(this._checkUser,{Id: linkId});
  }

  checkUserEmail(email:string) {
    return this.http.post<any>(this._checkEmail,{email: email});
  }
  

  updatePassword(linkId: string, password: string) {
    const body = { linkId, password };
    return this.http.put<any>(this._updateUrl, body);
  }

}
