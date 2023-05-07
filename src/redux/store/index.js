
import {combineReducers,legacy_createStore as createStore} from 'redux'
import { expenseReducer } from "../reducers/Expenses";
import { IncomeReducer } from '../reducers/IncomeReducer';
const reducer=combineReducers({
    expenses: expenseReducer,
    incomes: IncomeReducer
})
const initialState={};
const store =createStore(reducer,initialState)

export default store;