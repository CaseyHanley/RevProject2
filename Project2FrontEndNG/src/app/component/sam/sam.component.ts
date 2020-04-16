import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { Order } from 'src/app/Models/Order';


@Component({
  selector: 'app-sam',
  templateUrl: './sam.component.html',
  styleUrls: ['./sam.component.css']
})

export class SamComponent implements OnInit {
  order: Order;
  total: number = 0;

  constructor(order: OrderService) {
    order.getOrders().subscribe(
      (response) => {
        this.order = response;
        console.log(this.order);
        //this.order.push(null);
        console.log(this.order);
        console.log(this.order[0]);
        console.log("success");
      },

      (response) => {
        console.log("failure");
      }
    )
  }

  ngOnInit(): void {
  }

  remove(index: number): void{
    switch(index){
      case 1:{
        this.order[0].productname1 = null;
        break;
      }
      case 2:{
        this.order[0].productname2 = null;
        break;
      }
      case 3:{
        this.order[0].productname3 = null;
        break;
      }
      case 4:{
        this.order[0].productname4 = null;
        break;
      }
      case 5:{
        this.order[0].productname5 = null;
        break;
      }
      case 6:{
        this.order[0].productname6 = null;
        break;
      }
      case 7:{
        this.order[0].productname7 = null;
        break;
      }
      
    }
  }


}

