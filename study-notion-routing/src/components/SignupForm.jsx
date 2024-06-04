import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye,AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const SignupForm = ({setLogin}) => {

    const navigate = useNavigate();

    
    const [student , setStudent] = useState(true);
      
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        accountType : ""
    })

    const [showPass, setShowPass] = useState(false);
    const [showCnfrmPass, setShowCnfrmPass] = useState(false);

    const changeHandler = (event) => {
        setFormData((prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        
        if(formData.password !== formData.confirmPassword){
            toast.error("Passwords should be same");
            return;
        }

        setLogin(true);
        toast.success("Signed Up Successfully")
        navigate("/dashboard");
    }


    return (
        <div className=''>

            <div className='flex bg-richblack-800 my-6 rounded-full p-1 gap-4 max-w-max'>
                <button
                name="accountType"
                value={`${formData.accountType = "Student"}`}
                onClick={() => setStudent(true)}
                className={
                    `${student ? "bg-richblack-900 p-3 text-richblack-5 rounded-full" :  "bg-transparent text-richblack-200 p-2 rounded-full transition-all duration-200" }`
                }
                >
                    Student
                </button>

                <button
                name={formData.accountType}
                value={`${formData.accountType = "Instructor"}`}
                onClick={() => setStudent(false)}
                className={
                    `${!student ? "bg-richblack-900 p-3 text-richblack-5 rounded-full" :  "bg-transparent text-richblack-200 p-2 rounded-full transition-all duration-200" }`
                }
                >
                    Instructor
                </button>
            </div>

            <form 
            className='flex flex-col gap-2'
             onSubmit={submitHandler}>

                <div className='flex flex-row gap-4'>
                    <label className='w-1/2'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            First Name<sup className='text-pink-200 '>*</sup>
                        </p>

                        <input required type="text"
                        className='bg-richblack-800 rounded-lg text-richblack-5 w-full p-[12px]'
                            name="firstName" onChange={changeHandler}
                            placeholder='Enter First Name' value={formData.firstName}
                        />
                    </label>

                    <label className='w-1/2'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Last Name<sup className='text-pink-200 '>*</sup>
                        </p>

                        <input required type="text"
                        className='bg-richblack-800 rounded-lg text-richblack-5 w-full p-[12px]'
                            name="lastName" onChange={changeHandler}
                            placeholder='Enter Last Name' value={formData.lastName}
                        />
                    </label>
                </div>


                <label>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        Email Address<sup className='text-pink-200 '>*</sup>
                    </p>

                    <input required type="email" 
                    className='bg-richblack-800 rounded-lg text-richblack-5 w-full p-[12px]'
                    placeholder='Enter Email'
                        value={formData.email} onChange={changeHandler} name="email" />
                </label>

                <div className='flex w-full gap-4'>
                    <label className='relative w-1/2'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Create Password <sup className='text-pink-200 '>*</sup>
                        </p>

                        <input required
                        className='bg-richblack-800 rounded-lg text-richblack-5 w-full p-[12px]'
                        type={showPass ? ("text") : ("password")} placeholder='Enter Password'
                            value={formData.password} onChange={changeHandler} name="password" />

                        <span className='absolute right-3 mt-3 cursor-pointer'
                        onClick={() => setShowPass(!showPass)}>
                            {
                                showPass ? (<AiOutlineEyeInvisible fontSize={21}/>) : (<AiOutlineEye fontSize={21}/>)
                            }
                        </span>

                    </label>
                    <label className='relative w-1/2'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Confirm Password <sup className='text-pink-200 '>*</sup>
                        </p>

                        <input required 
                        className='bg-richblack-800 rounded-lg text-richblack-5 w-full p-[12px]'
                        type={showCnfrmPass ? ("text") : ("password")} placeholder='Confirm Password'
                            value={formData.confirmPassword} onChange={changeHandler} name="confirmPassword" />

                        <span className='absolute right-3 mt-3 cursor-pointer' 
                        onClick={() => setShowCnfrmPass(!showCnfrmPass)}>
                            {
                                showCnfrmPass ? (<AiOutlineEyeInvisible fontSize={21}/>) : (<AiOutlineEye fontSize={21}/>)
                            }
                        </span>

                    </label>
                </div>

                <button className='w-full bg-yellow-400 rounded-lg p-2 text-richblack-900 mt-5'>
                    Create Account
                </button>

            </form>

        </div>
    )
}

export default SignupForm
