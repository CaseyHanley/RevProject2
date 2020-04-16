import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rome',
  templateUrl: './rome.component.html',
  styleUrls: ['./rome.component.css']
})
export class RomeComponent implements OnInit {
  images = [
    "../assets/Images/louis-hansel-shotsoflouis-adYREqRdHCs-unsplash.jpg",
    "../assets/Images/Fine-Dining.jpg",
    "../assets/Images/andres-medina-eGPlT_RXzi8-unsplash.jpg",
    "../assets/Images/cody-chan-FdvHxVWHhzA-unsplash.jpg"

    
  ]

  

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
