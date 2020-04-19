import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { Order } from 'src/app/models/Order';
import { CheckboxRequiredValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { DriverService } from 'src/app/service/driver.service';
import { DeliveryDriver } from 'src/app/models/DeliveryDriver';


@Component({
  selector: 'app-sam',
  templateUrl: './sam.component.html',
  styleUrls: ['./sam.component.css']
})

export class SamComponent implements OnInit {

  ngOnInit(): void {
    this.viewOrder();
  }
  order: Order;
  total: number = 0;
  driverUsername: string;
  ousername :string;
  oid :number;

  constructor(private driver : DriverService, private orderService: OrderService, private router:Router) {}

  viewOrder(){
    this.orderService.getOrders().subscribe(
      (response) => {
        this.order = response;
        console.log(this.order);
      },

      (response) => {
        console.log("failure");
      }
    )
  }

  setDriver(){
    let name = sessionStorage.getItem("username");
    let newDriver = new DeliveryDriver(0,'joel', name, this.order.oid);
    this.driver.addDriver(newDriver).subscribe(
      (response) => {
      console.log(response);
      this.router.navigate(['payment'])
      },
      (response) => {
        console.log("no response");
      }
    )
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
      this.orderService.deleteOrders(this.order.oid).subscribe(
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

