import React from 'react'
import s from '../style'
import logo from '../assets/logo.png'
export const Navbar = () => {
  return (
    <div className={`${s.flexCenter} bg-black h-10 md:h-16 w-auto sticky top-0`}>
        <div className={`${s.flexCenter} text-white p-4 font-bold text-xl md:text-2xl`}>
            X-pence
        </div>
        <img src={logo} alt="logo" className="w-4 md:w-8"/>
    </div>
  )
}
