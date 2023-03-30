import { weather } from '../models/wxmodel';

export interface WeatherState {
    weather: weather;
}

export const initialState:weather =
{
    outdoorTemp: 0,
    outdoorHumidity: 0,
    indoorTemp: 0,
    indoorHumidity: 0,
    windSpeed: 0,
    rainQuantity: 0,
    barometricPressure: 0,
    lightWattsMeterSquared: 0,
    uvIntensity: 0

};