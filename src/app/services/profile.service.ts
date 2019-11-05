import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
private username:string;
private clientid ='39757cff39b6d5dabe5c';
private clientsecret='28d3f70395eba21da000d5ed6cf681596fd275ab';
  constructor(private http :HttpClient) {
    console.log("service is now ready")
    this.username = 'vique254';
   }
   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid +"&client_secret" + this.clientsecret );
   }
}
