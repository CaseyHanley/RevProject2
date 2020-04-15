import { Injectable } from '@angular/core';

import { Order } from '../models/Order';
import { MenuItem } from '../models/MenuItem';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private headers = new HttpHeaders({'Content-Type':'application/json'});

  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(this.url + '/orders/' + sessionStorage.getItem("username"));
    console.log(this.url + '/orders/' + sessionStorage.getItem("username"));

  }

  updateOrders(update: Order): Observable<Order>{
    return this.http.put<Order>(this.url + "/orders", JSON.stringify(update));
  } 


}
