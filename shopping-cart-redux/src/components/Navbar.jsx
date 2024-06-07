import React from 'react';
import { IoMdCart } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-3/4 flex flex-row justify-between'>
        <NavLink to = "/">
          <img src="../logo.png" width={164} alt="" /> 
        </NavLink>
        <div className='flex'>
          <NavLink to = "/">
            <p className=''>
              Home
            </p>
          </NavLink>
          <NavLink to="/cart">
            <IoMdCart />
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
