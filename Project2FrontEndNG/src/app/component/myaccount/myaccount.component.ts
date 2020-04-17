import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

  constructor(private router :Router, private userService :LoginService) {}

  ngOnInit(): void {
    this.accountNum();
    this.getAccount();
  }

  
  accountUser :User;
  randnumber :number;

  getAccount(){
    this.userService.getUser().subscribe(
      (response) =>(
      this.accountUser=response
      ),
      (response) =>(
        console.log("bad call")
      )

    );
  }

  accountNum(){
  this.randnumber = 82839;
  }
}
