import React from 'react'
import Logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const Navbar = (props) => {

    let isLogin = props.isLogin;
    let setLogin = props.setLogin;

  return (
    <div className='flex py-4 mx-auto item-center w-11/12 max-w-[1160px] justify-between'>
        
        <Link to="/">
            <img src={Logo} alt="Logo" loading='lazy' width={160} height={32}/>
        </Link>

        <nav >
            <ul className='flex gap-x-6'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>


        <div className='flex items-center gap-4'>
            { !isLogin &&
                <Link to="/login">
                    <button className='text-richblack-100 bg-richblack-800 py-[8px] px-[12px] rounded-lg border-richblack-700'
                    >
                        Log In
                    </button>
                </Link>
            }
            { !isLogin &&
                <Link to="/signup">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-lg border-richblack-700'>
                        Sign Up
                    </button>
                </Link>
            }
            { isLogin &&
                <Link to="/">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-lg border-richblack-700'
                     onClick={() => {
                        setLogin(false);
                        toast.success("Logged  Out");
                    }}>
                        Log Out
                    </button>
                </Link>
            }
            { isLogin && 
                <Link to="/dashboard">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-lg border-richblack-700'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>

    </div>
  )
}

export default Navbar
