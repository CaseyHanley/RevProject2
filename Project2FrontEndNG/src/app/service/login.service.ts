import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { LoginUser } from '../models/loginuser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  param1 :string;
  param2 :string;

  constructor(private http: HttpClient) {}
  private headers = new HttpHeaders({'Content-Type' : 'application/json'});

  getUserByUP(user :LoginUser) :Observable<LoginUser>{
    return this.http.post<LoginUser>('http://localhost:8080/users/login',user,{headers : this.headers})
  }

  addNewUser(user :User) :Observable<User>{
    return this.http.post<User>('http://localhost:8080/users',user,{headers : this.headers})
  }

  authUserByUP() :Observable<LoginUser>{
    let params1 = new HttpParams().set("username",this.param1).set("password", this.param2);

    return this.http.get<LoginUser>('http://localhost:8080/users/auth', {params:params1});
  }
  
}
