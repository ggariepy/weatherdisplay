import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, catchError, exhaustMap, map, EMPTY } from 'rxjs';
import { WxDataService } from 'src/app/api/wxdata.service';
import { WeatherConditions } from './state';
import {getWeather, getWeatherFailed, getWeatherSuccess} from '../state/actions';
import { create } from 'domain';

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