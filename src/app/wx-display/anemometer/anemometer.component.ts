import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { WeatherConditions } from 'src/app/state/state';

@Component({
  selector: 'app-anemometer',
  templateUrl: './anemometer.component.html',
  styleUrls: ['./anemometer.component.css']
})
export class AnemometerComponent implements OnInit {
  windSpeedMPH$: Observable<number>;
  windGustMPH$: Observable<number>;
  windDirection$: Observable<number>;

  constructor(private store: Store<WeatherConditions>) {
    this.windSpeedMPH$ = this.store.select(x => x.windspeedmph);
    this.windGustMPH$ = this.store.select(x => x.windgustmph);
    this.windDirection$ = this.store.select(x => x.winddir);
  }

  ngOnInit(): void {
  }

}
