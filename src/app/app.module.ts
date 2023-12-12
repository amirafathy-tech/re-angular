
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CityListComponent } from './city/city-list/city-list.component';
import { CityItemComponent } from './city/city-list/city-item/city-item.component';

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
    HeaderComponent,
    CityListComponent,
    CityItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
 
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

