import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateUserService } from 'src/app/service/authenticate-user.service';
import { LoginService } from 'src/app/service/login.service';
import { LoginUser } from 'src/app/models/loginuser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router :Router, private loginService: AuthenticateUserService, private userLogin: LoginService) { }

  ngOnInit(): void {
    
  }

  username :string;
  password :string;
  invalidLogin = false;

  login(){
    let loginuser = new LoginUser(this.username, this.password);
    this.userLogin.getUserByUP(loginuser).subscribe(
      (response) =>{
        this.checkLogin();
        console.log(response);
      },
      (response) => {
        console.log("no user")
      }
    )

  }

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
