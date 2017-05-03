import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { CityPipe } from "app/shared/pipes/city.pipe";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CityPipe
    ],
    providers: [
    ],
    exports: [
        CityPipe
    ]
})
export class SharedModule { }
