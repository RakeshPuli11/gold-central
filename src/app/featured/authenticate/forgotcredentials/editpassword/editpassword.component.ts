import { Component, OnInit, OnChanges, SimpleChanges, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Validation from './validation';
import { EmailserviceService } from '../../../../services/email/emailservice.service';

@Component({
  selector: 'app-editpassword',
  templateUrl: './editpassword.component.html',
  styleUrls: ['./editpassword.component.css']
})
export class EditpasswordComponent implements OnInit{
  @Input() parentId : string | null = null;
  updateForm!: FormGroup;
  submitted = false;
  updateUserData = {token: '', password: ''};
  fieldTextType = false;
  fieldTextType2 = false;
  linkId: string | null = null;
  flag:boolean = false;
  constructor(private formBuilder: FormBuilder, private _auth: EmailserviceService, private _router: Router,private activatedRoute:ActivatedRoute) {}


  // ngOnChanges(changes: SimpleChanges): void {
  //     if(changes['parentId'] && this.parentId){
  //       this.ngOnInit();
  //     }
  // }


  ngOnInit(): void {
    this.linkId = this.activatedRoute.snapshot.paramMap.get('Id')!;
       if (this.linkId) {
      this._auth.checkUserExists(this.linkId)
        .subscribe({
          next: res => {
            this.flag = true;
           console.warn("valid link")
          },
          error: err => {
            console.warn("bad link");
          }
        });
    } else {
      console.warn("linkId is not provided");
    }
    this.updateForm = this.formBuilder.group({
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/)        ]
      ],
      confirmPassword: ['', Validators.required]
    }, {
      validators: [Validation.match('password', 'confirmPassword')]
    });
  }



  get f() {
    return this.updateForm.controls;
  }


  onSubmit(): void {
    this.submitted = true;

    if (this.updateForm.invalid) {
      return;
    }

    this.updateUserData.password = this.updateForm.value.password;
    this.updateUserCredentials();
  }

  updateUserCredentials(): void {
    if (!this.linkId) {
      alert("invalid Link")
      return;
    }
    this._auth.updatePassword(this.linkId,this.updateUserData.password).subscribe({
      next: res => {
          alert("Password updated successfully");
          this._router.navigate(['/signin']);
      },
      error: err => {
        if (err.status === 400) {
          alert("Invalid password");
        }
        if (err.status === 404) {
          alert("Invalid email address");
        }
      }
    });
  }


  toggleFieldTextType(): void {
    this.fieldTextType = !this.fieldTextType;
  }

  toggleFieldTextType2(): void {
    this.fieldTextType2 = !this.fieldTextType2;
  }

  
}
