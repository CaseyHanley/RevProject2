import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { DeliveryDriver } from '../models/DeliveryDriver';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  // private url = 'http://devhanley-bucket.s3-website.us-east-2.amazonaws.com';

  private url ='http://localhost:8080';
  constructor(private http: HttpClient) { }

  addDriver(driver: DeliveryDriver): Observable<DeliveryDriver>{
    return this.http.post<DeliveryDriver>(this.url + '/drivers', driver ,{headers : this.headers});
  }
  getDriver(): Observable<DeliveryDriver>{
    return this.http.get<DeliveryDriver>(this.url+ '/drivers/'+sessionStorage.getItem("username"));

  }

  deleteDriver(id:number): Observable<boolean>{
    return this.http.delete<boolean>(this.url + '/drivers/' + id);
  }
}
