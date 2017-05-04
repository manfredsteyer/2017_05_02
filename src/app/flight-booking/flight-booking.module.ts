import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "app/shared/shared.module";
import { FlightSearchComponent } from "app/flight-booking/flight-search/flight-search.component";
import { FlightCardComponent } from "app/flight-booking/flight-search/flight-card.component";
import { CityValidationDirective } from "app/shared/validation/city.validation.directive";
import { ReactiveFlightSearchComponent } from "app/flight-booking/reactive-flight-search/reactive-flight-search.component";


@NgModule({
    imports: [
        CommonModule, 
        FormsModule, 
        SharedModule,
        ReactiveFormsModule 
    ],
    declarations: [
        FlightSearchComponent,
        FlightCardComponent,
        ReactiveFlightSearchComponent
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
