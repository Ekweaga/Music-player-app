import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoommackService {
  items:HttpHeaders = new HttpHeaders({
    'Authorization': 'Bearer BQAlKfEE1ALp6QS3PGrnjcEJ7V7ftlO0Q_XWaQYHzzLbN0mghkh5GiKxeOcXyaor-HcAWCampiBJSlgdOjs ' ,
    'Content-Type': 'application/json'
  })

  constructor(public http:HttpClient) { }

  getsongs(){
   return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers:this.items})
  }

 
}
