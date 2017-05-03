import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { CityPipe } from "app/shared/pipes/city.pipe";
import { CityValidationDirective } from "app/shared/validation/city.validation.directive";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CityPipe,
        CityValidationDirective
    ],
    providers: [
    ],
    exports: [
        CityPipe,
        CityValidationDirective
    ]
})
export class SharedModule { }
