import React from 'react';
import styles from './HistoryList.module.scss'
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../store";
import {lastTenQueries, selectQuery} from "../../store/reducers/queries-reducer";

type HistoryListProps = {};
export const HistoryList: React.FC<HistoryListProps> = (props) => {
    const dispatch = useAppDispatch()
    const queries = useSelector(lastTenQueries)
    const [visible, setVisible] = React.useState(true);

    const onVisibleHandler = () => {
        setVisible(!visible)
    }

    const onSelectedQueryHandler = (query: string) => {
        dispatch(selectQuery(query))
    }

    return (
        <div className={styles.historyBlock}>
            <span onClick={onVisibleHandler}>History List</span>
            {visible && <div className={styles.historyBlock_list}>
                {
                    !queries.length ?
                        <span>you do not have a history of requests</span>
                        : queries.map(query => (
                    <span key={query}
                          onClick={() => onSelectedQueryHandler(query)}>
                        {query}
                    </span>
                ))}
            </div>}

        </div>
    );
};