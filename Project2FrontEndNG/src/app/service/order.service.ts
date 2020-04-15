import { Injectable } from '@angular/core';
import { Order } from '../models/Order';
import { MenuItem } from '../models/MenuItem';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public order: Order;
  constructor() { 
    this.order = new Order(0, 0, 0, 0, '','',0, null, null, null, null, null, null, null);
    this.order.menuItem1 = new MenuItem(1, "a lobster", "Lobster", 75);
  }
}
