import { Component, OnInit } from '@angular/core';
import { Flight } from "app/entities/flight";
import { Http, URLSearchParams, Headers } from "@angular/http";
import { FlightService } from "app/flight-booking/flight-search/flight.service";
import { Observable, Observer } from "rxjs";

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html',
    styleUrls: ['./flight-search.component.css'],
    providers: [FlightService]
})
export class FlightSearchComponent implements OnInit {
    
    constructor(private flightService: FlightService) { 
    }

message: string = "";
    validate() {
        if (
            this.from == 'Graz' 
            || this.from == 'Zürich' 
            || this.from == 'Hamburg') {

                this.message = "Des geht!";

            }
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

    search(): Observable<Flight[]> {

        if (!this.from || !this.to) {
            return Observable.throw('from and to expected!');
        }

        let result: Observable<Flight[]> = Observable.create((sender: Observer<Flight[]>) => {
            this
                .flightService
                .find(this.from, this.to)
                .subscribe(
                    flights => {
                        this.flights = flights;
                        sender.next(flights);
                        sender.complete();
                    },
                    err => {
                        console.error('Fehler beim Laden', err);
                        sender.error(err);
                        sender.complete();
                    }
                );

            });

            result.publish().connect();

            return result;
}
    
    select(f: Flight): void {
        this.selectedFlight = f;
    }

    ngOnInit() { }
}
