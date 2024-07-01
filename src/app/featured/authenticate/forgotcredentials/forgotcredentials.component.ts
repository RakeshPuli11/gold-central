import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailserviceService } from '../../../services/email/emailservice.service';


@Component({
  selector: 'app-forgotcredentials',
  templateUrl: './forgotcredentials.component.html',
  styleUrls: ['./forgotcredentials.component.css']
})
export class ForgotcredentialsComponent implements OnInit {

  updateForm!: FormGroup;
  submitted = false;
  updateUserData = {email: ''};
  verified=0;

  // parentId: string | null = null;
  constructor(private formBuilder: FormBuilder, private _auth:EmailserviceService, private _router: Router) {}

  token?: string;
  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
    this.token = localStorage.getItem('token') ?? '';
    if(this.token){
      this.verified=3;
    }
  }

  get f() {
    return this.updateForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.updateForm.invalid) {
      return;
    }

    this.updateUserData.email = this.updateForm.value.email;
    this.checkEmail();
  }

  checkEmail(): void {
    this._auth.checkUserEmail(this.updateUserData.email).subscribe({
      next: res => {
       this.verified=1;
      //  this.parentId=res.Id;
      },
      error: err => {
        this.verified=2;
      }
    });
  }
}
