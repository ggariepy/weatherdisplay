import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { WeatherConditions } from 'src/app/state/state';
import { updateOutsideTemp, updateInsideTemp } from '../../state/actions';

@Component({
  selector: 'app-thermometer',
  templateUrl: './thermometer.component.html',
  styleUrls: ['./thermometer.component.css']
})
export class ThermometerComponent implements OnInit{
  outdoorTemp$: Observable<number>;
  outdoorRelHumidity$: Observable<number>;
  outdoorFeelsLikeTemp$: Observable<number>;
  indoorTemp$: Observable<number>;
  indoorRelHumidity$: Observable<number>;
  indoorFeelsLikeTemp$: Observable<number>;

  constructor(private store: Store<WeatherConditions>) {
    this.outdoorTemp$ = this.store.select(x => x.tempf);
    this.outdoorRelHumidity$ = this.store.select(x => x.humidity);
    this.outdoorFeelsLikeTemp$ = this.store.select(x => x.feelsLike);
    this.indoorTemp$ = this.store.select(x => x.tempinf);
    this.indoorRelHumidity$ = this.store.select(x => x.humidityin);
    this.indoorFeelsLikeTemp$ = this.store.select(x => x.feelsLikein);
  }

  ngOnInit(): void {
  }
}