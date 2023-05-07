import { AddExpense } from "../action-types/Expenses";

const initialState={
    expenseList:[],
}
export const expenseReducer= (state=initialState,action)=>{
    switch(action.type){
        case AddExpense:{
            return{
                ...state,
                List:[...state.expenseList, action.data],
            };
        }
        default:
            return state
    }
};