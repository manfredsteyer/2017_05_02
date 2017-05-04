import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";
import { FlightSearchComponent } from "app/flight-booking/flight-search/flight-search.component";
import { PassengerSearchComponent } from "app/flight-booking/passenger-search/passenger-search.component";

const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

export let AppRouterModule = RouterModule.forRoot(APP_ROUTES);