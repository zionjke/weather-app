import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {QueriesStateType} from "../../types";
import {RootState} from "./index";
import {fetchCurrentWeather} from "./weather-reducer";

const initialState: QueriesStateType = {
    selectedQuery: 'Kyiv',
    queries: [],
    message: ''
}

export const queriesSlice = createSlice({
    name: 'queries',
    initialState,
    reducers: {
        addQuery(state, action: PayloadAction<string>) {
            state.selectedQuery = action.payload
            let query = state.queries.findIndex(query => query === action.payload)
            if (query > -1) {
                state.queries.filter(query => query !== action.payload)
                state.message = 'Such a query already exists'
            } else {
                state.queries.unshift(action.payload)
                state.message = ''
            }
        },
        selectQuery(state, action: PayloadAction<string>) {
            state.selectedQuery = action.payload
        },
    },
    extraReducers: {
        [fetchCurrentWeather.fulfilled.type]: (state, action) => {
            let query = state.queries.findIndex(query => query === state.selectedQuery)
            if (query > -1) {
                state.queries.filter(query => query !== state.selectedQuery)
                state.message = 'Such a query already exists'
            } else {
                state.queries.unshift(state.selectedQuery)
                state.message = ''
            }
        },
    }
})


export const {addQuery, selectQuery} = queriesSlice.actions

export const selectedQuery = (state: RootState) => state.queries.selectedQuery
export const lastTenQueries = (state: RootState) => state.queries.queries.slice(0, 10)

export default queriesSlice.reducer
