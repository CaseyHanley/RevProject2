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
  orderService: OrderService;
  total: number = 0;

  constructor(order: OrderService) {
    this.orderService = order;
    order.getOrders().subscribe(
      (response) => {
        this.order = response;
        console.log("success");
        console.log(this.order);
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
        this.order.productname1 = null;
        break;
      }
      case 2:{
        this.order.productname2 = null;
        break;
      }
      case 3:{
        this.order.productname3 = null;
        break;
      }
      case 4:{
        this.order.productname4 = null;
        break;
      }
      case 5:{
        this.order.productname5 = null;
        break;
      }
      case 6:{
        this.order.productname6 = null;
        break;
      }
      case 7:{
        this.order.productname7 = null;
        break;
      }
      
    }
    
  }
  clear(): void {
    if(this.order != null){
      this.orderService.deleteOrders(this.order.o_id).subscribe(
        (response) => {
          this.order = null;
          console.log("Order successfully deleted");
        },
        (response) => {
          console.log("something went wrong");
        }
      )
    }
}


}

