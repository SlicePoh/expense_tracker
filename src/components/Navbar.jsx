import React from 'react'
import s from '../style'
import {FcMoneyTransfer} from 'react-icons/fc'
//import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div className={`${s.flexCenter} bg-black h-10 md:h-16 w-auto sticky top-0`}>
        <div className={`${s.flexCenter} text-white p-4 font-bold text-xl md:text-2xl`}>
            X-pence
        </div>
        <FcMoneyTransfer className="text-base md:text-xl"/>
    </div>
  )
}
