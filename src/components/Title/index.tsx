import React from 'react';
import styles from './Title.module.scss'

type TitlePropsType = {

};

export const Title:React.FC<TitlePropsType> = () => {
    return (
        <div className={styles.title}>
            <h2>
                Weather Forecast
            </h2>
        </div>
    );
};