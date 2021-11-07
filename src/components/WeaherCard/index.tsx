import React from 'react';
import styles from './WeatherCard.module.scss'
import {WeatherDataType} from "../../types";

type WeatherCardPropsType = {
    item: WeatherDataType
};
export const WeatherCard: React.FC<WeatherCardPropsType> = (props) => {
    const {item} = props
    // let iconImage = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    return (
        <div className={styles.card}>
            <div className={styles.card_icon}>
                <img src="" alt=""/>
            </div>
            <div className={styles.card_description}>
                <span>28&deg;</span>
                <span>Monday</span>
            </div>
        </div>
    );
};