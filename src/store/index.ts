import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {rootReducer} from "./reducers";
import {loadState, saveState} from "../utils/localStorage";

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: loadState()
})

store.subscribe(() => {
    saveState(store.getState())
})


export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

