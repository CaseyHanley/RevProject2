import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Address } from 'src/app/models/Address'
import { AddressService } from 'src/app/service/address.service'
import { OrderService } from 'src/app/service/order.service';
import { Order } from 'src/app/models/Order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matt',
  templateUrl: './matt.component.html',
  styleUrls: ['./matt.component.css']
})
export class MattComponent implements OnInit {

  constructor(private router: Router, private myaddress: AddressService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.viewMyAddress()
  }

  
  addressList: Array<Address>;
  username :string;
  state: String;
  city: String;
  address: string;
  address2 : string;
  zipcode: number;
  comments: String;
  valid :boolean = false;



  viewMyAddress() {
    // this.myaddress.getAddresses(sessionStorage.getItem("username")).subscribe(
    this.myaddress.getAddresses(sessionStorage.getItem("username")).subscribe(
      (response) => {
        this.addressList = response;
      },

      (response) => {
        console.log("failed to grab address");
      }

    );
  }

  ViewAddAddress(){
    document.getElementById("addressform").style.display = "block";

}
  addAddress(){

    if (this.validateInputFields()) {
      let address = new Address (sessionStorage.getItem("username"), this.state, this.city, this.address, this.address2, this.zipcode, this.comments)
      this.myaddress.addAddress(address).subscribe(
        (response) => {
          console.log(response);
          this.addressList.push(response);
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

  deleteMyAddress(x){
   
    
  //  var rowIndex = $(x).closest('tr').index();
  //   var rowIndex = (x).closest('tr').index();

  //   this.myaddress.deleteAddress(this.addressList[rowIndex].a_id);
  }


  EditMyAddress(x){
    //var rowIndex = $(x).closest('tr').index();
    var rowIndex = (x).closest('tr').index();
    var edit = this.addressList[rowIndex];

    //Todo not sure how I want to build this yet.

    this.myaddress.editAddress(edit);
    }

  Pay(){
    this.orderService.getOrders().subscribe(
      (Response) => {
        let order = Response;
        order.status = "out for delivery";
        this.orderService.updateOrders(order).subscribe(
          (Response) => {
            console.log("response");
            alert("Order successfully placed")
            this.router.navigate(['homepage'])
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
  }
