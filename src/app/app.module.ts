import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CityComponent } from './city/city.component';
import { CompanyComponent } from './company/company.component';
import { UnitsComponent } from './units/units.component';
import { UnitViewComponent } from './units/unit-view/unit-view.component';
import { UnitStatusComponent } from './units/unit-status/unit-status.component';
import { UnitFloorComponent } from './units/unit-floor/unit-floor.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CityComponent,
    CompanyComponent,
    UnitsComponent,
    UnitViewComponent,
    UnitStatusComponent,
    UnitFloorComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
