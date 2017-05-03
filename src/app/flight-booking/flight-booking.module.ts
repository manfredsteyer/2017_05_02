import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "app/shared/shared.module";
import { FlightSearchComponent } from "app/flight-booking/flight-search/flight-search.component";


@NgModule({
    imports: [
        CommonModule, FormsModule, SharedModule
    ],
    declarations: [
        FlightSearchComponent
    ],
    providers: [
        /* FlightService */
    ],
    exports: [
        FlightSearchComponent
    ]
})
export class FlightBookingModule { }
