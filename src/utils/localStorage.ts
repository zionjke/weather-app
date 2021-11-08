import {RootState} from "../store/reducers";

export const loadState = () => {
    try {
        let serializedState = localStorage.getItem('queries')
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState)
    } catch (e) {
        return undefined;
    }
}


export const saveState = (state: RootState) => {
    try {
        let serializedState = JSON.stringify(state.queries)
        localStorage.setItem('queries', serializedState)
    } catch {

    }
}