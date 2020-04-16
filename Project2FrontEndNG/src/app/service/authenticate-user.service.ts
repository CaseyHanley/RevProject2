import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AuthenticateUserService {

  constructor() { }

  username :string;
  password :string;


  authenticate(username, password) {
    if(username !==null && password !==null){
    sessionStorage.setItem('username', username)
    return true;
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
  
  logOut() {
    sessionStorage.removeItem('username')
    
  }

}

