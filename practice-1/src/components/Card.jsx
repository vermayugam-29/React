import { useState } from 'react';
import './Card.css'
import Dob from './Dob';


function Card(props) {
    const [name , setName] = useState(props.name);
    const date = props.date;
    const month = props.month;
    const year = props.year;
    
    function clickHandler() {
        console.log(props.nickname);
        setName(props.nickname);
    }
    
    return(
        <>
            <div className='card'>
                <Dob date={date} month={month} year={year}></Dob>
                <p> {name} </p>
                <button onClick={clickHandler}>ClickMe</button>
            </div>
        </>
    );
}

export default Card;
