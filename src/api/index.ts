import axios from "axios";
import {DailyWeatherDataType, WeatherDataType} from "../types";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

export const fetchCurrentWeatherData = async (cityName: string) => {
    const {data} = await api.get<WeatherDataType>(`/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
    return data
}

export const fetchDailyWeatherData = async (cityName: string) => {
    const {data} = await api.get<DailyWeatherDataType>(`/forecast/daily?q=${cityName}&cnt=5&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
    return data.list
}