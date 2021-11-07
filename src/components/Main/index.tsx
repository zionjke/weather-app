import React, {useEffect} from 'react';
import styles from './Main.module.scss'
import {SearchBlock} from "../SearchBlock";
import {MainWeatherCard} from "../MainWeatherCard";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers";
import {WeatherDataType} from "../../types";
import {useAppDispatch} from "../../store";
import {fetchCurrentWeather} from "../../store/reducers/weather-reducer";
import {selectedQuery} from "../../store/reducers/queries-reducer";

type MainPropsType = {};

export const Main: React.FC<MainPropsType> = () => {

    const data = useSelector<RootState, WeatherDataType | null>(state => state.weather.currentWeather)
    const query = useSelector(selectedQuery)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchCurrentWeather(query))
    }, [query])

    return (
        <div className={styles.main}>
            <SearchBlock/>
            {
                data && <MainWeatherCard data={data}/>
            }
        </div>
    );
};