import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from '../models/Address';


@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  
  getAddresses(username: string): Observable<Address[]> {

    return this.http.get<Address[]>('http://localhost:8080/deliveryaddress/all/' + username);
  }

  getAddressbyUsername(username :string): Observable<Address> {

    return this.http.get<Address>('http://localhost:8080/deliveryaddress/' + username);
  }

  addAddress(add: Address): Observable<Address>{
    return this.http.post<Address>('http://localhost:8080/deliveryaddress/', add, {headers: this.headers}); 
  }

  deleteAddress(AddressId: string){
    return this.http.delete<Address>('http://localhost:8080/deliveryaddress/' + AddressId);
  }
    
  editAddress(edit: Address){
      return this.http.put<Address>('http://devhanley-bucket.s3-website.us-east-2.amazonaws.com/deliveryaddress/', edit, {headers: this.headers});

  }
 
}