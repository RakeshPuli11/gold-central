import { Injectable } from '@angular/core';
import { Jewlleries } from 'src/app/components/home/homeJewlleryDataInterface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  data = [
    {
      img : "assets/images/Matrika-Logo.png",
      title : "Matrika Jewlleries",
      distance : "0.58 km",
      rating:4,
      numberOfRatings : "160 ratings",
      address:"1-11-199/24, Alladin Mansion Rd, Begumpet, Hyderabad, Telangana 500016, India",
      phoneNumber : 6304917977,
      recentlyEnquired : "199 people recently enquried"
    },
    {
      img : "assets/images/goldsikka.png",
      title : "Goldsikka Jewlleries",
      distance : "2 km",
      rating:5,
      numberOfRatings : "40 ratings",
      address:"prakash nagar metro",
      phoneNumber : 8888888888,
      recentlyEnquired : "2000 people recently enquried"
    },
    {
      img : "assets/images/paysikka.jpg",
      title : "Paysikka Jewlleries",
      distance : "25.0 km",
      rating:4,
      numberOfRatings : "98765 ratings",
      address:"Hyderabad, Telangana 500016, India",
      phoneNumber : 9154225259,
      recentlyEnquired : "199 people recently enquried"
    },
    {
      img : "assets/images/Matrika-Logo.png",
      title : "Matrika Jewlleries",
      distance : "0.58 km",
      rating:4,
      numberOfRatings : "160 ratings",
      address:"1-11-199/24, Alladin Mansion Rd, Begumpet, Hyderabad, Telangana 500016, India",
      phoneNumber : 6304917977,
      recentlyEnquired : "199 people recently enquried"
    }
  ]

  topJewlleryData(): Observable<Jewlleries[]>{
    return of(this.data);
  }

}
