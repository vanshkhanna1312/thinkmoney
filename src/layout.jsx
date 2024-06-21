import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from './components/Home'

const layout = () => {
  return (
    <>
    <Home/>
        <Outlet/>
    </>
  )
}

export default layout
