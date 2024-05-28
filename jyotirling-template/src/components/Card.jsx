import { useState } from "react";

function Card({id,name,state,info,image,removeTour}){
    const [readMore,setReadMore] = useState(false);

    const description = !readMore ? `${info.substring(0,200)}...` : info;

    function readMoreHandler(){
        setReadMore(!readMore)
    }


    return(
        <div className="flex flex-col w-[20%] border-2  border-solid rounded-lg items-center justify-center gap-2">
            <div className="p-3">
                <img className="w-[1300px] h-[280px] rounded-xl"
                src={image}/>
            </div>

            <div className="flex flex-col justify-center items-center">
                <p className="text-2xl font-bold">{name}</p>
                <p className="font-bold">{state}</p>
                <p>
                    {description}
                    <span className="cursor-pointer text-blue-600"
                    onClick={readMoreHandler}>
                        {!readMore ? `Read More` : `Show Less`}
                    </span>
                </p>
            </div>

            <button className="bg-white rounded-lg text-black p-3 mb-4"
             onClick={()=> removeTour(id)}>
                Har Har Mahadev
            </button>
        </div>
    );
}

export default Card;