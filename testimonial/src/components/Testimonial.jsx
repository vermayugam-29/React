import React, { useState } from 'react'
import Card from './Card'

const Testimonial = (props) => {

    const [idx,setIdx] = useState(0);


    let reviews = props.reviews;
  return (
    <div className='w-[85vw] md:w-[700px] rounded-xl bg-slate-600 flex flex-col justify-center items-center mt-10 p-10'>
      <Card reviews={reviews[idx]} idx={idx} setIdx={setIdx}></Card>
    </div>
  )
}

export default Testimonial
