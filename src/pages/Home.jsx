import React from 'react'
import { Topfold } from '../components/Topfold'
import { List } from '../components/List'
export const Home = () => {
  return (
    <div className="w-4/6 p-10 m-auto">
      <Topfold/>
      <List/>
    </div>
  )
}
