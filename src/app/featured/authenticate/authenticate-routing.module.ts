import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { EditpasswordComponent } from './forgotcredentials/editpassword/editpassword.component';
import { ForgotcredentialsComponent } from './forgotcredentials/forgotcredentials.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { CanActivateFn } from '../../guard/emailguard.guard';
import { AuthenticateComponent } from './authenticate.component';
import { OtpVerifyComponent } from './otp-verify/otp-verify.component';
const routes: Routes = [
  {
    path:'authenticate',component:AuthenticateComponent,
    children:[
      {
        path: 'signin',
        component: SigninComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'forgotcredentials',
        component: ForgotcredentialsComponent,
        children:[
          {
            path: 'editpassword/:Id',
            component: EditpasswordComponent,
            canActivate: [CanActivateFn],
          }
        ]
      },
      {
        path:'verifyEmail/:Id',
        component:VerifyEmailComponent
      },
      {
        path:'verifyotp/:Id',
        component:OtpVerifyComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticateRoutingModule { }
