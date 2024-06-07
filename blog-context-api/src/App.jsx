import './App.css'
import Home from './routes/Home';
import BlogPage from './routes/BlogPage';
import TagPage from './routes/TagPage';
import CategoryPage from './routes/CategoryPage';
import { Routes, Route, useSearchParams, useLocation } from 'react-router-dom';
import { useContext , useEffect } from 'react';
import { AppContext } from './context/AppContext';


const App = () => {

  const { fetchBlog } = useContext(AppContext);

  const [searchParams , setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," "); //at -1 means what is present at last index
      fetchBlog(Number(page), tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlog(Number(page), null, category);
    } else {
      fetchBlog(Number(page));
    }
  }, [location.pathname , location.search])


  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blog/:blogId' element={<BlogPage />} />
      <Route path='/tags/:tag' element={<TagPage />} />
      <Route path='/categories/:category' element={<CategoryPage />} />
    </Routes>
  );
}

export default App
