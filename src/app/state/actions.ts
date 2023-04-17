import { createAction, props } from "@ngrx/store";
import { WeatherConditions } from "./state";

export const getWeather = createAction('[WX-Display] GET_WX_DATA');

export const getWeatherFailed = createAction(
    '[WX-Api] GET_WX_DATA_FAILED',
    props<{error: string}>());

export const getWeatherSuccess = createAction(
    '[WX-Api] GET_WX_DATA_SUCCESS',
    props<{weather: any}>());

export const updateOutsideTemp = createAction(
    '[WX-Display] UPDATE_TEMP_OUTSIDE',
    props<{temp: number}>());

export const updateInsideTemp = createAction(
    '[WX-Display] UPDATE_TEMP_INSIDE');
