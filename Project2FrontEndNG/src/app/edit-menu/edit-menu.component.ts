import { Component, OnInit } from '@angular/core';
import { MenuItemService } from '../service/menu-item.service';
import { MenuItem } from '../models/MenuItem';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent implements OnInit {

  service: MenuItemService

  name: String;
  price: number;
  description: String;

  constructor(service: MenuItemService) {
    this.service = service;
   }

  ngOnInit(): void {
  }

  addItem(): void {
    this.service.addMenuItem(new MenuItem(this.description, this.name, this.price)).subscribe(
      (response) => {
        console.log("success");
      },
      (response) => {
        console.log("failure");
      }
    )
  }
  deleteItem(): void{
    this.service.deleteMenuItem(this.name).subscribe(
      (response) => {
        console.log("success");
      },
      (response) => {
        console.log("failure");
      }
    )
  }

}
