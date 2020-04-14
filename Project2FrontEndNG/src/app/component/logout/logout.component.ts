import { Component, OnInit } from '@angular/core';
import { AuthenticateUserService } from 'src/app/service/authenticate-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private logoutService : AuthenticateUserService, private router: Router) { }

  ngOnInit(): void {
    this.logoutService.logOut;
    alert('Logged out');
    this.router.navigate(['logout']);
  }

}
