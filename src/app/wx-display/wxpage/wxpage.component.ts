import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { WeatherConditions } from 'src/app/state/state';
import { getWeather } from 'src/app/state/actions';

@Component({
  selector: 'app-wxpage',
  templateUrl: './wxpage.component.html',
  styleUrls: ['./wxpage.component.css']
})
export class WxpageComponent implements OnInit {
  constructor(private store: Store<WeatherConditions>) {
  }

  ngOnInit(): void {
    console.log('wxpage dispatching getWeather()');
    this.store.dispatch(getWeather());
    console.log('wxpage finished dispatching getWeather()');
  }
}
