import { Component, OnInit } from '@angular/core';
import { AuthenticateUserService } from 'src/app/service/authenticate-user.service';

@Component({
  selector: 'app-rome',
  templateUrl: './rome.component.html',
  styleUrls: ['./rome.component.css']
})
export class RomeComponent implements OnInit {
  images = [
    "../assets/Images/Fine-Dining.jpg",
    "../assets/Images/michael-browning-MtqG1lWcUw0-unsplash.jpg",
    "../assets/Images/taylor-grote-UxhIU5f5GN4-unsplash.jpg",
    "../assets/Images/jay-wennington-N_Y88TWmGwA-unsplash.jpg",
    "../assets/Images/louis-hansel-shotsoflouis-adYREqRdHCs-unsplash.jpg",
    "../assets/Images/zakaria-zayane-0uAVsDcyD0M-unsplash.jpg"

    
  ]



  constructor(private loginService : AuthenticateUserService) { }

  ngOnInit(): void {
  }

  showText: boolean = true;

  isLoggedin() :boolean{
    if(this.loginService.isUserLoggedIn()){
      return true
    }else{
      return false
    }
  }

  showAbout(){
    this.showText = true;
  }

  showPage(){
    this.showText = false;
  }

}
