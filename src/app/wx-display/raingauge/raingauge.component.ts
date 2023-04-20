import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { WeatherConditions } from 'src/app/state/state';
import {
  selectDailyRainInches,
  selectMonthlyRainInches,
  selectLastRainDate,
  selectWeeklyRainInches,
  selectTotalRainInches,
  selectEventRainInches
} from 'src/app/state/selectors';


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
    this.dailyRainInches$ = this.store.select(selectDailyRainInches); 
    this.eventRainInches$ = this.store.select(selectEventRainInches);
    this.lastRainDate$ = this.store.select(selectLastRainDate);
    this.weeklyRainInches$ = this.store.select(selectWeeklyRainInches);
    this.monthlyRainInches$ = this.store.select(selectMonthlyRainInches);
    this.totalRainInches$ = this.store.select(selectTotalRainInches);
  }
}