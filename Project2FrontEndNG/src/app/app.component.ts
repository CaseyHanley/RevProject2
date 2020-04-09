import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pittsburgh | Vision Fine Dining';
  showText :boolean = true;

  showAbout(){
    this.showText = true ? false: true;
    // this.showText = !(this.showText);
  }

}
