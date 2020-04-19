import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Address } from 'src/app/models/Address'
import { AddressService } from 'src/app/service/address.service'
import { OrderService } from 'src/app/service/order.service';
import { Order } from 'src/app/models/Order';
import { Router } from '@angular/router';
import { ElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'app-matt',
  templateUrl: './matt.component.html',
  styleUrls: ['./matt.component.css']
})
export class MattComponent implements OnInit {

  constructor(private router: Router, private myaddress: AddressService, private orderService: OrderService) { }

  ngOnInit(): void {

  }

  
  addressList: Array<Address>;
  username :string;
  state: string;
  city: string;
  address: string;
  address2 : string;
  zipcode: number;
  comments: string;
  valid :boolean = false;



  viewMyAddress() {
   
    this.myaddress.getAddresses(sessionStorage.getItem("username")).subscribe(
      (response) => {
        this.addressList = response;
        console.log(response);
      },

      (response) => {
        console.log("failed to grab address");
      }

    );
  }

  hideAddress(){
    
  }

  ViewAddAddress(){
    document.getElementById("addressform").style.display = "block";

}

ViewAddPayment(){
  document.getElementById("paymentform").style.display = "block";

}
  addAddress(){

    if (this.validateInputFields()) {
      let address = new Address (sessionStorage.getItem("username"), this.state, this.city, this.address, this.address2, this.zipcode, this.comments)
      this.myaddress.addAddress(address).subscribe(
        (response) => {
          console.log(response);
          
        },
        (response) => {
          console.log("Failed to add Address")
          console.log(response);
        }
      );
    }
  }

  validateInputFields(): boolean {

    if (
      this.address== undefined ||
      this.address == "" ||
      this.city == undefined ||
      this.city == "" ||
      this.state == undefined ||
      this.state == "" ||
      this.zipcode == undefined) {
        this.valid = false;
      return false;
    } else {
      this.valid = true;
      return true;
    }
  }


  Pay(){

  }

  showBill :string = "";
  viewBillOnSubmit() {
    this.showBill = "Show Bill";
  }

  showButton :string = "";
  showBButton() {
    this.showButton = "noshow";
  }

  showPayment(){
    if(this.addressList !=null)
    return true;
    else
    return false;
  }

  }
