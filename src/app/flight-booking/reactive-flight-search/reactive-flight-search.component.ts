import { Component, OnInit } from '@angular/core';
import { Flight } from "app/entities/flight";
import { Http, URLSearchParams, Headers } from "@angular/http";
import { FlightService } from "app/flight-booking/flight-search/flight.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'reactive-flight-search',
    templateUrl: './reactive-flight-search.component.html',
    styleUrls: ['./reactive-flight-search.component.css'],
    providers: [FlightService]
})
export class ReactiveFlightSearchComponent implements OnInit {
    
    constructor(
        private flightService: FlightService,
        private fb: FormBuilder) { 

            this.filter = fb.group({
                from: ['Graz', Validators.required],
                to: ['Hamburg', Validators.required]
            })
    }

message: string = "";

    allowedCities = 'Graz,Nürnberg,Hamburg';

    basket: any = {
        "3": true,
        "4": false,
        "5": true
    };



    filter: FormGroup;

    flights: Array<Flight> = [];
    selectedFlight: Flight;

    search(): void {

        // this.filter.controls['from'].value;
        // this.filter.controls['to'].value;

        let value = this.filter.value;

        this
            .flightService
            .find(value.from, value.to)
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
