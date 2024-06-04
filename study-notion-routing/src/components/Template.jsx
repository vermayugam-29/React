import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import frame from '../assets/frame.png'
import { FcGoogle } from "react-icons/fc";

const Template = ({title , desc1, desc2, image, formType, setLogin}) => {


  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] py-12px mx-auto gap-x-12 gap-y-0 mt-10 h-full'>
        
        <div className='w-11/12 max-w-[450px]'>
            <h1
             className='text-richblack-5 font-semibold text-3xl'>
                {title}
            </h1>
            <p className='text-lg leading-[1.625rem] mt-4'>
                <span className='text-richblack-100'>{desc1}</span>
                <br />
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>

            {
                formType === "Login" ? (<LoginForm setLogin={setLogin}/>) : (<SignupForm setLogin={setLogin}/>)
            }

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-richblack-700'></div> {/*Div For creating Line */}
                <p className='font-md text-richblack-700'>OR</p>
                <div className='w-full h-[1px] bg-richblack-700'></div> {/*Div For creating Line */}
            </div>
    
            <button className='w-full flex items-center justify-center rounded-lg font-md text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6'>
                <FcGoogle/>
                <p className=''>Sign in with Google</p>
            </button>

        </div>
        

        <div className='relative w-11/12 max-w-[450px]'>
            <img width={558} height={504} 
            className='' 
            src={frame} alt="pattern" loading='lazy' />
            <img width={558} height={490} 
            className='absolute -top-4 right-4'
             src={image} alt="pattern" loading='lazy' />
        </div>

    </div>
  )
}

export default Template
