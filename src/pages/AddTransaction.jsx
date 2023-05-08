import React from 'react'
import { Topfold } from '../components/Topfold'
import { Form } from '../components/Form'

export const AddTransaction = () => {
  return (
    <div className={`w-[300px] md:w-[800px] min-h-screen p-6 mx-auto`}>
        <Topfold/>
        <Form/>
    </div>
  )
}
