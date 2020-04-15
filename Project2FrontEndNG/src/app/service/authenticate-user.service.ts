import { Injectable } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { LoginUser } from 'src/app/models/loginuser';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateUserService {

  constructor(private userLogin: LoginService) { }

  username :string;
  password :string;

  authenticate(username, password) {
    if(username !==null && password !==null){
      //Chef
    if (username === "rome" && password === "pass") {
      sessionStorage.setItem('username', username)
      return true;
    } 
     //Customer
    if (username === "casey" && password === "pass") {
      sessionStorage.setItem('username', username)
      return true;
    } 
    //Driver
    if (username === "joel" && password === "pass") {
      sessionStorage.setItem('username', username)
      return true;
    } 
    //Manager
    if (username === "sam" && password === "pass") {
      sessionStorage.setItem('username', username)
      return true;
    } 
    //Host
    if (username === "matt" && password === "pass") {
      sessionStorage.setItem('username', username)
      return true;
    } 
  }else {
      return false;
    }
}
    

  isUserLoggedIn() :boolean {
    let user = sessionStorage.getItem('username')
    if (user !== null){
      return true;
    }else{
      return false
    }
  }
    // console.log(!(user === null))
    // return !(user === null)

  logOut() {
    sessionStorage.removeItem('username')
    
  }
}
