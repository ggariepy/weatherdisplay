import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { WeatherConditions } from 'src/app/state/state';

@Component({
  selector: 'app-raingauge',
  templateUrl: './raingauge.component.html',
  styleUrls: ['./raingauge.component.css']
})
export class RaingaugeComponent implements OnInit {
  lastRainDate$: Observable<Date>;
  dailyRainInches$: Observable<number>;
  weeklyRainInches$: Observable<number>;
  monthlyRainInches$: Observable<number>;
  totalRainInches$: Observable<number>;
  eventRainInches$: Observable<number>;


  constructor(private store: Store<WeatherConditions>) {
    this.dailyRainInches$ = this.store.select(x => x.dailyrainin); 
    this.eventRainInches$ = this.store.select(x => x.eventrainin);
    this.lastRainDate$ = this.store.select(x => x.lastRain);
    this.weeklyRainInches$ = this.store.select(x => x.weeklyrainin);
    this.monthlyRainInches$ = this.store.select(x => x.monthlyrainin);
    this.totalRainInches$ = this.store.select(x => x.totalrainin);
  }

  ngOnInit(): void {
  }
  
}
