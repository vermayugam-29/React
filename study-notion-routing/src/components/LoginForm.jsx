import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye,AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setLogin}) => {

    const navigate = useNavigate();

    const [formData , setFormData] = useState({
        email : "",
        password : ""
    })

    const [showPass , setShowPass] = useState(false);

    const changeHandler = (event) => {
        setFormData((prevData) => {
            return{
                ...prevData,
                [event.target.name] : event.target.value
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setLogin(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }

  return (
    <form className='flex flex-col w-full gap-y-4 mt-6' onSubmit={submitHandler}>
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Address <sup className='text-pink-200 '>*</sup>
            </p>

            <input className='bg-richblack-800 rounded-lg text-richblack-5 w-full p-[12px]'
             required type="email" placeholder='Enter Email Id'
            value={formData.email} onChange={changeHandler} name="email"/>
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Password <sup className='text-pink-200 '>*</sup>
            </p>

            <input  className='bg-richblack-800 rounded-lg text-richblack-5 w-full p-[12px]'
                required type={showPass ? ("text") : ("password")} placeholder='Enter Password'
                value={formData.password} onChange={changeHandler} name="password"/>

            <span
                 className='absolute right-3 mt-3 cursor-pointer'
                 onClick={() => setShowPass(!showPass)}>
                    {
                        showPass ? (<AiOutlineEyeInvisible fontSize={21}/>) : (<AiOutlineEye fontSize={21}/>)
                    }
            </span>

            <Link to="#">
                <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                    Forgot Password?
                </p>
            </Link>

        </label>
        
        <button className='bg-yellow-400 rounded-lg p-2 text-richblack-900 mt-5'>
            Log In
        </button>
                
    </form>
  )
}

export default LoginForm
