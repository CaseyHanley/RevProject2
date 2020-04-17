import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { AuthenticateUserService } from 'src/app/service/authenticate-user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  username :string;
  password :string;
  firstname :string;
  lastname :string;
  account_type :string;

  constructor(private userService : LoginService, private router :Router, private authService: AuthenticateUserService) { }

  ngOnInit(): void {
  this.isManager();
  }

  isManager() {
    if(sessionStorage.getItem('username')==='sam'){
      return true;
    }else{
      return false;
    }
  }

  addUser(){
    let user = new User(this.username, this.password,this.firstname, this.lastname, this.account_type);
    this.userService.addNewUser(user).subscribe(
      (response) =>{
        this.welcomeUser();
        console.log(response);
      },
      (response) => {
        this.rejectUser();
        console.log("no user")
      }
    )
  }

  welcomeUser(){
    alert('Successful Registration');
    if(this.authService.isUserLoggedIn()){
    this.router.navigate(['homepage'])
    }else{
      this.router.navigate(['login'])
    }

    
  }

  rejectUser(){
    alert('Invalid Credentials');

  }
}
