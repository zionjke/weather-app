import React, {useEffect} from 'react';
import styles from './WeatherList.module.scss'
import {WeatherCard} from "../WeaherCard";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers";
import {WeatherDataType} from "../../types";
import {useAppDispatch} from "../../store";
import {selectedQuery} from "../../store/reducers/queries-reducer";
import {fetchDailyWeather} from "../../store/reducers/weather-reducer";

type WeatherListPropsType = {};

export const WeatherList: React.FC<WeatherListPropsType> = (props) => {
    const dispatch = useAppDispatch()
    const data = useSelector<RootState, WeatherDataType[]>(state => state.weather.dailyWeather)
    const query = useSelector(selectedQuery)

    return (
        <div className={styles.weatherList}>
            {/*{data && data.map(item => (*/}
            {/*    <WeatherCard key={item.id} item={item}/>*/}
            {/*))}*/}
        </div>
    );
};