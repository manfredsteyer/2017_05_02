import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Flight } from "app/entities/flight";

@Component({
    selector: 'flight-card',
    templateUrl: './flight-card.component.html',
    styleUrls: ['./flight-card.component.css']
})

export class FlightCardComponent implements OnInit {
    constructor() { }

    @Input() item: Flight;
    @Input() selected: boolean;
    @Output() selectedChange = new EventEmitter<boolean>();
    
    select() {
        this.selected = true;
        this.selectedChange.next(this.selected);
    }

    deselect() {
        this.selected = false;
        this.selectedChange.next(this.selected);
    }

    ngOnInit() { }
}