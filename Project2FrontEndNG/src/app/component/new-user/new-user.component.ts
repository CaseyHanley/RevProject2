import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { User } from 'src/app/models/user';

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

  constructor(private userService : LoginService) { }

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
    let user = new User(this.firstname, this.lastname,this.username, this.password, this.account_type);
    this.userService.addNewUser(user).subscribe(
      (response) =>{
        this.welcomeUser();
        console.log(response);
      },
      (response) => {
        console.log("no user")
      }
    )
  }

  welcomeUser(){
    alert('Successful Registration');
  }
}
