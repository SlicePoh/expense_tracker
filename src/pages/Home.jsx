import React from 'react'
import { Topfold } from '../components/Topfold'
import { List } from '../components/List'
export const Home = () => {
  return (
    <div className="w-[300px] md:w-[800px] p-6 min-h-screen m-auto">
      <Topfold/>
      <List/>
    </div>
  )
}
