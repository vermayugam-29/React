import React from 'react'
import Header from '../components/Header'
import { useLocation , useNavigation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'
const TagPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);

  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <Header/>
      <div className='max-w-[620px] w-11/12 py-3 flex flex-row gap-x-2 mt-[100px]'>
        <button
        className='border border-black rounded-md p-1 font-semibold'
         onClick={() => navigation(-1)}>Back</button>
        <h1 className='text-xl font-bold'>Blogs tagged <span className='text-blue-400 underline'>#{tag}</span></h1>
      </div>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default TagPage
