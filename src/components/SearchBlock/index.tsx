import React, {ChangeEvent} from 'react';
import styles from './SearchForm.module.scss'
import {useAppDispatch} from "../../store";
import {addQuery} from "../../store/reducers/queries-reducer";
import {useSelector} from "react-redux";
import {Error} from "../Error";
import {errorMessageResponse, isLoading} from "../../store/reducers/weather-reducer";

type SearchFormProps = {};

export const SearchBlock: React.FC<SearchFormProps> = () => {
    const dispatch = useAppDispatch()
    const isLoaded = useSelector(isLoading)
    const errorMessage = useSelector(errorMessageResponse)
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState<string | null>('')
    const regExp = /(^[a-z ]+$)/i

    const onSearchClick = () => {
        if (value.trim() !== '') {
            dispatch(addQuery(value))
            setValue('')
            setError(null)
        } else {
            setError('Please enter city name')
        }

    }

    const onChangeCityHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value === '' || regExp.test(e.currentTarget.value)) {
            setValue(e.currentTarget.value)
            setError(null)
        }
    }

    console.log(errorMessage)
    return (
        <div className={styles.searchBlock}>
            {error && <Error>
                {error}
            </Error>}
            {errorMessage && <Error>
                {errorMessage}
            </Error>}
            <div className={styles.searchBlock_form}>
                <input placeholder='Search City' value={value} onChange={onChangeCityHandler}/>
                <button disabled={isLoaded} onClick={onSearchClick}>
                    Search
                </button>
            </div>
        </div>
    );
};