import { createReducer, on } from '@ngrx/store';
import { WeatherConditions, initialState } from '../state/state';
import { 
    getWeather,
    getWeatherSuccess,
    getWeatherFailed,
    updateInsideTemp,
    updateOutsideTemp
} from './actions';


export const WeatherReducer = createReducer
(   
    initialState,
    on(getWeatherSuccess, 
        (state, {weather}) => ( 
            state.rawData = "Hello, world!",
            state.tempf=weather.lastData.tempf, 
            state.tempinf=weather.lastData.tempinf))
);
