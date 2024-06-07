import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment , decrement } from '../redux/slices/CounterSlice';

const Counter = () => {

    const count = useSelector((state) => state.counter.val );
    const dispatch = useDispatch();

  return (
    <div className='flex h-full flex-row justify-center w-full items-center gap-2'>
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>
        {count}
      </div>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  )
}

export default Counter
