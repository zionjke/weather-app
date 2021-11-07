import React from 'react';
import styles from './Error.module.scss'

type ErrorPropsType = {};

export const Error: React.FC<ErrorPropsType> = (props) => {
    const {children} = props
    return (
        <div className={styles.error}>
            {children}
        </div>
    );
};