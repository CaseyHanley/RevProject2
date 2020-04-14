import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rome',
  templateUrl: './rome.component.html',
  styleUrls: ['./rome.component.css']
})
export class RomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showText: boolean = true;

  showAbout(){
    this.showText = true;
  }

  showPage(){
    this.showText = false;
  }

}
