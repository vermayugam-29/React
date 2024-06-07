import React, { useState } from 'react'

const Card = ({product}) => {

    const [inCart , setInCart] = useState(false);

  return (
    <div className='w-1/4 h-1/4 flex flex-col'>
      <p>{product.title.substring(0,15)}...</p>
      <p>{product.description.substring(0,200)}..</p>
      <img src={product.image} className='' alt="" />

      <div className='flex justify-between'>
        <p>{product.price}</p>
        {
            !inCart ? 
            <button onClick={() => setInCart(true)}>Add to Cart</button>
            :
            <button onClick={() => setInCart(false)}>Remove Item</button>
        }
      </div>
    </div>
  )
}

export default Card
