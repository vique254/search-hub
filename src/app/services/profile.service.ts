import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
private username:string;
private clientid ='39757cff39b6d5dabe5c';
private clientsecret='28d3f70395eba21da000d5ed6cf681596fd275ab';
  constructor(private http :Http) { }
}
