import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/FrontEnd/home.service';
import {Jewlleries} from './homeJewlleryDataInterface'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  onOtpChange($event: string) {
      console.log($event);
  }

  constructor(private homeService:HomeService){}
  
  dataHome : Jewlleries[]=[];
  ngOnInit(): void {
     this.homeService.topJewlleryData().subscribe({
      next : res =>{
        this.dataHome = res;
      },
      error : err =>{
        console.log(err);
      }
     })
  }
}
