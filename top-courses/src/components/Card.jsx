import React, { useState } from 'react'
import { FcLike , FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify';


const Card = (props) => {
    let course = props.course;
    let liked = props.liked;
    let setLiked = props.setLiked;

    function likeHandler(){
        if(liked.includes(course.id)){
            setLiked((prev) => prev.filter((currId) => currId !== course.id));
            toast.warning("Like removed");
        } else {
            if(liked.length === 0){
                setLiked([course.id]);
            } else {
                setLiked((prev) => [...prev , course.id]);
            }
            toast.success("Liked Successfully");
        }
    }

    return (
        <div className='bg-bgDark bg-opacity-80 w-[300px] rounded-md overflow-hidden'>

        <div className='relative'>
            <img src={course.image.url}></img>

        <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
            <button onClick={likeHandler}>
                {
                    !liked.includes(course.id) ? <FcLikePlaceholder fontSize="1.75rem" /> : <FcLike fontSize = "1.75rem"/>
                }
            </button>
        </div>

        </div>


        <div className='p-4'>
            <p className='text-white text-lg font-semibold leading-6'>{course.title}</p>
            <p className='mt-2 text-white'>
                {
                    course.description.length > 100 ? 
                    (course.description.substring(0,100)) + "..."
                    : (course.description)
                }
            </p>
        </div>

        </div>
    )
}

export default Card
