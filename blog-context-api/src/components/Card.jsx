import React from 'react'
import { NavLink } from 'react-router-dom';

const Card = ({post}) => {
    return (
        <div className=''>
            <NavLink to={`/blog/${post.id}`}>
                <p className='font-bold text-sm underline'>{post.title}</p>
            </NavLink>
            <p className='text-[14px]'>
                By <span className="italic">{post.author}</span> or{" "}
                <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                    <span className="underline font-bold">{post.category}</span>
                </NavLink>
            </p>

            <p className="text-[14px]">
                Posted on <span>{post.date}</span>
            </p>

            <p className="text-[16px] mt-[13px]">{post.content}</p>

            <div className="flex flex-wrap gap-x-2 items-center">
                {
                    post.tags.map((tag, index) => (
                        <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                                <span 
                            className="text-xs font-semibold underline text-blue-700 cursor-pointer"
                            > {`#${tag}`} </span>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
}

export default Card
