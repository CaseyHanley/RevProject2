import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  name :string;
  username :string;
  subject :string;
  message :string;

  constructor() { }

  ngOnInit(): void {
  }


}
