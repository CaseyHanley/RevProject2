import { Component, OnInit } from '@angular/core';
import { DriverService } from 'src/app/service/driver.service';
import { Router } from '@angular/router';
import { DeliveryDriver } from 'src/app/models/DeliveryDriver';
import { AddressService } from 'src/app/service/address.service';
import { OrderService } from 'src/app/service/order.service';
import { Address } from 'src/app/models/Address';
import { Order } from 'src/app/models/Order';


@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  constructor(private order: OrderService, private addressService:AddressService, private driver : DriverService, private router:Router) { }

  ngOnInit(): void {
    this.showDriver();
  }
  
  driverUsername: string;
  ousername :string;
  oid :number;
  newdriver :DeliveryDriver;
  address : Address[];
  orders :Order;

  showDriver(){
    
    this.driver.getDriver().subscribe(
      (response) =>{
        this.newdriver = response;
        this.getUserAddress();
        this.getDriverOrder();
        console.log(response);
      },(response) =>{
        console.log('failed driver');
      }

    )
  }

  getUserAddress(){
    this.addressService.getAddresses(this.newdriver.ousername).subscribe(
      (response) => {
        this.address = response;
        console.log(response);
      },
      (response) =>{
        console.log('failed call');
      }
    )
  }

  getDriverOrder(){
    this.order.getOrderForDriver(this.newdriver.ousername).subscribe(
      (response) => {
        this.orders = response;
        console.log(response);
      },
      (response) =>{
        console.log('failed call2');
      }
    )
    
  }

  checkout(){
    this.order.getOrderForDriver(this.newdriver.ousername).subscribe(
      (Response) => {
        let order = Response;
        order.status = "Out for delivery";
        this.order.updateOrders(order).subscribe(
          (Response) => {
            console.log(Response);
            this.router.navigate(['driver'])
            alert("Order successfully updated")
            
          },
          (Response) => {
            console.log("Error: Could not Update");
          }
        )},
        (Response) => {
          console.log("Error: could not get order");
        }
    )

  }

  completeOrder(){
      
        this.order.deleteOrders(this.orders.oid).subscribe(
          (response) => {
            console.log("Order successfully deleted");
            this.completeDriver();
            this.router.navigate(['driver'])
          },
          (response) => {
            console.log("something went wrong");
          }
        )
      }

      completeDriver(){
      
        this.driver.deleteDriver(this.newdriver.driverid).subscribe(
          (response) => {
            console.log("Order successfully deleted");
            this.router.navigate(['driver'])
          },
          (response) => {
            console.log("something went wrong");
          }
        )
      }
  
}

