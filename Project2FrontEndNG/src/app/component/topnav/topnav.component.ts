import { Component, OnInit } from '@angular/core';
import { AuthenticateUserService } from 'src/app/service/authenticate-user.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  constructor(private loginService : AuthenticateUserService) { }

  ngOnInit(): void {
  }

  title = 'Pittsburgh | Good Eats Fine Dining';
  
isLoggedin() :boolean{
  if(this.loginService.isUserLoggedIn()){
    return true
  }else{
    return false
  }
}

isDriver() {
  if(sessionStorage.getItem('username')==='joel'){
    return true;
  }else{
    return false;
  }
}

isEmployee() {
  if(sessionStorage.getItem('username')==='sam' || sessionStorage.getItem('username')==='rome' || sessionStorage.getItem('username')==='casey' || sessionStorage.getItem('username')==='joel'){
    return true;
  }else{
    return false;
  }
}



}
