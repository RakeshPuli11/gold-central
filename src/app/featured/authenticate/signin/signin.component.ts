import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  wrongPassword = false;
  newUser = false;
  verified = false;
  loginForm!: FormGroup;
  submitted = false;
  loginUserData = {email: '', password: '' };
  fieldTextType!: boolean;
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  constructor(private formBuilder: FormBuilder,private _auth:AuthService,private _router:Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/)
      ]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.loginForm.value, null, 2));
    this.loginUserData.email = this.loginForm.value.email;
    this.loginUserData.password = this.loginForm.value.password;
    this.loginUserCredentials();
  }
  loginUserCredentials(){
    this._auth.loginUser(this.loginUserData).subscribe({
      next: res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', res.message);
        this.verified = true;
        this._router.navigate(['']);
      },
      error: err =>{ 
        if (err.status === 400) {
          this.wrongPassword = true;
          setTimeout(() => {
            this.wrongPassword = false;
          },5000)
        }
        if (err.status === 404) {
          this.newUser = true;
          setTimeout(() => {
            this.newUser = false;
          },5000)
        }
        if(err.status === 401){
          this.verified = true;
          setTimeout(() => {
            this.verified = false;
          },5000)
        }
      }
    });
  }

}