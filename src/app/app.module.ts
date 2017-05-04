import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from "app/flight-booking/flight-search/flight-search.component";
import { FlightService } from "app/flight-booking/flight-search/flight.service";
import { BASE_URL } from "app/app.tokens";
import { CityPipe } from "app/shared/pipes/city.pipe";
import { FlightBookingModule } from "app/flight-booking/flight-booking.module";
import { AppRouterModule } from "app/app.routes";
import { HomeComponent } from "app/home/home.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FlightBookingModule,
    AppRouterModule
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [
    // Global
    //{ provide: FlightService, useClass: FlightService }
    // 
    {provide: BASE_URL, useValue: 'http://www.angular.at/api'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
