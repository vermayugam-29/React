import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { IoIosArrowUp , IoIosArrowDown} from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import '../components/Card.css'
import { TiTick } from "react-icons/ti";

const Card = ({index,lists,list,setLists}) => {

    const[currTask,setCurrTask] = useState(list.task);

    const [edit,setEdit] = useState(true);

    const clickHandler = () => {
        setLists((prev)=> prev.filter((task) => task.id !== list.id));
    }

    const upHandler = () => {
        if(lists.length === 1 || index === 0){
            return;
        }
        let newList = [...lists];
        let temp = newList[index];
        newList[index] = newList[index - 1];
        newList[index - 1] = temp;
        for(let i = 0;i < lists.length; i++){
            newList[i].id = i;
        }
        setLists([...newList]);
    }

    const downHandler = () => {
        if(lists.length === 1 || index === lists.length-1){
            return;
        }
        let newList = [...lists];
        let temp = newList[list.id];
        newList[list.id] = newList[list.id + 1];
        newList[list.id + 1] = temp;
        for(let i = 0;i < lists.length; i++){
            newList[i].id = i;
        }
        setLists([...newList]);
    }
    

    const editHandler = () => {
        setEdit(!edit);
    }

    const changeHadler = (e) => {
        setCurrTask(e.target.value);
        let newList = [...lists];
        const newTask = { id: index,task : currTask };
        newList[index] = newTask;
        setLists(newList);
    }

  return (
    <div className='cardsDiv'>
        <input className='to-do-output' readOnly={edit} type="text" onChange={changeHadler} value={currTask}/>
        <button className='btns' onClick={clickHandler}><MdDelete /></button>
        <button className='btns' onClick={upHandler}><IoIosArrowUp /></button>
        <button className='btns' onClick={downHandler}><IoIosArrowDown /></button>
        <button className='btns' onClick={editHandler}>{!edit ? <TiTick /> :<CiEdit />}</button>
    </div>
  )
}

export default Card
