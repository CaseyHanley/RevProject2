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

}
