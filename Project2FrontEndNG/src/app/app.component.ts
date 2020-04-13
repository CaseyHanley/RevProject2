import { Component } from '@angular/core';
import { Order } from './Models/Order'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Pittsburgh | Good Eats Fine Dining';
  public order: Order;

  showText: boolean = true;

  showAbout(){
    this.showText = true;
  }

  showPage(){
    this.showText = false;
  }


}
