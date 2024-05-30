import React from 'react'
import { useNavigate } from 'react-router-dom'


const NotFound = () => {
    const navigate = useNavigate();

  return (
    <div className='flex flex-col justify-center items-center'>
      Page not Found
      <button onClick={() => navigate("/")} className='bg-black text-white'>
        Move to home page
      </button>
      <button className='bg-black text-white' onClick={() => navigate(-1)}>
        Go to previous page
      </button>
    </div>
  )
}

export default NotFound
