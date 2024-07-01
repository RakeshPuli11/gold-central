import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Validation from './validation';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  alert = false;
  registerUserData = { fullname: '', email: '', phonenumber: '', password: '' };
  fieldTextType1 = false;
  fieldTextType2 = false;

  constructor(private formBuilder: FormBuilder, private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern("^[a-zA-Z ]*$")]],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', [Validators.required, Validators.maxLength(10), Validators.pattern("^[9|8|7|6][0-9]{9}$")]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$")]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: [Validation.match('password', 'confirmPassword')]
    });
    this.registerForm.valueChanges.subscribe(() => {
      if (this.submitted) {
        this.submitted = false;
      }
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  toggleFieldTextType1() {
    this.fieldTextType1 = !this.fieldTextType1;
  }

  toggleFieldTextType2() {
    this.fieldTextType2 = !this.fieldTextType2;
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.submitted = true;
      return;
    }
  
    this.registerUserData = this.registerForm.value;
    console.log(this.registerUserData);
    this.registerUser();
  }
  registerUser() {
    this._auth.registerUser(this.registerUserData).subscribe({
      next: res => {
        this.submitted = true; // Set to true on successful registration
        this.alert = false; // Reset the error alert
        // Don't navigate immediately, let the user see the verification message
        setTimeout(() => {
          this._router.navigate(['/signin']);
        }, 3000); // Navigate after 3 seconds
      },
      error: err => {
        if (err.status === 409) {
          console.log('Email already exists');
          this.alert = true;
          this.submitted = false; // Reset submitted on error
        } else {
          console.log(err);
        }
      }
    });
  }

  onReset(): void {
    this.submitted = false;
    this.alert = false;
    this.registerForm.reset();
  }
}