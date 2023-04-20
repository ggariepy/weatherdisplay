import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { WeatherConditions } from 'src/app/state/state';
import {  
  selectIndoorHumidity,
  selectIndoorFeelsLikeTemp,
  selectOutdoorTemp,
  selectOutdoorHumidity,
  selectOutdoorFeelsLikeTemp,
  selectIndoorTemp
} from 'src/app/state/selectors';


@Component({
  selector: 'app-thermometer',
  templateUrl: './thermometer.component.html',
  styleUrls: ['./thermometer.component.css']
})
export class ThermometerComponent {
  outdoorTemp$: Observable<number>;
  outdoorRelHumidity$: Observable<number>;
  outdoorFeelsLikeTemp$: Observable<number>;
  indoorTemp$: Observable<number>;
  indoorRelHumidity$: Observable<number>;
  indoorFeelsLikeTemp$: Observable<number>;

  constructor(private store: Store<WeatherConditions>) {
    this.outdoorTemp$ = this.store.select(selectOutdoorTemp);
    this.outdoorRelHumidity$ = this.store.select(selectOutdoorHumidity);
    this.outdoorFeelsLikeTemp$ = this.store.select(selectOutdoorFeelsLikeTemp);
    this.indoorTemp$ = this.store.select(selectIndoorTemp);
    this.indoorRelHumidity$ = this.store.select(selectIndoorHumidity);
    this.indoorFeelsLikeTemp$ = this.store.select(selectIndoorFeelsLikeTemp);
  }
}