import React from 'react'
import Logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'


const Navbar = (props) => {

    let isLogin = props.isLogin;
    let setLogin = props.setLogin;

  return (
    <div className='flex flex-row gap-4 justify-evenly'>
        
        <Link to="/">
            <img src={Logo} alt="Logo" loading='lazy' className=''/>
        </Link>

        <nav >
            <ul className='flex flex-row gap-4'>
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


        <div className='flex flex-row gap-4'>
            { !isLogin &&
                <Link to="/login">
                    <button onClick={()=> setLogin(true)}>
                        Log In
                    </button>
                </Link>
            }
            { !isLogin &&
                <Link to="/signup">
                    <button>
                        Sign Up
                    </button>
                </Link>
            }
            { isLogin &&
                <Link to="/">
                    <button onClick={() => setLogin(false )}>
                        Log Out
                    </button>
                </Link>
            }
            { isLogin && 
                <Link to="/dashboard">
                    <button>
                        Dashboard
                    </button>
                </Link>
            }
        </div>

    </div>
  )
}

export default Navbar
