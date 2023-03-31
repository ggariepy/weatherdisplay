import { weather } from '../models/wxmodel';

export interface WeatherState {
    weather: weather;
}

export const initialState: weather =
{
    baromabsin: 0.0,
    baromrelin: 0.0,
    batt_co2: 0,
    battout: 0,
    dailyrainin: 0,
    date: new Date("1999-12-31T23:59:59.999Z"),
    dateutc: 0,
    dewPoint: 0,
    dewPointin: 0,
    eventrainin: 0,
    feelsLike: 0,
    feelsLikein: 0,
    hourlyrainin: 0,
    humidity: 0,
    humidityin: 0,
    lastRain: new Date("1999-12-31T23:59:59.999Z"),
    maxdailygust: 0,
    monthlyrainin: 0,
    solarradiation: 0,
    tempf: 0,
    tempinf: 0,
    totalrainin: 0,
    tz: "Outer Space",
    uv: 0,
    weeklyrainin: 0,
    winddir: 0,
    windgustmph: 0,
    windspeedmph: 0
};