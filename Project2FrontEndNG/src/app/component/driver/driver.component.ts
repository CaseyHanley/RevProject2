import { Component, OnInit } from '@angular/core';
import { DriverService } from 'src/app/service/driver.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  constructor(private driver : DriverService, private router:Router) { }

  ngOnInit(): void {
  }
  
  driverUsername: string;
  ousername :string;
  oid :number;

}
