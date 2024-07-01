import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailserviceService } from '../../../services/email/emailservice.service';

@Component({
  selector: 'app-otp-verify',
  templateUrl: './otp-verify.component.html',
  styleUrls: ['./otp-verify.component.css']
})
export class OtpVerifyComponent implements OnInit {

  verifyOTP = '';
  Id = '';
  isOtpValid = false;

  constructor(private eservice: EmailserviceService, private activatedRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.Id = this.activatedRoute.snapshot.paramMap.get('Id')!;
  }

  onOtpChange($event: string) {
    this.verifyOTP = $event;
    this.isOtpValid = this.verifyOTP.length === 4;
  }

  otpVerify() {
    if (this.isOtpValid) {
      this.eservice.otpVerify(this.verifyOTP, this.Id).subscribe({
        next: res => {
          console.log("ok");
          this._router.navigate(['/authenticate/signin']);
        },
        error: err => {
          if (err.status === 400 || err.status === 404) {
            alert("Invalid OTP");
          }
        }
      });
    }
  }
}