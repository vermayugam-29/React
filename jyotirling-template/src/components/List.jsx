import Card from './Card.jsx'

function List({tours,removeTour}){
    return(
        <div className='flex flex-col justify-center items-center gap-4'>
            <h1 className='text-4xl font-bold rounded-lg border-dashed border-4 p-[10px]'>
                Jyotirlingas
            </h1>
            <div className='flex flex-wrap items-center justify-center w-[100%] gap-3'>
                {
                    tours.map((tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    );
}

export default List;