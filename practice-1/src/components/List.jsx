import './List.css'
import Card from './Card'

function List(props){
    
    return(
        <div className='mainBody'>
            <div className='list'>

                {
                    props.details.map((detail,index) => (
                            <Card
                            key={index}  // Unique identifier for each Card
                            name={detail.name}
                            date={detail.date}
                            month={detail.month}
                            year={detail.year}
                            nickname={detail.nickname}
                            />
                    ))
                }

            </div>
        </div>
    );
}

export default List;

// import './List.css'
// import Card from './Card'

// function List(props) {
//     return (
//         <div className='mainBody'>
//             <div className='list'>
//                 {props.details.map((detail, index) => (
//                     <Card
//                         key={index}
//                         name={detail.name}
//                         date={detail.date}
//                         month={detail.month}
//                         year={detail.year}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default List;
