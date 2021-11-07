import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {rootReducer} from "./reducers";


export const store = configureStore({
    reducer: rootReducer,
})

store.subscribe(() => {
    localStorage.setItem('queries', JSON.stringify(store.getState().queries.queries))
})


export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

