import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { MenuItem } from 'src/app/Models/MenuItem';


@Component({
  selector: 'app-sam',
  templateUrl: './sam.component.html',
  styleUrls: ['./sam.component.css']
})

export class SamComponent implements OnInit {
  order: OrderService;
  total: number = 0;

  constructor(order: OrderService) {
    this.order = order;
  }

  ngOnInit(): void {
  }

  remove(index: number): void{
    switch(index){
      case 1:{
        this.order.order.menuItem1 = null;
        break;
      }
      case 2:{
        this.order.order.menuItem2 = null;
        break;
      }
      case 3:{
        this.order.order.menuItem3 = null;
        break;
      }
      case 4:{
        this.order.order.menuItem4 = null;
        break;
      }
      case 5:{
        this.order.order.menuItem5 = null;
        break;
      }
      case 6:{
        this.order.order.menuItem6 = null;
        break;
      }
      case 7:{
        this.order.order.menuItem7 = null;
        break;
      }
      
    }
    //this.order.order.food.splice(index);
  }


}

