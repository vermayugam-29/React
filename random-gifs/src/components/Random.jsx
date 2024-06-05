import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const Random = () => {

  const { gif, loading, fetchData } = useGif();


  return (
    <div className='bg-green-600 w-1/2 max-h-[50%] rounded-lg flex flex-col items-center border-black border gap-4'>
      <h1 className='text-xl font-semibold underline'>A Random Gif</h1>
      {
        loading ? <Spinner /> : <img src={gif} className='max-h-[30%] max-w-[70%]' />
      }

      <button
        className='text-xl w-3/4 bg-yellow-400 hover:bg-yellow-100 rounded-lg mb-3'
        onClick={() => fetchData()}>
        Generate
      </button>
    </div>
  )
}

export default Random
