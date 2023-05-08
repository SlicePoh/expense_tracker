import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from './Card'
import bg from '../assets/bg.png'
import s from '../style'
import { ToastContainer,toast } from 'react-toastify'

export const List = () => {
  const {expenseList: list,query}=useSelector((state)=>state.expenses);
  const filteredList=list.filter(item=>item.title.includes(query))
  const notifySuc = () => toast.success("Transaction Deleted..");

  return (
    <div className={`${s.flexCenter} flex-col my-6`}>
      <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
      />
        {filteredList.length?filteredList.map((item)=>(
          <Card item={item} notifySuc={notifySuc}/>
        )):
        <div className={`${s.flexCenter} flex-col`}>
          <img src={bg} alt="Empty Transaction List" className="m-10 w-[400px]" />
          <div className=" text-sm md:text-2xl font-bold ">
            Uh Oh!! Your Transaction List is Empty
          </div>
        </div>
        }
       
     
    </div>
  )
}
