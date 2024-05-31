import React from 'react'
import Template from '../components/Template'
import loginImage from '../assets/login.png'

const Login = ({setLogin}) => {
  return (
    <div>
      <Template 
        title="Welcome Back"
        desc1="Build skills for today, tomorrow and beyond."
        desc2="Education to future-proof career"
        image={loginImage}
        formType="Login"
        setLogin={setLogin}
      />
    </div>
  )
}

export default Login
