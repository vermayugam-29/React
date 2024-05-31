import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import frame from '../assets/frame.png'
import { FcGoogle } from "react-icons/fc";

const Template = ({title , desc1, desc2, image, formType, setLogin}) => {


  return (
    <div className=''>
        
        <div className=''>
            <h1 className=''>{title}</h1>
            <p className=''>
                <span className=''>{desc1}</span>
                <span className=''>{desc2}</span>
            </p>

            {
                formType === "Login" ? (<LoginForm setLogin={setLogin}/>) : (<SignupForm setLogin={setLogin}/>)
            }

            <div className=''>
                <div className=''></div> {/*Div For creating Line */}
                <p className=''>OR</p>
                <div className=''></div> {/*Div For creating Line */}
            </div>
    
            <button className=''>
                <FcGoogle/>
                <p className=''>Sign in with Google</p>
            </button>

        </div>
        

        <div className=''>
            <img className='' src={frame} alt="pattern" loading='lazy' />
            <img className='' src={image} alt="pattern" loading='lazy' />
        </div>

    </div>
  )
}

export default Template
