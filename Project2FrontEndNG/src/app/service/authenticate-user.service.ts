import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateUserService {

  constructor() { }

  authenticate(username, password) {
    // if (username === this.UserService.getUser && password === "pass")
    if (username === "rome" && password === "pass") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
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
