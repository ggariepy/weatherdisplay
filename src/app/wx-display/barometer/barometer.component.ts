import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { WeatherConditions } from 'src/app/state/state';
import { selectBaromABSIn, selectBaromRelIn } from 'src/app/state/selectors';
@Component({
  selector: 'app-barometer',
  templateUrl: './barometer.component.html',
  styleUrls: ['./barometer.component.css']
})
export class BarometerComponent {
  relPressure$: Observable<number>;
  absPressure$: Observable<number>;

  constructor(private store: Store<WeatherConditions>) {
    this.relPressure$ = this.store.select(selectBaromRelIn);
    this.absPressure$ = this.store.select(selectBaromABSIn);
  }
}