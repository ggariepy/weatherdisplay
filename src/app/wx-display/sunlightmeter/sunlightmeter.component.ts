import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { WeatherConditions } from 'src/app/state/state';

enum UVRadiation{
  Low,
  Moderate,
  High,
  VeryHigh,
  Extreme
}

@Component({
  selector: 'app-sunlightmeter',
  templateUrl: './sunlightmeter.component.html',
  styleUrls: ['./sunlightmeter.component.css']
})
export class SunlightmeterComponent {
  solarRadiation$: Observable<number>;
  uvRadiation$: Observable<number>;

  constructor(private store: Store<WeatherConditions>) {
    this.solarRadiation$ = this.store.select("solarradiation");
    this.uvRadiation$ = this.store.select("uv");
  }
}