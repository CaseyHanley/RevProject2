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
    let newDriver = new DeliveryDriver('joel', sessionStorage.getItem("username"), this.order.oid);
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
 
  isBreadSticks(){
    if(this.order.productname1=='Breadsticks'){
      return true;
    }else{
      return false;
    }
  }
    checkCrab(){
    if(this.order.productname1=='Crab and Avocado Toasts'){
      return true;
    }else{
      return false;
    }
    }
   checkBru(){
    if(this.order.productname1=='Bruschetta'){
      return true;
    }else{
      return false;
    }
  }
  isScallop(){
    if(this.order.productname2=='Scallop Carpaccio'){
      return true;
    }else{
      return false;
    }
  }
    isPoached(){
    if(this.order.productname2=='Poached Lobster Tail'){
      return true;
    }else{
      return false;
    }
    }
   isCaviar(){
    if(this.order.productname2=='Caviar'){
      return true;
    }else{
      return false;
    }
  }
  aspSoup(){
    if(this.order.productname3=='Asparagus Soup'){
      return true;
    }else{
      return false;
    }
  }
    frenchSoup(){
    if(this.order.productname3=='French Onion Soup'){
      return true;
    }else{
      return false;
    }
    }
   cocoSoup(){
    if(this.order.productname3=='Coconut Chicken Soup'){
      return true;
    }else{
      return false;
    }
  }
  isArugula(){
    if(this.order.productname4=='Arugula Salad'){
      return true;
    }else{
      return false;
    }
  }
    isGarden(){
    if(this.order.productname4=='Garden Salad'){
      return true;
    }else{
      return false;
    }
    }
   isCaesar(){
    if(this.order.productname4=='Caesar Salad'){
      return true;
    }else{
      return false;
    }
  }
  isLobster(){
    if(this.order.productname5=='Lobster Stuffed Crab'){
      return true;
    }else{
      return false;
    }
  }
    isRibeye(){
    if(this.order.productname5=='Ribeye Steak Special'){
      return true;
    }else{
      return false;
    }
    }
   isSalmon(){
    if(this.order.productname5=='Grilled Salmon Pasta'){
      return true;
    }else{
      return false;
    }
  }
  isStrawberry(){
    if(this.order.productname6=='Strawberry Shortbread'){
      return true;
    }else{
      return false;
    }
  }
    isVelvet(){
    if(this.order.productname6=='Red Velvet Cake'){
      return true;
    }else{
      return false;
    }
    }
   isMousse(){
    if(this.order.productname6=='Chocolate Mousse'){
      return true;
    }else{
      return false;
    }
  }
  isIced(){
    if(this.order.productname7=='Iced Mocha Latte'){
      return true;
    }else{
      return false;
    }
  }
    isMai(){
    if(this.order.productname7=='Mai-Tai'){
      return true;
    }else{
      return false;
    }
    }
   isPina(){
    if(this.order.productname7=='Pina Colada'){
      return true;
    }else{
      return false;
    }
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

