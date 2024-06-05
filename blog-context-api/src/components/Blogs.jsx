import React, { useContext } from 'react'
import AppContextProvider, { AppContext } from '../context/AppContext';
import Card from './Card';
import Spinner from './Spinner';

const Blogs = () => {
    //consuming data
    const {posts , loading} = useContext(AppContext);

  return (
    <div className='max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px]'>
      {
        loading ? (<Spinner/>) : 
            (
                posts.length === 0 ? (
                    <div>
                        <p>No posts found</p>
                    </div>
                ) :
                (
                    posts.map((post) => (
                        <Card key={post.id} post={post} />   
                    ))
                )
            )
      }
    </div>
  )
}

export default Blogs
