import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottomnav',
  templateUrl: './bottomnav.component.html',
  styleUrls: ['./bottomnav.component.css']
})
export class BottomnavComponent implements OnInit {

  constructor() { }

  username :string;

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


}
