import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { OrderService } from 'src/app/service/order.service';
@Component({
  selector: 'app-joel',
  templateUrl: './joel.component.html',
  styleUrls: ['./joel.component.css']
})
export class JoelComponent implements OnInit {
  constructor(private os1 : OrderService) { }
  submitOrder() {
    let o1 = new Order(0,sessionStorage.getItem("username"),this.finalPrice,this.comments,
  "in cart",this.starterName,this.appetizerName,
  this.soupName,this.saladName,this.maincourseName,this.dessertName,
  this.beverageName,this.starterQuantity,this.appetizerQuantity,
  this.soupQuantity,this.saladQuantity,this.maincourseQuantity,
  this.dessertQuantity,this.beverageQuantity);
  this.os1.addOrders(o1).subscribe(
    (response) => {
      console.log(this.os1);
    }
  )
  }
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
  subtractMaincourse() {if(this.maincourseQuantity > 0) this.maincourseQuantity -=1; this.calculateFinalPrice()}
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
    this.beverageQuantity=1;
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
    this.dessertQuantity=1;
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
    this.maincourseQuantity=1;
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
    this.saladQuantity=1;
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
    this.soupQuantity=1;
  }
  selectAppetizer(id :number) {
    if(id==1) {
      this.appetizerName="Scallop Carpaccio";
      this.appetizerDesc="Roaster with garlic herb and butter";
      this.appetizerPrice=12.99;
    }
    else if(id==2) {
      this.appetizerName="Poached Lobster Tail";
      this.appetizerDesc="Comes with a side of mashed potatoes";
      this.appetizerPrice=18.99;
    }
    else if(id==3) {
      this.appetizerName="Caviar";
      this.appetizerDesc="Fine salmon caviar";
      this.appetizerPrice=21.99;
    }
    this.appetizerQuantity=1;
  }
  selectStarter(id :number) {
    if(id==1) {
      this.starterName="Breadsticks";
      this.starterDesc="Warm oven roasted breadsticks served with olive oil";
      this.starterPrice=2.99;
    }
    else if(id==2) {
      this.starterName="Crab and Avocado Toasts";
      this.starterDesc="Our trademark crab and avocado h'orderves fit for the whole party";
      this.starterPrice=13.99;
    }
    else if(id==3) {
      this.starterName="Bruschetta";
      this.starterDesc="Served with fresh garden raised tomatoes and onions";
      this.starterPrice=15.99;
    }
    this.starterQuantity=1;
  }
  ngOnInit(): void {
  }
}