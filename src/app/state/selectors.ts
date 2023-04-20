import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WeatherConditions } from './state';

/*** Feature Selector ***/
export const selectWeatherFeature = 
    createFeatureSelector<WeatherConditions>('weather');

/*** Barometric Pressure Selectors ***/
export const selectBaromABSIn =
    createSelector(
        selectWeatherFeature,
        (state: WeatherConditions) => state.baromabsin
);

export const selectBaromRelIn =
    createSelector(
        selectWeatherFeature,
        (state: WeatherConditions) => state.baromrelin
);


/*** Anemometor Selectors ***/
export const selectWindSpeedMPH =
        createSelector(
            selectWeatherFeature,
            (state: WeatherConditions) => state.windspeedmph
);

export const selectWindGustMPH =
        createSelector(
            selectWeatherFeature,
            (state: WeatherConditions) => state.windgustmph
);

export const selectWindDirection =
        createSelector(
            selectWeatherFeature,
            (state: WeatherConditions) => state.winddir
);

export const selectWindGustMAXMPH =
        createSelector(
            selectWeatherFeature,
            (state: WeatherConditions) => state.maxdailygust
);

export const selectLastUpdate =
        createSelector(
            selectWeatherFeature,
            (state: WeatherConditions) => state.date
);

/*** Rain gauge selectors ***/
export const selectDailyRainInches =
        createSelector(
            selectWeatherFeature,
            (state: WeatherConditions) => state.dailyrainin
);

export const selectEventRainInches =
        createSelector(
            selectWeatherFeature,
            (state: WeatherConditions) => state.eventrainin
);

export const selectLastRainDate =
        createSelector(
            selectWeatherFeature,
            (state: WeatherConditions) => state.lastRain
);

export const selectWeeklyRainInches =
        createSelector(
            selectWeatherFeature,
            (state: WeatherConditions) => state.weeklyrainin
);

export const selectMonthlyRainInches =
        createSelector(
            selectWeatherFeature,
            (state: WeatherConditions) => state.monthlyrainin
);

export const selectTotalRainInches =
        createSelector(
            selectWeatherFeature,
            (state: WeatherConditions) => state.totalrainin
);

/*** Sunlight meter selectors ***/
export const selectSolarRadiation =
        createSelector(
            selectWeatherFeature,
            (state: WeatherConditions) => state.solarradiation
);

export const selectUVRadiation =
        createSelector(
            selectWeatherFeature,
            (state: WeatherConditions) => state.uv
);

/*** Temperature selectors ***/
export const selectOutdoorTemp =
        createSelector(
            selectWeatherFeature,
            (state:WeatherConditions) => state.tempf
);

export const selectIndoorTemp =
        createSelector(
            selectWeatherFeature,
            (state:WeatherConditions) => state.tempinf
);

export const selectIndoorFeelsLikeTemp =
        createSelector(
            selectWeatherFeature,
            (state:WeatherConditions) => state.feelsLikein
);

export const selectOutdoorFeelsLikeTemp =
        createSelector(
            selectWeatherFeature,
            (state:WeatherConditions) => state.feelsLike
);

export const selectIndoorHumidity =
        createSelector(
            selectWeatherFeature,
            (state:WeatherConditions) => state.humidityin
);

export const selectOutdoorHumidity =
        createSelector(
            selectWeatherFeature,
            (state:WeatherConditions) => state.humidity
);