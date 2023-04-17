import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select} from '@ngrx/store';
import { WeatherConditions } from 'src/app/state/state';
import { updateOutsideTemp, updateInsideTemp } from '../../state/actions';

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
    this.outdoorTemp$ = this.store.select("tempf");
    this.outdoorRelHumidity$ = this.store.select("humidity");
    this.outdoorFeelsLikeTemp$ = this.store.select("feelsLike");
    this.indoorTemp$ = this.store.select("tempinf");
    this.indoorRelHumidity$ = this.store.select("humidityin");
    this.indoorFeelsLikeTemp$ = this.store.select("feelsLikein");
  }

  ngOnInit(): void {
    this.store.dispatch(updateInsideTemp());
    // setInterval(() => this.store.dispatch(getWeather()), 60000);
  }
}