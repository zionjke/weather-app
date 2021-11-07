import React from 'react';
import styles from './MainWeatherCard.module.scss'
import {WeatherDataType} from "../../types";
import moment from "moment";

type MainWeatherCardProps = {
    data: WeatherDataType
};

export const MainWeatherCard: React.FC<MainWeatherCardProps> = (props) => {
    const {data} = props
    let iconImage = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    return (
        <div className={styles.card}>
            <div className={styles.card_header}>
                <div>
                    <h3>{data.name}, {data.sys.country}</h3>
                    <div className={styles.card_header_date}>
                        {moment().locale("uk").format('MMMM Do YYYY')}
                    </div>
                </div>
                <div className={styles.card_header_img}>
                    <img src={iconImage} alt="Weather Icon"/>
                </div>
            </div>
            <div className={styles.card_content}>
                <div className={styles.card_content_temp}>
                    {Math.floor(data.main.temp)}&deg;
                </div>
            </div>
            <div className={styles.card_content_description}>
                {data.weather[0].description}
            </div>
        </div>
    );
};