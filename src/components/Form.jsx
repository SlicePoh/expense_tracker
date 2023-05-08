import React, { useState } from 'react'
import s from '../style';
import { categories } from '../constants/Categories';
import {FaChevronDown} from 'react-icons/fa' 
import {MdAddLink} from 'react-icons/md' 
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addExpense } from '../redux/actions/Expenses';
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { SuccessModal } from './SuccessModal';

export const Form = () => {

    const cat= categories;
    
    const [title,setTitle]=useState("");
    const [amount,setAmount]=useState("");
    const [category,setCategory]=useState("");
    const [categoryOpen,setCategoryOpen]=useState(false);
    const [modalOpen,setModalOpen]=useState(false);
    const dispatch=useDispatch();
    const handleTitle=(e)=>{
        setTitle(e.target.value);
    };
    const handleAmount=(e)=>{
        const val=parseFloat(e.target.value)
        if(isNaN(val)){
            setAmount("");
            return
        }
        setAmount(val)
    };
    const handleCategory=(category)=>{
        setCategory(category)
        setCategoryOpen(false)
    };
    const [isAnimating,setIsAnimating]=useState(false);
    const notify = () => toast.warn("Insufficient data!!!");
    const handleSubmit=()=>{
        if(title===''||amount===''||!category){
            notify();
            return;
        }
        const data={
            title,
            amount,
            category,
            createdAt: new Date()
        }
        dispatch(addExpense(data));
        setModalOpen(true)
    };
    
    return (
        <div className={`${s.flexCenter} text-xs md:text-base flex-col p-4 md:p-10 my-6 w-64 sm:w-80 md:w-[550px] lg:w-[700px] bg-[#379834] rounded-3xl mx-auto shadow-2xl`}>
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
            <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen}  />
            <div className={`flex bg-black h-8 md:h-auto w-full text-white rounded-lg p-1 md:p-2 m-2 md:m-4 `}>
                <label className="bg-slate-800  rounded-lg p-1 mr-2 ">Title</label>
                <input className="w-full bg-black md:w-96 outline-none" placeholder="Give a name to your transaction" value={title} onChange={(e)=>handleTitle(e)} />
            </div>
            <div className={`flex bg-black h-8 md:h-auto w-full text-white rounded-lg p-1 md:p-2 m-2 md:m-4 `}>
                <label className="bg-slate-800 w-20 rounded-lg p-1 mr-2 ">Amount ₹</label>
                <input className="w-full bg-black md:w-96 outline-none text-gray-200" placeholder="Transaction amount" value={amount} onChange={(e)=>handleAmount(e)} />
            </div>
            <div className={`flex bg-black h-8 md:h-auto w-full text-white rounded-lg p-1 md:p-2 m-2 md:m-4 `}>
                <label className="bg-slate-800 rounded-lg p-1 mr-2 ">Type</label>
                <input type="radio" name="Income" value="Income" className=" bg-black ml-10 outline-none text-gray-200" />
                <div className={`${s.flexCenter} mx-2 `}>Income</div>
                <input type="radio" name="Expenses" value="Expenses" className=" bg-black  outline-none text-gray-200" />
                <div className={`${s.flexCenter} mx-2 `}>Expense</div>
            </div>
            <div className={` bg-black w-full text-white rounded-lg p-1 md:p-2 m-2 md:m-4`}>
                <div className={`drop ${s.flexBetween}`} >
                    <label className="bg-slate-300 rounded-lg p-1 "
                        style={{
                            backgroundColor: `${category.color}`,
                            color: "black",
                            fontWeight: 800
                        }}
                    >{category?category.title : "Category"}</label>
                    <motion.div className="cursor-pointer mx-4"
                        animate={{
                            rotate: isAnimating ? -180 : 0,
                        }}
                        onClick={()=>{
                            setIsAnimating(!isAnimating);
                            setCategoryOpen(!categoryOpen)
                        }}
                    >
                        <FaChevronDown/>
                    </motion.div>
                </div>
                {categoryOpen && (
                <div>
                    {cat.map((category)=>(
                        <div 
                        className={`${s.flexBetween} cursor-pointer text-black border-b-2 border-black rounded-xl p-1 my-2`}
                        style={{
                            backgroundColor: `${category.color}`
                        }}
                        key={category.id}
                        onClick={()=>handleCategory(category)}
                        >
                            <label className="font-bold mx-1 md:mx-4">{category.title}</label>
                            <img className="w-5 md:w-8" src={category.icon} alt={category.title}/>
                        </div>
                    ))}

                </div>
                )}
            </div>
            <button className={`${s.flexCenter} w-16 cursor-pointer bg-black text-white rounded-lg border-2 p-1 border-black`}
            onClick={handleSubmit}
            >
                <div className="">Add</div>
                <MdAddLink className="text-sm md:text-xl"/>
            </button>
        </div>
    )
}
