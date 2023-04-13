import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { WeatherConditions } from 'src/app/state/state';

@Component({
  selector: 'app-chronometer',
  templateUrl: './chronometer.component.html',
  styleUrls: ['./chronometer.component.css']
})
export class ChronometerComponent {
  lastUpdate$: Observable<Date>;

  constructor(private store: Store<WeatherConditions>) {
    this.lastUpdate$ = this.store.select("date");
  }
}
