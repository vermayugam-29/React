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
    <form className='' onSubmit={submitHandler}>
        <label className=''>
            <p className=''>
                Email Address <sup>*</sup>
            </p>

            <input className=''
             required type="email" placeholder='Enter Email'
            value={formData.email} onChange={changeHandler} name="email"/>
        </label>

        <label className=''>
            <p className=''>
                Password <sup>*</sup>
            </p>

            <div className=''>
                <input  className=''
                required type={showPass ? ("text") : ("password")} placeholder='Enter Password'
                value={formData.password} onChange={changeHandler} name="password"/>

                <span className='' onClick={() => setShowPass(!showPass)}>
                    {
                        showPass ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)
                    }
                </span>
            </div>

            <Link to="#">
                <p className=''>
                    Forgot Password?
                </p>
            </Link>

        </label>
        
        <button>
            Sign In
        </button>
                
    </form>
  )
}

export default LoginForm
