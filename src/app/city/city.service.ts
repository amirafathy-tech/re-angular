import { Injectable } from '@angular/core';

import { City } from './city.model';

@Injectable()
export class CityService {

  private cities: City[] = [
    new City(
      'City 1',
      'City 1 Desc'),
      new City(
        'City 2',
        'City 2 Desc'),
        new City(
            'City 3',
            'City 3 Desc'),
  ];


  getCities() {
    return this.cities.slice();
  }

  getCity(index: number) {
    return this.cities[index];
  }


}
