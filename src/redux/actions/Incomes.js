import { AddIncome, DeleteIncome } from "../action-types/Incomes"

export const addIncome=(data)=>{
    return{
        type: AddIncome,
        data,
    }
}
export const delIncome=(data)=>{
    return{
        type: DeleteIncome,
        data,
    }
}
