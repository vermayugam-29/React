import React from 'react'
import Navbar from './components/Navbar.jsx'
import {Routes , Route} from 'react-router-dom'
import Home from './routes/Home.jsx'
import Cart from './routes/Cart.jsx'


const App = () => {
  return (
    <div className='w-full h-full'>
      <div className='bg-slate-900'>
        <Navbar />
      </div>


      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/cart' element = {<Cart />} />
      </Routes>
    </div>
  )
}

export default App