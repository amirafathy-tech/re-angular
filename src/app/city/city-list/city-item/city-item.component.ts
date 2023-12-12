
import { Component, OnInit, Input } from '@angular/core';

import { City } from '../../city.model';

@Component({
  selector: 'app-city-item',
  templateUrl: './city-item.component.html',
  styleUrl: './city-item.component.css'
})
export class CityItemComponent implements OnInit {
  @Input() city: City;
  @Input() index: number;

  ngOnInit() {
  }
}

