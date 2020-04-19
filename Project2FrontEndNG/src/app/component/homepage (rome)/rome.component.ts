import { Component, OnInit } from '@angular/core';
import { AuthenticateUserService } from 'src/app/service/authenticate-user.service';
import { RouterOutlet } from '@angular/router'
import { trigger, transition, animate, style , state, query, group } from '@angular/animations';

@Component({
  selector: 'app-rome',
  templateUrl: './rome.component.html',
  styleUrls: ['./rome.component.css'],
//   animations:[
//      trigger('routeAnimations',[
//        transition('1 => 2',[
//         style({ height : '!'}),
//         query(':enter', style({transform:'translateX(100%)' })),
//         query(':enter, :leave', style({  position: 'absolute', top: 0, left: 0, right: 0})),
//         group([
//           query(':leave', [animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(100%)'})),
//        query(':enter', [animate('0.3s cubic-bezier(.35, 0, .25 , 1)'), style({ transform:'translateX(0)' })),
//         ])
//       ])
//      ])
//     ]
})

export class RomeComponent implements OnInit {

  constructor(private loginService : AuthenticateUserService) { }

  images = [
    "../assets/Images/Fine-Dining.jpg",
    "../assets/Images/michael-browning-MtqG1lWcUw0-unsplash.jpg",
    "../assets/Images/taylor-grote-UxhIU5f5GN4-unsplash.jpg",
    "../assets/Images/jay-wennington-N_Y88TWmGwA-unsplash.jpg",
    "../assets/Images/louis-hansel-shotsoflouis-adYREqRdHCs-unsplash.jpg",
    "../assets/Images/zakaria-zayane-0uAVsDcyD0M-unsplash.jpg"

  ]


  prepareRoute(outlet){
    return outlet.activatedRouteData['outlet'];
  }

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
