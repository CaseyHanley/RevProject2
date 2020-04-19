import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from '../models/MenuItem';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  private authorized = new HttpHeaders({'authorized':'pa$$word'});

  constructor(private http: HttpClient) { }
  
    private headers = new HttpHeaders({'Content-Type':'application/json'});

    // private url = 'http://devhanley-bucket.s3-website.us-east-2.amazonaws.com';
    private url = 'http://localhost:8080';

    getMenuItems(): Observable<MenuItem[]>{
      return this.http.get<MenuItem[]>(this.url + '/menuitems');
    }

    addMenuItem(newItem: MenuItem): Observable<MenuItem>{
      return this.http.post<MenuItem>(this.url + "/menuitems", newItem);
    }

    deleteMenuItem(deleteItem: String): Observable<MenuItem>{
      return this.http.delete<MenuItem>(this.url + "/menuitems/" + deleteItem, {headers: this.authorized});
    }
}
