import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {  WeatherConditions } from 'src/app/state/state';
import {
  selectWindSpeedMPH, 
  selectWindGustMPH,
  selectWindDirection,
  selectWindGustMAXMPH
}  from 'src/app/state/selectors';


@Component({
  selector: 'app-anemometer',
  templateUrl: './anemometer.component.html',
  styleUrls: ['./anemometer.component.css']
})
export class AnemometerComponent {
  windSpeedMPH$: Observable<number>;
  windGustMPH$: Observable<number>;
  windDirection$: Observable<number>;
  windGustMAXMPH$: Observable<number>;
  
  constructor(private store: Store<WeatherConditions>) {
    this.windSpeedMPH$ = this.store.select(selectWindSpeedMPH);
    this.windGustMPH$ = this.store.select(selectWindGustMPH);
    this.windGustMAXMPH$ = this.store.select(selectWindGustMAXMPH);
    this.windDirection$ = this.store.select(selectWindDirection);
  }
}