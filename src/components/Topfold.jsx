import React,{useState} from 'react'
import s from '../style'
import {TiDocumentAdd,TiCancel} from 'react-icons/ti'
import {TbArrowBack} from 'react-icons/tb'
import {BiSearchAlt} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { searchExpense } from '../redux/actions/Expenses'
export const Topfold = () => {
    const [query,setQuery]=useState("");
    const dispatch=useDispatch();
    const handleQuery=(e)=>{
        setQuery(e.target.value);
        dispatch(searchExpense(e.target.value))
    }
    return (
        <div className=" text-xs md:text-base">
            {window.location.pathname==='/' ? 
            <div className={`${s.flexCenter} mt-10 mx-0 md:mx-44`}>
                <div className={`${s.flexSS} bg-white w-96 md:min-w-[300px] lg:min-w-[500px] rounded-lg`}>
                    <BiSearchAlt className="text-sm md:text-xl mx-1"/>
                    <input value={query} placeholder="Search for transactions" onChange={(e)=>handleQuery(e)} className=" outline-none w-full p-1 mr-4"/>
                </div>
                <Link to="/AddTransaction" >
                    <button className={`${s.flexCenter} w-12 md:w-16 cursor-pointer bg-black text-white rounded-lg border-2 p-1 mx-4 border-black`}>
                        <TiDocumentAdd className="text-sm md:text-xl"/>
                        <div className="font-semibold ">Add</div>
                    </button>
                </Link>
            </div>
            : 
            <div className={`${s.flexCenter} mt-6 mx-0 md:mx-44`}>
                <Link to='/'>
                    <button className={`${s.flexCenter} w-16 md:w-20 cursor-pointer bg-indigo-500 text-black rounded-lg border-2 p-1 mx-8 md:mx-16 border-black`}>
                        <TbArrowBack className=" mr-1 text-base md:text-xl"/>
                        <div className="font-semibold">Back</div>
                    </button>
                </Link>
                <Link to='/'>
                    <button className={`${s.flexCenter} w-16 md:w-24 cursor-pointer bg-red-500 text-black rounded-lg border-2 p-1 mx-8 md:mx-16 border-black`}>
                        <TiCancel className=" mr-0 md:mr-1 text-base md:text-xl"/>
                        <div className="font-semibold ">Cancel</div>
                    </button>
                </Link>
            </div>}
        </div>
    )
}
