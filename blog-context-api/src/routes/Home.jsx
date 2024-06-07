import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-1'>
      <Header/>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default Home
