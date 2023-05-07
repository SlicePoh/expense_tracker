import { AddIncome } from "../action-types/Incomes";

const initialState={
    incomeList:[],
}
export const IncomeReducer= (state=initialState,action)=>{
    switch(action.type){
        case AddIncome:{
            return{
                ...state,
                List:[...state.incomeList, action.data],
            };
        }
        default:
            return state
    }
};