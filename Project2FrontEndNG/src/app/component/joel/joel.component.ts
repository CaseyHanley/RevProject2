import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from 'src/app/models/Order';


@Component({
  selector: 'app-joel',
  templateUrl: './joel.component.html',
  styleUrls: ['./joel.component.css']
})
export class JoelComponent implements OnInit {

  constructor(private o1 : Order) { }

  let o1 = new Order(0,0,0,this.finalPrice,this.comments,"Pending",
  0,this.starterName,this.appetizerName,this.soupName,this.saladName,
  this.maincourseName,this.dessertName,this.beverageName);


  //name
  starterName :string = "";
  appetizerName :string = "";
  soupName :string = "";
  saladName :string = "";
  maincourseName :string = "";
  dessertName :string = "";
  beverageName :string = "";
  comments :string = "";

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

  finalPrice :number = 0;
  calculateFinalPrice() {
    this.finalPrice = (this.starterPrice * this.starterQuantity)
    + (this.appetizerPrice * this.appetizerQuantity)
    + (this.soupPrice * this.soupQuantity)
    + (this.saladPrice * this.saladQuantity)
    + (this.maincoursePrice * this.maincourseQuantity)
    + (this.dessertPrice * this.dessertQuantity)
    + (this.beveragePrice * this.beverageQuantity);
  }

  addDessert() {this.dessertQuantity +=1; this.calculateFinalPrice()}
  subtractDessert() {if(this.dessertQuantity > 0) this.dessertQuantity -=1; this.calculateFinalPrice()}

  addMaincourse() {this.maincourseQuantity +=1; this.calculateFinalPrice()}
  subtractMainCourse() {if(this.maincourseQuantity > 0) this.maincourseQuantity -=1; this.calculateFinalPrice()}

  addSoup() {this.soupQuantity +=1; this.calculateFinalPrice()}
  subtractSoup() {if(this.soupQuantity > 0) this.soupQuantity -=1; this.calculateFinalPrice()}

  addSalad() {this.saladQuantity +=1; this.calculateFinalPrice()}
  subtractSalad() {if(this.saladQuantity > 0) this.saladQuantity -=1; this.calculateFinalPrice()}

  addAppetizer() {this.appetizerQuantity +=1; this.calculateFinalPrice()}
  subtractAppetizer() {if(this.appetizerQuantity > 0) this.appetizerQuantity -=1; this.calculateFinalPrice()}

  addStarter() {this.starterQuantity +=1; this.calculateFinalPrice()}
  subtractStarter() {if(this.starterQuantity > 0) this.starterQuantity -=1; this.calculateFinalPrice()}

  addBeverage() {this.beverageQuantity +=1; this.calculateFinalPrice()}
  subtractBeverage() {if(this.beverageQuantity > 0) this.beverageQuantity -=1; this.calculateFinalPrice()}
  
  selectBeverage(id :number) {
    if(id==1) {
      this.beverageName="Iced Mocha Latte";
      this.beverageDesc="A delicious chocolatey drink!";
      this.beveragePrice=7.99;
    }
    else if(id==2) {
      this.beverageName="Mai Tai";
      this.beverageDesc="A cocktail based on rum, Curaçao liqueur, orgeat syrup, and lime juice";
      this.beveragePrice=11.99;
    }
    else if(id==3) {
      this.beverageName="Pina Colada";
      this.beverageDesc="A sweet cocktail made with rum, cream of coconut or coconut milk, and pineapple juice";
      this.beveragePrice=12.99;
    }
  }

  selectDessert(id :number) {
    if(id==1) {
      this.dessertName="Strawberry Shortbread";
      this.dessertDesc="Made with real strawberries!";
      this.dessertPrice=9.99;
    }
    else if(id==2) {
      this.dessertName="Red Velvet Cake";
      this.dessertDesc="A fluffy, creamy taste of heaven";
      this.dessertPrice=9.99;
    }
    else if(id==3) {
      this.dessertName="Chocolate Mousse";
      this.dessertDesc="Made creamy and thick";
      this.dessertPrice=9.99;
    }
  }

  selectMain(id :number) {
    if(id==1) {
      this.maincourseName="Lobster Stuffed Crab";
      this.maincourseDesc="Flavored with fresh herbs and lemon and topped with an herbed panko crust for texture";
      this.maincoursePrice=28.49;
    }
    else if(id==2) {
      this.maincourseName="Ribeye Steak Special";
      this.maincourseDesc="Cooked to your choice of rare, medium rare, of well done";
      this.maincoursePrice=33.79;
    }
    else if(id==3) {
      this.maincourseName="Grilled Salmon Pasta";
      this.maincourseDesc="Fresh salmon seasoned with fine herbs and served with your choice of pesto or marinara";
      this.maincoursePrice=25.99;
    }
  }

  selectSalad(id :number) {
    if(id==1) {
      this.saladName="Arugula Salad";
      this.saladDesc="Flavored with fresh herbs and lemon and topped with an herbed panko crust for texture";
      this.saladPrice=11.49;
    }
    else if(id==2) {
      this.saladName="Garden Salad";
      this.saladDesc="Our Garden Salad includes mixed greens, tomato, shredded carrots, cucumber, red cabbage and your choice of salad dressing";
      this.saladPrice=8.99;
    }
    else if(id==3) {
      this.saladName="Caesar Salad";
      this.saladDesc="Topped with freshly grated parmesan, croutons, and Caesar dressing";
      this.saladPrice=8.99;
    }
  }

  selectSoup(id :number) {
    if(id==1) {
      this.soupName="Asparagus Soup";
      this.soupDesc="Soup with Asparagus";
      this.soupPrice=5.99;
    }
    else if(id==2) {
      this.soupName="French Onion Soup";
      this.soupDesc="Comes with a side of garlic bread";
      this.soupPrice=5.99;
    }
    else if(id==3) {
      this.soupName="Coconut Chicken Soup";
      this.soupDesc="Zesty chicken with cream of coconut";
      this.soupPrice=6.99;
    }
  }

  selectAppetizer(id :number) {
    if(id==1) {
      this.soupName="Scallop Carpaccio";
      this.soupDesc="Soup with Asparagus";
      this.soupPrice=12.99;
    }
    else if(id==2) {
      this.soupName="Poached Lobster Tail";
      this.soupDesc="Comes with a side of garlic bread";
      this.soupPrice=18.99;
    }
    else if(id==3) {
      this.soupName="Caviar";
      this.soupDesc="Zesty chicken with cream of coconut";
      this.soupPrice=21.99;
    }
  }

  selectStarter(id :number) {
    if(id==1) {
      this.starterName="Scallop Carpaccio";
      this.starterDesc="Soup with Asparagus";
      this.starterPrice=2.99;
    }
    else if(id==2) {
      this.starterName="Poached Lobster Tail";
      this.starterDesc="Comes with a side of garlic bread";
      this.starterPrice=13.99;
    }
    else if(id==3) {
      this.starterName="Caviar";
      this.starterDesc="Zesty chicken with cream of coconut";
      this.starterPrice=15.99;
    }
  }
  

  ngOnInit(): void {
  }



}
