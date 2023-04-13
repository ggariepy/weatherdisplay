import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { WeatherConditions } from 'src/app/state/state';

@Component({
  selector: 'app-raingauge',
  templateUrl: './raingauge.component.html',
  styleUrls: ['./raingauge.component.css']
})
export class RaingaugeComponent {
  lastRainDate$: Observable<Date>;
  dailyRainInches$: Observable<number>;
  weeklyRainInches$: Observable<number>;
  monthlyRainInches$: Observable<number>;
  totalRainInches$: Observable<number>;
  eventRainInches$: Observable<number>;

  constructor(private store: Store<WeatherConditions>) {
    this.dailyRainInches$ = this.store.select("dailyrainin"); 
    this.eventRainInches$ = this.store.select("eventrainin");
    this.lastRainDate$ = this.store.select("lastRain");
    this.weeklyRainInches$ = this.store.select("weeklyrainin");
    this.monthlyRainInches$ = this.store.select("monthlyrainin");
    this.totalRainInches$ = this.store.select("totalrainin");
  }
}