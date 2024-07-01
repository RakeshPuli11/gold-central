import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router:Router,protected _authService:AuthService) { } 
   
  userName!:string;
  ngOnInit(){} 
  onSelect(){ 
       this.router.navigate(['/signin']); 
  } 
  @ViewChild('offcanvas') offcanvas!: ElementRef;

  login(){
    console.log("CLicked")
  //  this.googleauth.
  }

  username(){
    if(this._authService.loggedIn()){
      this.userName = localStorage.getItem('user')!;
      return true;
    }
    else{
      this.userName = '';
      return false;
    }
  }
}

