import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Address } from 'src/app/component/matt/models/Address'
import { AddressService } from 'src/app/component/matt/service/address.service'

@Component({
  selector: 'app-matt',
  templateUrl: './matt.component.html',
  styleUrls: ['./matt.component.css']
})
export class MattComponent implements OnInit {

  constructor(private myaddress: AddressService) { }

  ngOnInit(): void {
    this.viewMyAddress()
  }

  uid: number; //Need User ID
  addressList: Array<Address>;
  number: number;
  streetName: string;
  line2 : string;
  city: String;
  state: String;
  postal: number;
  SpecInstr: String;
  valid :boolean = false;

  viewMyAddress() {
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
      let address = new Address ( this.number,  this.streetName,  this.line2, this.city, this.state, this.postal, this.SpecInstr)
      this.myaddress.addAddress(address).subscribe(
        (response) => {
          console.log(response);
          this.addressList.push(response);
        },
        (response) => {
          console.log("Failed to add Addres")
          console.log(response);
        }
      );
    }
  }

  validateInputFields(): boolean {

    if (this.number == undefined ||
      this.streetName== undefined ||
      this.streetName == "" ||
      this.city == undefined ||
      this.city == "" ||
      this.state == undefined ||
      this.state == "" ||
      this.postal == undefined) {
        this.valid = false;
      return false;
    } else {
      this.valid = true;
      return true;
    }
  }

}


