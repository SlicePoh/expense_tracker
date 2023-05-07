import React,{useState} from 'react'
import s from '../style'
import {TiDocumentAdd,TiCancel} from 'react-icons/ti'
import {TbArrowBack} from 'react-icons/tb'
import {BiSearchAlt} from 'react-icons/bi'
import { Link } from 'react-router-dom'
export const Topfold = () => {
    const [query,setQuery]=useState("");
    const handleQuery=(e)=>{
        setQuery(e.target.value);
    }
    return (
        <div>
            {window.location.pathname==='/' ? 
            <div className={`${s.flexBetween} mt-10 mx-0 md:mx-20`}>
                <div className={`${s.flexSS} bg-white w-60 md:w-96 rounded-lg`}>
                    <BiSearchAlt className="text-sm md:text-xl mx-1"/>
                    <input value={query} placeholder="Search for transactions" onChange={(e)=>handleQuery(e)} className=" outline-none md:w-40 p-0 md:p-1 mr-4"/>
                </div>
                <Link to="/AddTransaction" >
                    <button className={`${s.flexCenter} w-16 cursor-pointer bg-black text-white rounded-lg border-2 p-1 border-black`}>
                        <TiDocumentAdd className="text-sm md:text-xl"/>
                        <div className="font-semibold text-sm md:text-base">Add</div>
                    </button>
                </Link>
            </div>
            : 
            <div className={`${s.flexBetween} mt-10 mx-0 md:mx-20`}>
                <Link to='/'>
                    <button className={`${s.flexCenter} w-20 cursor-pointer bg-indigo-500 text-black rounded-lg border-2 p-1 border-black`}>
                        <TbArrowBack className=" mr-1 text-base md:text-xl"/>
                        <div className="font-semibold text-sm md:text-base">Back</div>
                    </button>
                </Link>
                <Link to='/'>
                    <button className={`${s.flexCenter} w-24 cursor-pointer bg-red-500 text-black rounded-lg border-2 p-1 border-black`}>
                        <TiCancel className=" mr-1 text-base md:text-xl"/>
                        <div className="font-semibold text-sm md:text-base">Cancel</div>
                    </button>
                </Link>
            </div>}
        </div>
    )
}
