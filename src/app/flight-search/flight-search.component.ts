import { Component, OnInit } from '@angular/core';
import { Flight } from "app/entities/flight";
import { Http, URLSearchParams, Headers } from "@angular/http";

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html'
})
export class FlightSearchComponent implements OnInit {
    
    //private http: Http;

    constructor(private http: Http) { 
        //this.http = http;
    }

    from: string;
    to: string;

    flights: Array<Flight> = [];
    selectedFlight: Flight;

    search(): void {

        let headers = new Headers();
        headers.set('Accept', 'application/json');

        let search = new URLSearchParams();
        search.set('from', this.from);
        search.set('to', this.to);

        let url = 'http://www.angular.at/api/flight';

        this.http
            .get(url, {  headers, search})
            .map(resp => resp.json())
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
