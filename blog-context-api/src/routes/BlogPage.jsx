import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import Card from '../components/Card';

const BlogPage = () => {

    const newUrl = "https://codehelp-apis.vercel.app/api/";

    const {loading , setLoading} = useContext(AppContext);

    
    const [blog , setBlog] = useState(null);
    const [relatedBlogs , setReltaedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    
    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlog() {
        setLoading(true);
        let url = `${newUrl}get-blog?blogId=${blogId}`;
        try {
            const response = await fetch(url);
            const data = await response.json();

            setBlog(data.blog);
            setReltaedBlogs(data.relatedBlogs);
        } catch (error) {
            setBlog(null);
            setReltaedBlogs([])
        }
        setLoading(false);
    }

    useEffect(() => {
       if(blogId){
        fetchRelatedBlog();
       }
    } ,[location.pathname] )


  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-1'>
      <Header/>
      <div className='max-w-[620px] w-11/12 py-3 flex flex-row gap-x-2 mt-[100px]'>
        <button className='border border-black rounded-md p-1 font-semibold'
        onClick={() => navigation(-1)}>
            Back
        </button>
      </div>

      <div className='w-full h-full flex flex-col items-center justify-center'>
        {
            loading ? <Spinner/> : 
            blog ?
            <div className='max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px]'>
                <Card post={blog}/> 
                <h2 className='text-3xl font-bold'>Related Blogs</h2>
                {
                    relatedBlogs.map((relatedBlog,index) => (
                        <Card key={index} post = {relatedBlog}/>
                    ))
                }
            </div>
            : 
            <p>No Blog Found</p>
        }

      </div>
    </div>
  )
}

export default BlogPage