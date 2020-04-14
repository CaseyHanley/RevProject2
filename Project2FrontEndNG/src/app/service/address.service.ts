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
    //Needs Correct URL
    return this.http.get<Address[]>('urlforaddress/' + uid);
  }

  addAddress(add: Address): Observable<Address>{
    return this.http.post<Address>('urlforaddress/', add, {headers: this.headers}); 
  }

  deleteAddress(AddressId: string){
    return this.http.delete<Address>('urlforaddress/' + AddressId);
  }
    
  editAddress(edit: Address){
      return this.http.post<Address>('urlforeditaddress/', edit, {headers: this.headers});

  }
 
}