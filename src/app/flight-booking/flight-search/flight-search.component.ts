import { Component, OnInit } from '@angular/core';
import { Flight } from "app/entities/flight";
import { Http, URLSearchParams, Headers } from "@angular/http";
import { FlightService } from "app/flight-booking/flight-search/flight.service";

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html',
    styleUrls: ['./flight-search.component.css'],
    providers: [FlightService]
})
export class FlightSearchComponent implements OnInit {
    
    constructor(private flightService: FlightService) { 
    }

    allowedCities = 'Graz,Nürnberg,Hamburg';

    basket: any = {
        "3": true,
        "4": false,
        "5": true
    };

    from: string;
    to: string;

    flights: Array<Flight> = [];
    selectedFlight: Flight;

    search(): void {

        this
            .flightService
            .find(this.from, this.to)
            .subscribe(
                flights => {
                    this.flights = flights;
                },
                err => {
                    console.error('Fehler beim Laden', err);
                }
            );

    }
    
    select(f: Flight): void {
        this.selectedFlight = f;
    }

    ngOnInit() { }
}
