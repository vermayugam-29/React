import React, { useState } from 'react'

const Form = () => {
    const [formData , setFormData] = useState({
        firstName : "",
        lastName : "",
        email : ""
    });
    
    console.log(formData);
    
    const changeHandler = (event) => {
        setFormData((prevData) => {
            return{
                ...prevData ,
                [event.target.name] : event.target.value
            }
        });

    } 



  return (
    <div className='flex flex-col gap-4 items-center justify-center'>

      <input type="text"
      placeholder='Enter your First Name'
      onChange={changeHandler}
      name = "firstName"
      />

      <input type="text"
      placeholder='Enter your Last Name'
      onChange={changeHandler}
      name = "lastName"
      />

      <input type="email"
      placeholder='Enter your E-mail'
      onChange={changeHandler}
      name = "email"
      />
    </div>
  )
}

export default Form
