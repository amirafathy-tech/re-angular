import { Component, OnInit } from '@angular/core';
import { CityService } from './city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.css',
  providers: [CityService]
})
export class CityComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {

  }

}
