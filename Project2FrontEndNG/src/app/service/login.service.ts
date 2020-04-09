import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  private headers = new HttpHeaders({'Content-Type' : 'application/json'});

  printHello(){
    console.log("Hello World")
  }
}
