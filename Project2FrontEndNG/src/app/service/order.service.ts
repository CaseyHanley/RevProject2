import { Injectable } from '@angular/core';
import { Order } from '../Models/Order';
import { MenuItem } from '../Models/MenuItem';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public order: Order;
  constructor() { 
    this.order = new Order(0, 0, 0, 0, '','',0, []);
    this.order.food.push(new MenuItem(1, "a lobster", "Lobster", 75));
  }
}