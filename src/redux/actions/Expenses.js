import { AddExpense, DeleteExpense, SearchExpense } from "../action-types/Expenses"

export const addExpense=(data)=>{
    console.log(data);
    return{
        type: AddExpense,
        data,
    }
}
export const delExpense=(data)=>{
    return{
        type: DeleteExpense,
        data,
    }
}
export const searchExpense=(query)=>{
    return{
        type: SearchExpense,
        query,
    }
}
