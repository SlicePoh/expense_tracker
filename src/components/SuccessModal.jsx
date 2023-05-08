import React from 'react'
import ReactModal from 'react-modal';
import {FcApproval} from 'react-icons/fc'
import s from '../style';
import bank from '../assets/bank.png'

export const SuccessModal = ({modalOpen,setModalOpen}) => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
    };
    const closeModal=()=> {
        setModalOpen(false);
      }
    return (
        <ReactModal isOpen={modalOpen} onRequestClose={closeModal} style={customStyles}>
            <div className={`${s.flexCenter} flex-col rounded-xl p-2 md:p-6 font-bold text-base md:text-2xl`}>
                <span className="">Expense Added Successfully</span><FcApproval/>
                <img className="w-36 md:w-60" src={bank} alt="bank" />
                <button className="w-8 md:w-16 cursor-pointer bg-red-600 text-white text-sm md:text-lg rounded-lg border-2 p-1 border-black" onClick={closeModal}>close</button>
            </div>
        </ReactModal>
        
    )
}
