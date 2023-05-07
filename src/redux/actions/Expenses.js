import { AddExpense, DeleteExpense } from "../action-types/Expenses"

export const addExpense=(data)=>{
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