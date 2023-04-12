import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { WeatherConditions } from 'src/app/state/state';

@Component({
  selector: 'app-sunlightmeter',
  templateUrl: './sunlightmeter.component.html',
  styleUrls: ['./sunlightmeter.component.css']
})
export class SunlightmeterComponent implements OnInit {
  solarRadiation$: Observable<number>;

  constructor(private store: Store<WeatherConditions>) {
    this.solarRadiation$ = this.store.select(x => x.solarradiation);
  }

  ngOnInit(): void {
  }
  
}
