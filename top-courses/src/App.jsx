import { useEffect, useState } from 'react'
import { filterData , apiUrl} from './data'
import Navbar from './components/Navbar'
import List from './components/List'
import Filter from './components/Filter'
import { toast } from 'react-toastify'
import Spinner from './components/Spinner'


function App() {

  const [courses , setCourses] = useState([]);
  const [loading , setLoading] = useState(true);
  const [category , setCategory] = useState("All");


  const fetchData = async() => {
      setLoading(true);
      try {
        const requestData = await fetch(apiUrl);
        const response = await requestData.json();

        setCourses(response.data);
      } catch (err) {
        toast.error("Something went wrong");
      }
      setLoading(false);
  }

  useEffect( () => {
    fetchData();
  },[])

  return (
    <div className='flex flex-col min-h-screen bg-bgDark2'>

      <div>
        <Navbar/>
      </div>

     <div className="bg-bgDark2">
      <div>
          <Filter
          filterData = {filterData} category={category} setCategory={setCategory}
          />
      </div>
  
      <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
        {
          loading ? (<Spinner/>) : <List category = {category} courses = {courses}/>
        }
      </div>
      </div>
    </div>
  )
}

export default App
