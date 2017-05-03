import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms";
import { FlightService } from "app/flight-booking/flight-search/flight.service";

@Directive({ 
    selector: 'input[city]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: CityValidationDirective,
            multi: true
        }
    ]
})
export class CityValidationDirective implements Validator {

    @Input() city: string;

    constructor(private flightService: FlightService) { }

    validate(c: AbstractControl): any {

        let city = c.value;

        if (!city) return { };

        let allowedCities = this.city.split(',');

        if (allowedCities.indexOf(city) > -1) {
            return { };
        }

        return {
            city: {
                actual: c.value,
                allowed: allowedCities,
                reason: 42
            }
        }
    

    }

}