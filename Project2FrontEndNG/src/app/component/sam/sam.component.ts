import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { MenuItem } from 'src/app/Models/MenuItem';
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
        this.order = response[0]
      }
    )
  }

  ngOnInit(): void {
  }

  remove(index: number): void{
    switch(index){
      case 1:{
        this.order.menuItem1 = null;
        break;
      }
      case 2:{
        this.order.menuItem2 = null;
        break;
      }
      case 3:{
        this.order.menuItem3 = null;
        break;
      }
      case 4:{
        this.order.menuItem4 = null;
        break;
      }
      case 5:{
        this.order.menuItem5 = null;
        break;
      }
      case 6:{
        this.order.menuItem6 = null;
        break;
      }
      case 7:{
        this.order.menuItem7 = null;
        break;
      }
      
    }
  }


}

