import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Address } from 'src/app/models/Address'
import { AddressService } from 'src/app/service/address.service'
import { OrderService } from 'src/app/service/order.service';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-matt',
  templateUrl: './matt.component.html',
  styleUrls: ['./matt.component.css']
})
export class MattComponent implements OnInit {

  constructor(private myaddress: AddressService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.viewMyAddress()
  }

  uid: number = 1; //Need User ID
  addressList: Array<Address>;
  a_id: string;
  address: string;
  address2 : string;
  city: String;
  state: String;
  zipcode: number;
  comments: String;
  valid :boolean = false;



  viewMyAddress() {
    // this.myaddress.getAddresses(sessionStorage.getItem("username")).subscribe(
    this.myaddress.getAddresses(this.uid).subscribe(
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
      let address = new Address (this.address, this.address2, this.city, this.state, this.zipcode, this.comments, null, this.uid)
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
   
   //var rowIndex = $(x).closest('tr').index();
    var rowIndex = (x).closest('tr').index();

    this.myaddress.deleteAddress(this.addressList[rowIndex].a_id);
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
        var order = Response;
        order.status = "delivery";
        this.orderService.updateOrders(order).subscribe(
          (Response) => {
            console.log("Sucess");
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
