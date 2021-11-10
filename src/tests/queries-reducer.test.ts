import {QueriesStateType} from "../types";
import queriesReducer, {addQuery, selectQuery} from "../store/reducers/queries-reducer";

let query:string;
let startState: QueriesStateType

beforeEach(() => {
    query = 'London'
    startState = {
        message: '',
        queries: ['Kiev','Tbilisi'],
        selectedQuery: 'Kiev'
    }
})

test('correct query should be added', () => {
    const action = addQuery(query)
    const endState = queriesReducer(startState,action)

    expect(endState.queries.length).toBe(3)
})

test('correct query should be selected', () => {
    const action = selectQuery('Tbilisi')
    const endState = queriesReducer(startState,action)

    expect(endState.selectedQuery).toBe('Tbilisi')
})

test('correct message should be set', () => {
    const action = addQuery('Kiev')
    const endState = queriesReducer(startState,action)

    expect(endState.message).toBe('Such a query already exists')
    expect(endState.queries.length).toBe(2)
})
