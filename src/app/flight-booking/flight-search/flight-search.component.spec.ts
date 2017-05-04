import { TestBed, async } from '@angular/core/testing';
import { FlightBookingModule } from "app/flight-booking/flight-booking.module";
import { HttpModule } from "@angular/http";
import { BASE_URL } from "app/app.tokens";
import { FlightSearchComponent } from "app/flight-booking/flight-search/flight-search.component";

import 'rxjs/add/operator/map';
import { Observable } from "rxjs";
import { Flight } from "app/entities/flight";
import { FlightService } from "app/flight-booking/flight-search/flight.service";

let mockFlightService = {
  find(from: string, to: string): Observable<Flight[]> {
    return Observable.of([
      { id: 4711, from: 'Nürnberg', to: 'Amberg', date: '2017-12-24T17:00:00+01:00'}
    ]);
  }
}

describe('FlightSearchComponent', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        FlightBookingModule,
        HttpModule
      ],
      declarations: [
      ],
      providers: [
        { provide: BASE_URL, useValue: 'http://www.angular.at/api'}
      ]
    }).compileComponents();

    TestBed.overrideComponent(FlightSearchComponent, {
      set: {
        providers: [
          { provide: FlightService, useValue: mockFlightService }
        ]
      }
    }).compileComponents();


  }));

  it('should have an undef selectedFlight initially', () => {
  
    let fixture = TestBed.createComponent(FlightSearchComponent);

    // fixture.nativeElement; // DOM
    // fixture.debugElement; // Wrapper für DOM

    let comp = fixture.componentInstance;
    expect(comp.selectedFlight).toBeUndefined();

  });

  it('should have no flights initially', () => {
  
    let fixture = TestBed.createComponent(FlightSearchComponent);

    // fixture.nativeElement; // DOM
    // fixture.debugElement; // Wrapper für DOM

    let comp = fixture.componentInstance;
    expect(comp.flights.length).toBe(0);

  });


  it('should load no flights without from and to', async(() => {
  
    let fixture = TestBed.createComponent(FlightSearchComponent);

    let comp = fixture.componentInstance;

    comp.from = '';
    comp.to = '';
    comp.search()
      .subscribe(
        (result) => {
          console.debug('result', result);
          fail();
        },
        (err) => {
          console.debug('err', err);
        }
      )

  }));


  it('should load flights from and to', async(() => {
  
    let fixture = TestBed.createComponent(FlightSearchComponent);

    let comp = fixture.componentInstance;

    comp.from = 'Hamburg';
    comp.to = 'Graz';
    comp.search()
      .subscribe(
        (result) => {
          console.debug('result', result);
          expect(result.length).toBe(1);
          expect(result[0].from).toBe('Nürnberg');
          expect(result[0].to).toBe('Amberg');
        },
        (err) => {
          console.debug('err', err);
          fail();
        }
      )

  }));



});
