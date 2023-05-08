import moment from 'moment/moment'
import React from 'react'
import {BiTrash} from 'react-icons/bi'
import s from '../style'
import { useDispatch } from 'react-redux'
import { delExpense } from '../redux/actions/Expenses'
export const Card = ({item , notifySuc}) => {
    const time=moment(item.createdAt).fromNow();
    const dispatch=useDispatch();
    const handleDelete=()=>{
        dispatch(delExpense(item));
        notifySuc();
    }
    return (
        <div style={{
            backgroundColor: `${item.category.color}`
        }}
        className={`${s.flexBetween} h-10 md:h-16 p-1 md:p-2 my-1 rounded-lg border-2 border-black text-xs md:text-base font-bold w-72 md:w-96 lg:w-[700px] `}
        >
            <div className="flex">
                <img src={item.category.icon} alt="transaction-item" className="w-4 md:w-10 object-cover" />
                <div className={`${s.flexStart} mx-2 flex-col`}>
                    <div className={``}>{item.title}</div>
                    <div className={``}>{time}</div>
                </div>
            </div>
            <div className="">
                <div>
                    <div className="">₹ {item.amount}</div>
                </div>
                <BiTrash className="cursor-pointer" onClick={handleDelete}/>
            </div>
        </div>
    )
}
