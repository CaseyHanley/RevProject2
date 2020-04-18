import { Component, OnInit } from '@angular/core';
import { DriverService } from 'src/app/service/driver.service';
import { Router } from '@angular/router';
import { DeliveryDriver } from 'src/app/models/DeliveryDriver';
import { AddressService } from 'src/app/service/address.service';
import { OrderService } from 'src/app/service/order.service';


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
        console.log(response);
      },
      (response) =>{
        console.log('failed call2');
      }
    )
    
  }
}
