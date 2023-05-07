import React, { useState } from 'react'
import s from '../style';
import { categories } from '../constants/Categories';
import {FaChevronDown} from 'react-icons/fa' 

export const Form = () => {
    const cat= categories;

    const [title,setTitle]=useState("");
    const [amount,setAmount]=useState("");
    const [category,setCategory]=useState("");
    const [categoryOpen,setCategoryOpen]=useState(false);

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

    return (
        <div>
            <div className={`bg-white rounded-lg p-2 m-4 `}>
                <label className="bg-gray-300 rounded-lg p-1 mr-2 ">Title</label>
                <input className="w-60" placeholder="Give a name to your transaction" value={title} onChange={(e)=>handleTitle(e)} />
            </div>
            <div className={`bg-white rounded-lg p-2 m-4 `}>
                <label className="bg-gray-300 rounded-lg p-1 mr-2 ">Amount</label>
                <input className="w-60" placeholder="The amount of your transaction" value={amount} onChange={(e)=>handleAmount(e)} />
            </div>
            <div className="f3">
                <div className={`drop ${s.flexSS} cursor-pointer`} onClick={()=>setCategoryOpen(!setCategoryOpen)}>
                    <label>{category?category.title : "Category"}</label>
                    <FaChevronDown/>
                </div>
                {categoryOpen && (
                <div>
                    {cat.map((category)=>(
                        <div className={`${s.flexBetween} bg-[${category.color}]`}
                        key={category.id}
                        onClick={()=>handleCategory(category)}
                        >
                            <label>{category.title}</label>
                            <img src={category.icon.default} alt={category.title}/>
                        </div>
                    ))}

                </div>
                )}
            </div>
        </div>
    )
}
