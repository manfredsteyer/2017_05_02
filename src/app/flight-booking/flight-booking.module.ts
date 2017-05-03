import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "app/shared/shared.module";
import { FlightSearchComponent } from "app/flight-booking/flight-search/flight-search.component";
import { FlightCardComponent } from "app/flight-booking/flight-search/flight-card.component";
import { CityValidationDirective } from "app/shared/validation/city.validation.directive";


@NgModule({
    imports: [
        CommonModule, FormsModule, SharedModule
    ],
    declarations: [
        FlightSearchComponent,
        FlightCardComponent
    ],
    providers: [
        /* FlightService */
    ],
    exports: [
        FlightSearchComponent
    ]
})
export class FlightBookingModule { }
