import { createReducer, on } from '@ngrx/store';
import { WeatherConditions, initialState } from '../state/state';
import { 
    getWeather,
    getWeatherSuccess,
    getWeatherFailed,
    updateInsideTemp,
    updateOutsideTemp
} from './actions';
import { error } from 'console';


export const WeatherReducer = createReducer
(   
    initialState,
    on(getWeatherSuccess, (state, {weather}) => 
        (
            {
                ...state,
                error: 'none',
                baromabsin: weather[0].lastData.baromabsin,
                baromrelin: weather[0].lastData.baromrelin,
                batt_co2: weather[0].lastData.batt_co2,
                battout: weather[0].lastData.battout,
                dailyrainin: weather[0].lastData.dailyrainin,
                date: weather[0].lastData.date,
                dateutc: weather[0].lastData.dateutc,
                dewPoint: weather[0].lastData.dewPoint,
                dewPointin: weather[0].lastData.dewPointin,
                eventrainin: weather[0].lastData.eventrainin,
                feelsLike: weather[0].lastData.feelsLike,
                feelsLikein: weather[0].lastData.feelsLikein,
                hourlyrainin: weather[0].lastData.hourlyrainin,
                humidity: weather[0].lastData.humidity,
                humidityin: weather[0].lastData.humidityin,
                lastRain: weather[0].lastData.lastRain,
                maxdailygust: weather[0].lastData.maxdailygust,
                monthlyrainin: weather[0].lastData.monthlyrainin,
                solarradiation: weather[0].lastData.solarradiation,
                tempf: weather[0].lastData.tempf,
                tempinf: weather[0].lastData.tempinf,
                totalrainin: weather[0].lastData.totalrainin,
                tz: weather[0].lastData.tz,
                uv: weather[0].lastData.uv,
                weeklyrainin: weather[0].lastData.weeklyrainin,
                winddir: weather[0].lastData.winddir,
                windgustmph: weather[0].lastData.windgustmph,
                windspeedmph: weather[0].lastData.windspeedmph
            }
        )
    ),
    on(getWeatherFailed, (state, {error}) =>
        (
            {
                ...state,
                error: error
            }
        )
    ),
);
