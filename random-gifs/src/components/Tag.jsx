import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const Tag = () => {

  const [input , setInput] = useState('gym');

  const {gif,loading,fetchData} = useGif(input);

  return (
    <div className='bg-blue-300 w-1/2 max-h-[50%] rounded-lg flex flex-col items-center border-black border gap-4'>
      <h1 className='text-xl font-semibold underline'>Random
        <span className='text-xl font-semibold underline'> {input} </span>
       Gif</h1>
      {
        loading ? <Spinner/> : <img src={gif} className='max-h-[30%] max-w-[70%]'/>
      }

      <input type="text"
      onChange={(e) => setInput(e.target.value)}
      value={input}
      className='w-[90%] rounded-lg p-1 text-center'
      />

      <button 
      className='text-xl w-3/4  bg-yellow-400 hover:bg-yellow-100 rounded-lg  mb-3'
      onClick={() => fetchData()}>
        Generate
      </button>
    </div>
  )
}

export default Tag
