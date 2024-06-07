import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Footer from '../components/Footer';

const CategoryPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

  return (
    <div  className='w-full h-full flex flex-col items-center justify-center gap-1'>
      <Header></Header>

      <div className='max-w-[620px] w-11/12 py-3 flex flex-row gap-x-2 mt-[100px]'>
        <button   className='border border-black rounded-md p-1 font-semibold'
        onClick={() => navigation(-1)}
        >
            Back
        </button>
        <h1 className='text-xl font-bold'>
            Blogs on <span>{category}</span>
        </h1>
      </div>

        <Blogs></Blogs>
        <Footer></Footer>

    </div>
  )
}

export default CategoryPage
