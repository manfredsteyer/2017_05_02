
import { Routes, RouterModule } from "@angular/router";
import { FlightSearchComponent } from "app/flight-booking/flight-search/flight-search.component";
import { PassengerSearchComponent } from "app/flight-booking/passenger-search/passenger-search.component";
import { FlightEditComponent } from "app/flight-booking/flight-edit/flight-edit.component";

const FLIGHT_BOOKING_ROUTES: Routes = [
    {
        path: 'flight-search',
        component: FlightSearchComponent
    },
    {
        path: 'passenger-search',
        component: PassengerSearchComponent
    },
    {
        path: 'flight-edit/:id',
        component: FlightEditComponent
    }

];

export const FlightBookingRouterModule 
                = RouterModule.forChild(FLIGHT_BOOKING_ROUTES);