import { AddExpense, DeleteExpense, SearchExpense } from "../action-types/Expenses";

const initialList=()=>{
    const list=localStorage.getItem("transaction-list")
    let transactions=[];
    if(list){
        transactions=JSON.parse(list)
    }
    return transactions
}
const initialState={
    expenseList: initialList(),
    query: "",
}
export const expenseReducer= (state=initialState,action)=>{
    switch(action.type){
        case AddExpense:{
            localStorage.setItem("transaction-list", JSON.stringify([...state.expenseList, action.data]))
            return{
                ...state,
                expenseList:[...state.expenseList, action.data],
            };
        }
        case DeleteExpense:{
            const {data} = action;
            const updatedList=state.expenseList.filter(
                (item)=>item.createdAt!==data.createdAt
            )
            localStorage.setItem("transaction-list", JSON.stringify(updatedList))
            return{
                ...state,
                expenseList: updatedList,
            };
        }
        case SearchExpense:{
            const {query}=action;
            return {
                ...state,
                query,
            }
        }
        default:
            return state
    }
};