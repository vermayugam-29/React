import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye,AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const SignupForm = ({setLogin}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [showPass, setShowPass] = useState(false);
    const [showPass2, setShowPass2] = useState(false);

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
        <div>

            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>

            <form onSubmit={submitHandler}>

                <div>
                    <label>
                        <p>
                            First Name<sup>*</sup>
                        </p>

                        <input required type="text"
                            name="firstName" onChange={changeHandler}
                            placeholder='Enter First Name' value={formData.firstName}
                        />
                    </label>

                    <label>
                        <p>
                            Last Name<sup>*</sup>
                        </p>

                        <input required type="text"
                            name="lastName" onChange={changeHandler}
                            placeholder='Enter Last Name' value={formData.lastName}
                        />
                    </label>
                </div>


                <label>
                    <p>
                        Email Address<sup>*</sup>
                    </p>

                    <input required type="email" placeholder='Enter Email'
                        value={formData.email} onChange={changeHandler} name="email" />
                </label>

                <div>
                    <label>
                        <p>
                            Create Password <sup>*</sup>
                        </p>

                        <input required type={showPass ? ("text") : ("password")} placeholder='Enter Password'
                            value={formData.password} onChange={changeHandler} name="password" />

                        <span onClick={() => setShowPass(!showPass)}>
                            {
                                showPass ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)
                            }
                        </span>

                    </label>
                    <label>
                        <p>
                            Confirm Password <sup>*</sup>
                        </p>

                        <input required type={showPass2 ? ("text") : ("password")} placeholder='Confirm Password'
                            value={formData.confirmPassword} onChange={changeHandler} name="confirmPassword" />

                        <span onClick={() => setShowPass2(!showPass2)}>
                            {
                                showPass2 ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)
                            }
                        </span>

                    </label>
                </div>

                <button>
                    Create Account
                </button>

            </form>

        </div>
    )
}

export default SignupForm
