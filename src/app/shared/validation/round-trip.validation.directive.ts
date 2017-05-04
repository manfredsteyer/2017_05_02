import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, FormGroup } from "@angular/forms";
import { FlightService } from "app/flight-booking/flight-search/flight.service";

@Directive({ 
    selector: 'form[roundTrip]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: RoundTripValidationDirective,
            multi: true
        }
    ]
})
export class RoundTripValidationDirective implements Validator {


    constructor() { }

    validate(c: AbstractControl): any {

        let group = c as FormGroup;

        let fromCtrl = group.controls['from'];
        let toCtrl = group.controls['to'];

        if (!fromCtrl || !toCtrl) {
            return { };
        }

        if (fromCtrl.value == toCtrl.value) {
            return { roundTrip: true };
        }

        return { };
    }

}