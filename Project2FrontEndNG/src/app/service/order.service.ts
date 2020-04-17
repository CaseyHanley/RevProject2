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
    console.log(this.url + '/order/' + sessionStorage.getItem("username"));
    return this.http.get<Order>(this.url + '/order/' + sessionStorage.getItem("username"));
  }

  deleteOrders(id:number): Observable<boolean>{
    console.log(this.url + '/order/' + id);
    return this.http.delete<boolean>(this.url + '/order/' + id, {headers : this.authorized});
  }

  addOrders(add: Order): Observable<Order>{
    return this.http.post<Order>(this.url + '/order/', add ,{headers : this.headers});
  } 

  updateOrders(update: Order): Observable<Order>{
    return this.http.put<Order>(this.url + '/order', update, {headers : this.headers});
  } 


}
