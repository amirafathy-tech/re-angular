


import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { City } from '../city.model';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent implements OnInit {
  cities: City[];

  constructor(private cityService: CityService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.cities = this.cityService.getCities();
  }

  onNewCity() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
