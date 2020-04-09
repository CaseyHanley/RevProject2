import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sam',
  templateUrl: './sam.component.html',
  styleUrls: ['./sam.component.css']
})
export class SamComponent implements OnInit {
  orders: {name: string, price: number, description: string}[] = [
    {"name": "Lobster", price: 29.99, description:  "Proin suscipit aliquam ligula, a condimentum massa aliquet ut. Nam at cursus massa, nec sollicitudin nisi. Aenean in neque ullamcorper amet."},
    {"name": "Steak", price: 19.99, description:  "Curabitur in pretium erat, nec ultricies diam. Vivamus vitae nulla mattis, volutpat ante ut, gravida diam. Donec elementum a neque at metus."},
    {"name": "Caviar", price: 74.99, description:  "Ut lorem mauris, lacinia id lectus quis, blandit sodales metus. Duis quis arcu in libero bibendum porta sed ac mauris. Fusce nibh cras amet."},
    {"name": "Fancy Feast", price: 1.99, description:  "Duis id purus libero. Mauris non erat id orci pharetra ultrices. Duis tempus purus vitae pretium condimentum. Nullam ultricies nulla in sed."},
];

  total: number = 0;

  constructor() { 
    this.orders.forEach(element => {
      this.total +=  element.price;
      
    });
  }

  ngOnInit(): void {
  }


}

