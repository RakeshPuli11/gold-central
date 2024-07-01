import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailserviceService } from '../../../services/email/emailservice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgOtpInputModule } from  'ng-otp-input';
@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent{
  verifyOTP = '';
  Id='';
  constructor(private eservice : EmailserviceService,private activatedRoute:ActivatedRoute,private _router:Router) { }
  ngOnInit() {
    this.Id = this.activatedRoute.snapshot.paramMap.get('Id')!;
  }

  onOtpChange($event: string) {
    this.verifyOTP = $event;
}
otpVerify() {
    this.eservice.otpVerify(this.verifyOTP,this.Id).subscribe({
      next:res=>{
          console.log("ok")
          this._router.navigate([''])
      },
      error:err=>{
        if(err.status === 400){
          alert("Invalid OTP");
        }
        if(err.status === 404){
          alert("Invalid OTP");
        }
      }
    });
}
}
