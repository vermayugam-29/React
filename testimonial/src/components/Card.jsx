import React, { useEffect, useState } from 'react';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const images = import.meta.glob('../assets/*.{jpg,png,gif}');

const Card = (props) => {
  const reviews = props.reviews;
  let idx = props.idx;
  let setIdx = props.setIdx;


  function prevHandler() {
    setIdx(idx === 0 ? 3 : idx - 1);
  }
  function nextHandler(){
    setIdx((idx + 1) % 4);
  }
  function randomhandler(){
    let random = Math.floor(Math.random()*4);
    setIdx(random);
  }

  const getImage = (path) => {
    const imagePath = images[`../assets/${path.split('/').pop()}`];
    return imagePath ? imagePath().then((mod) => mod.default) : null;
  };

  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    getImage(reviews.image).then(setImageSrc);
  }, [reviews.image]);


  return (
    <div className='flex flex-col relative'>

      <div className='absolute top-[-7rem] z-[10] mx-auto'>
        {imageSrc && <img className='aspect-square rounded-full w-[140px] h-[140px] z-25' src={imageSrc} alt={reviews.name} />}

        <div className='absolute top-[-6px] rounded-full w-[140px] h-[140px] z-[-20] left-[10px] bg-white'></div>
      </div>
 
      <div className='text-center mt-7'>
        <p className='text-3xl font-bold'>{reviews.name}</p>
      </div>

      <div className='text-center mt-7'>
        <p className='text-violet-800 uppercase text-sm'>{reviews.job}</p>
      </div>

      <div className='text-violet-700 mx-auto'>
        <FaQuoteLeft />
      </div>

      <div className='text-center mt-4 font-thin'>
        <p>{reviews.text}</p>
      </div>

      <div className='text-violet-700 mx-auto mt-2'>
        <FaQuoteRight />
      </div>


      <div className='flex flex-row text-3xl gap-3 items-center justify-center text-violet-700 mt-[10px]'>
        <button className='hover:text-violet-400' onClick={prevHandler}>
            <IoIosArrowBack />
        </button>
        <button className='hover:text-violet-400' onClick={nextHandler}>
            <IoIosArrowForward />
        </button>
      </div>

      <div>
        <button onClick={randomhandler}
         className='mt-10 bg-violet-700 hover:bg-violet-400 transition-all duration-200 rounded-md font-bold py-1 px-3'>
            Hit Me
        </button>
      </div>

    </div>
  );
};

export default Card;
