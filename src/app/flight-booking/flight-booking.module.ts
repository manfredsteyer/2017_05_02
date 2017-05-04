import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "app/shared/shared.module";
import { FlightSearchComponent } from "app/flight-booking/flight-search/flight-search.component";
import { FlightCardComponent } from "app/flight-booking/flight-search/flight-card.component";
import { CityValidationDirective } from "app/shared/validation/city.validation.directive";
import { ReactiveFlightSearchComponent } from "app/flight-booking/reactive-flight-search/reactive-flight-search.component";
import { FlightBookingRouterModule } from "app/flight-booking/flight-booking.routes";
import { PassengerSearchComponent } from "app/flight-booking/passenger-search/passenger-search.component";
import { FlightEditComponent } from "app/flight-booking/flight-edit/flight-edit.component";


@NgModule({
    imports: [
        CommonModule, 
        FormsModule, 
        SharedModule,
        ReactiveFormsModule,
        FlightBookingRouterModule
    ],
    declarations: [
        FlightSearchComponent,
        FlightCardComponent,
        ReactiveFlightSearchComponent,
        PassengerSearchComponent,
        FlightEditComponent
    ],
    providers: [
        /* FlightService */
    ],
    exports: [
        FlightSearchComponent,
        ReactiveFlightSearchComponent
    ]
})
export class FlightBookingModule { }
