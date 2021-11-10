import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {WeatherDataType, WeatherStateType} from "../../types";
import {fetchCurrentWeatherData, fetchDailyWeatherData} from "../../api";
import {RootState} from "./index";
import {addQuery} from "./queries-reducer";


export const fetchCurrentWeather = createAsyncThunk('weather/fetchCurrentWeather', async (cityName: string, {
    dispatch,
    rejectWithValue
}) => {
    try {
        const data = await fetchCurrentWeatherData(cityName)
        if (data.cod === 200) {
            dispatch(addQuery(cityName))
            return data
        } else {
            throw new Error(data.message)
        }
    } catch (e) {
        // @ts-ignore
        return rejectWithValue(e.response.data.message)
    }
})

export const fetchDailyWeather = createAsyncThunk('weather/fetchDailyWeather', async (cityName: string, {rejectWithValue}) => {
    try {
        return await fetchDailyWeatherData(cityName)
    } catch (e) {
        console.log(e)
    }
})

const initialState: WeatherStateType = {
    currentWeather: null,
    dailyWeather: [],
    error: '',
    isLoading: false
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCurrentWeather.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchCurrentWeather.fulfilled.type]: (state, action: PayloadAction<WeatherDataType>) => {
            state.currentWeather = action.payload
            state.error = ''
            state.isLoading = false
        },
        [fetchCurrentWeather.rejected.type]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        [fetchDailyWeather.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchDailyWeather.fulfilled.type]: (state, action: PayloadAction<WeatherDataType[]>) => {
            state.dailyWeather = action.payload
            state.error = ''
            state.isLoading = false
        },
        [fetchDailyWeather.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export const isLoading = (state: RootState) => state.weather.isLoading
export const errorMessageResponse = (state: RootState) => state.weather.error

export default weatherSlice.reducer