import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { Flight } from "app/entities/flight";

@Component({
    selector: 'flight-card',
    templateUrl: './flight-card.component.html',
    styleUrls: ['./flight-card.component.css']
})

export class FlightCardComponent implements OnInit, OnChanges {
    

    @Input() item: Flight;
    @Input() selected: boolean;
    @Output() selectedChange = new EventEmitter<boolean>();
    
    constructor() { 
        console.debug('ctor', this.item, this.selected);
    }

    ngOnInit() { 
        this.selectedChange.next(true);
        console.debug('init', this.item, this.selected);
    }

    ngOnChanges(changes) {
        console.debug('changes', this.item, this.selected);

        if (changes['item']) {
            console.debug('\t item');
        }
        if (changes['selected']) {
            console.debug('\t selected');
        }

    }

    select() {
        this.selected = true;
        this.selectedChange.next(this.selected);
    }

    deselect() {
        this.selected = false;
        this.selectedChange.next(this.selected);
    }

    
}