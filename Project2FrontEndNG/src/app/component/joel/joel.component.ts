import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joel',
  templateUrl: './joel.component.html',
  styleUrls: ['./joel.component.css']
})
export class JoelComponent implements OnInit {

  //name
  starterName :string = "";
  appetizerName :string = "";
  soupName :string = "";
  saladName :string = "";
  maincourseName :string = "";
  dessertName :string = "";
  beverageName :string = "";

  //description
  starterDesc :string = "";
  appetizerDesc :string = "";
  soupDesc :string = "";
  saladDesc :string = "";
  maincourseDesc :string = "";
  dessertDesc :string = "";
  beverageDesc :string = "";

  //quantity
  starterQuantity :number = 0;
  appetizerQuantity :number = 0;
  soupQuantity :number = 0;
  saladQuantity :number = 0;
  maincourseQuantity :number = 0;
  dessertQuantity :number = 0;
  beverageQuantity :number = 0;

  //price
  starterPrice :number = 0;
  appetizerPrice :number = 0;
  soupPrice :number = 0;
  saladPrice :number = 0;
  maincoursePrice :number = 0;
  dessertPrice :number = 0;
  beveragePrice :number = 0;

  constructor() { }

  ngOnInit(): void {
  }



}
