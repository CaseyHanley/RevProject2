import { Injectable } from '@angular/core';
import { Order } from '../models/Order';
import { MenuItem } from '../models/MenuItem';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public order: Order;
  constructor() { 
   
  }
}
