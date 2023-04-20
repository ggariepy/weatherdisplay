export interface WeatherConditions {
    error: string,
    baromabsin: number 
    baromrelin: number
    batt_co2: number
    battout: number
    dailyrainin: number
    date: Date
    dateutc: number
    dewPoint: number
    dewPointin: number
    eventrainin: number
    feelsLike: number
    feelsLikein: number
    hourlyrainin: number
    humidity: number
    humidityin: number
    lastRain: Date
    maxdailygust: number
    monthlyrainin: number
    solarradiation: number
    tempf: number
    tempinf: number
    totalrainin: number
    tz: string
    uv: number
    weeklyrainin: number
    winddir: number
    windgustmph: number
    windspeedmph: number
}

export const initialState: WeatherConditions =
{
    error: "none",
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
    tz: "UTC",
    uv: 0,
    weeklyrainin: 0,
    winddir: 0,
    windgustmph: 0,
    windspeedmph: 0
};

