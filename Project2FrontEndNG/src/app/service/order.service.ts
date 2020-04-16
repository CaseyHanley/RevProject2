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

  private authorized = new HttpHeaders({'authorized':'pa$$word'});

  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order>{
    console.log(this.url + '/orders/' + sessionStorage.getItem("username"));
    return this.http.get<Order>(this.url + '/orders/' + sessionStorage.getItem("username"));
  }

  deleteOrders(id:number): Observable<boolean>{
    console.log(this.url + '/orders/' + id);
    return this.http.delete<boolean>(this.url + '/orders/' + id, {headers : this.authorized});
  }

  updateOrders(update: Order): Observable<Order>{
    return this.http.put<Order>(this.url + "/orders", JSON.stringify(update));
  } 


}
