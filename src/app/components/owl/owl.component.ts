import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-owl',
  templateUrl: './owl.component.html',
  styleUrls: ['./owl.component.css']
})
export class OwlComponent {
  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:1500,
    pullDrag:true,
    mouseDrag:true,
    navSpeed:300,
    dots:false,
    navText:["",""],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  };

}
