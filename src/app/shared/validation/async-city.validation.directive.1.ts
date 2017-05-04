import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, FormGroup, NG_ASYNC_VALIDATORS } from "@angular/forms";
import { FlightService } from "app/flight-booking/flight-search/flight.service";
import { Observable } from "rxjs/Observable";

@Directive({ 
    selector: 'input[asyncCity]',
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            useExisting: AsyncCityValidationDirective,
            multi: true
        }
    ]
})
export class AsyncCityValidationDirective implements Validator {


    constructor() { }

    validate(c: AbstractControl): Observable<any> {
        return Observable.create( (sender) => {

            setTimeout(() => {
                if (c.value == 'Graz' || c.value == 'Hamburg') {
                    sender.next({});
                }
                else {
                    sender.next({asyncCity: true});
                }
                sender.complete();
            }, 7000);

        } )
    }

}