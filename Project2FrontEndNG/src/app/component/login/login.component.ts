import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateUserService } from 'src/app/service/authenticate-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router :Router, private loginService: AuthenticateUserService) { }

  ngOnInit(): void {
    
  }

  username :string;
  password :string;
  invalidLogin = false;


  checkLogin(){
    if(this.loginService.authenticate(this.username,this.password)){
      this.router.navigate(['homepage'])
      alert('Welcome to Vision Fine Dining ! The worlds first fine dining delivery service')
      this.invalidLogin = false
    }else{
      alert('invalid login')
    this.invalidLogin=true
    }
  }

}
