import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AuthenticateRoutingModule } from './authenticate-routing.module';
import { EditpasswordComponent } from './forgotcredentials/editpassword/editpassword.component';
import { ForgotcredentialsComponent } from './forgotcredentials/forgotcredentials.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticateComponent } from './authenticate.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { OtpVerifyComponent } from './otp-verify/otp-verify.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    EditpasswordComponent,
    ForgotcredentialsComponent,
    AuthenticateComponent,
    VerifyEmailComponent,
    OtpVerifyComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    AuthenticateRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgOtpInputModule,
  ],
  providers:[

  ],
  bootstrap:[AuthenticateComponent]
})
export class AuthenticateModule { }
