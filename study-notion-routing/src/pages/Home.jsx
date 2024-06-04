import React, { useEffect } from 'react'

const Home = ({isLogin}) => {
  useEffect(() => {
    console.log(isLogin);
  }) 
  return (
    <div className='flex justify-center items-center text-3xl h-full'>
      Home
    </div>
  )
}

export default Home
