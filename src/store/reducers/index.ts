import {combineReducers} from "@reduxjs/toolkit";
import weatherReducer from "./weather-reducer";
import queriesReducer from "./queries-reducer";

export const rootReducer = combineReducers({
   weather: weatherReducer,
   queries: queriesReducer
})

export type RootState = ReturnType<typeof rootReducer>