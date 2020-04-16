import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from '../Models/MenuItem';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  constructor(private http: HttpClient) { }
  
    private headers = new HttpHeaders({'Content-Type':'application/json'});

    private url = 'http://localhost:4200';

    getMenuItems(): Observable<MenuItem[]>{
      return this.http.get<MenuItem[]>(this.url + '/menuitems');
    }
}
