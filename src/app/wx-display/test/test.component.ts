import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { WeatherConditions } from 'src/app/state/state';
import { selectBaromABSIn } from 'src/app/state/selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  rawData$: Observable<number>;

  constructor(private store: Store<WeatherConditions>) {
    this.rawData$ = this.store.select(selectBaromABSIn);
    // this.rawData$ = this.store.select('baromabsin');
  }
}
