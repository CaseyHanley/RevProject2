import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address} from '../models/Address'

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  
  getAddresses(uid : number): Observable<Address[]> {

    return this.http.get<Address[]>('http://localhost:8080/deliveryaddress/' + uid);
  }

  addAddress(add: Address): Observable<Address>{
    return this.http.post<Address>('http://localhost:8080/deliveryaddress/', add, {headers: this.headers}); 
  }

  deleteAddress(AddressId: string){
    return this.http.delete<Address>('http://localhost:8080/deliveryaddress/' + AddressId);
  }
    
  editAddress(edit: Address){
      return this.http.put<Address>('http://localhost:8080/deliveryaddress/', edit, {headers: this.headers});

  }
 
}