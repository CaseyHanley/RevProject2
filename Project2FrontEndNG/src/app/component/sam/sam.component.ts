import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';


@Component({
  selector: 'app-sam',
  templateUrl: './sam.component.html',
  styleUrls: ['./sam.component.css']
})

export class SamComponent implements OnInit {
  order: OrderService;
  total: number = 0;

  constructor(order: OrderService) {
    this.order = order;
  }

  ngOnInit(): void {
  }

  remove(index: number): void{
    this.order.order.food.splice(index);
  }


}

