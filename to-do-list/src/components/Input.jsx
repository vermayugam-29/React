import React, { useState } from 'react'
import '../components/Input.css'
import Card from './Card'
import toast from 'react-hot-toast';



const Input = ({idx,setIdx,lists,setLists}) => {

    const [task , setTask] = useState('');

    const changeHandler = (e) => {
        setTask(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (task === '') {
            toast.error("Please enter a valid task");
            return;
        }
        const newTask = { id: idx,task : task };
        setLists((prev) => [...prev, newTask]);
        setIdx(idx+1);
        setTask('');
    }

  return (
    <div className='container'>
      <form className='form' onSubmit={submitHandler}>
        <input className='inputBox' value={task} onChange={changeHandler} type="text" />
        <button className='btn' type='submit'>Enter</button>
      </form>


      <div className='innerContainer'>
        {
            lists.map( (list) => {
                return <Card index={list.id} lists={lists} key={list.id} list={list} setLists={setLists} />
            })
        }
      </div>
    </div>
  )
}

export default Input
