import data from './data.jsx'
import List from './components/List.jsx';
import { useState } from 'react';

function App() {
  const [tours,setTours] = useState(data);

  function removeTour(id){
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  }

  if(tours.length === 0){
    return(
      <div className='flex flex-col h-[600px] gap-3 justify-center items-center'>

        <p className='text-xl'>You have reacted to all the Jyotirlingas</p>

        <button className='bg-white rounded-xl text-black p-1 font-bold text-xl'
          onClick={() => setTours(data)}>
          Refresh 
        </button>

      </div>
    );
  }

  return (
    <>
      <List tours={tours} removeTour={removeTour}></List>
    </>
  )
}

export default App;