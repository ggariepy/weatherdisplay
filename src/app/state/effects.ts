import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, EMPTY } from 'rxjs';
import { WxDataService } from 'src/app/api/wxdata.service';
import {getWeather, getWeatherSuccess} from '../state/actions';

@Injectable()
export class WeatherEffects {
  constructor(
    private actions$: Actions,
    private weatherService: WxDataService
  ) {}

  loadWeather$ = createEffect(
      () => this.actions$.pipe(
        ofType(getWeather),
          exhaustMap(() => this.weatherService.getCurrentConditions()
            .pipe(
              map(wx => getWeatherSuccess({weather: wx})),
              catchError(() => EMPTY)
            )
          )
      ) 
  )
}