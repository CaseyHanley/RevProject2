import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 clearText() {
    document.getElementById("name").innerText= "";
    document.getElementById("ccnumber").innerText = "";
    document.getElementById("ccmonth").innerHTML = "";
    document.getElementById("ccyear").innerHTML = "";
    document.getElementById("cvv").innerHTML = "";
  }

  submitAlert(){
    document.getElementById("submittext").innerHTML = 'Payment Successsful your order will be out for delivery shortly !'
  }

}
