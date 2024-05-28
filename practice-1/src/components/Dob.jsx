import './Dob.css'

function Dob(props){
    const date = props.date;
    const month = props.month;
    const year = props.year;

    return(
      <>
        <div className='dob'>
            <span> {month} </span>
            <span> {year} </span>
            <span className='date'> {date} </span>
        </div>
      </>  
    );
}

export default Dob;