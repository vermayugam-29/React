import { useState } from 'react'
import reviews from './data'
import Testimonial from './components/Testimonial'

function App() {

    return (
      <div className='w-[100vw] h-[100vh] text-center flex flex-col justify-center items-center gap-2'>

        <h1 className='text-3xl font-bold'>Our Testimonials</h1>

        <div className='h-[1vh] w-[10%] bg-white'></div>

        <Testimonial reviews={reviews}></Testimonial>
        
      </div>
    )
}

export default App
