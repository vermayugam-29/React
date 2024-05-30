import React from 'react'
import { Outlet } from 'react-router-dom'

const MainHeader = () => {
  return (
    <div>
      <Outlet></Outlet>
      {/* This is main header */}
    </div>
  )
}

export default MainHeader
