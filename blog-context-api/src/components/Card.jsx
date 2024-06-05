import React from 'react'

const Card = ({post}) => {
    return (
        <div>
            <p className='font-bold text-sm '>{post.title}</p>
            <p className='text-[14px]'>
                By <span className="italic">{post.author}</span> or{" "}
                <span className="underline font-bold">{post.category}</span>
            </p>

            <p className="text-[14px]">
                Posted on <span>{post.date}</span>
            </p>

            <p className="text-[16px] mt-[13px]">{post.content}</p>

            <div className="flex flex-wrap gap-x-2 items-center">
                {
                    post.tags.map((tag, index) => {
                        return <span key={index}
                        className="text-xs font-semibold underline text-blue-700 cursor-pointer"
                        > {`#${tag}`} </span>
                    })
                }
            </div>
        </div>
    );
}

export default Card
