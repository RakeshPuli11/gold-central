import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  private _updates = "http://localhost:3000/api/user/getallupdates";
  constructor(private http:HttpClient) { }

  getUpdates():Observable<any>{
    return this.http.get<any>(this._updates).pipe(
      map((response:any)=>response.events)
    );
  }
}
