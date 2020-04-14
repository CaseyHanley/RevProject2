import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginUser } from '../models/loginuser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}
  private headers = new HttpHeaders({'Content-Type' : 'application/json'});

  getUserByUP(user :LoginUser) :Observable<LoginUser>{
    return this.http.post<LoginUser>('http://localhost:8080/users/login',user,{headers : this.headers})
  }

  
}
