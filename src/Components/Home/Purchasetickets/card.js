import React from 'react';

function Card({Header , Price}) {
    const buttonHanler =(e)=>{
        e.preventDefault();
    }
  return (
   <div className='flex flex-col shadow-lg   px-10 py-16  text-center rounded-lg w-3/12  '>
        <h1 className=' lg:text-5xl md:text-2xl	sm:text-sm  lg:pt-8 md:pt:6 sm:pt:4 ' > {Header}</h1>
        <p className='lg:text-2xl md:text-1xl	sm:text-sm text-stone-700 lg:pt-8 md:pt:6 sm:pt:4   lg:pb-6 md:pb:4 sm:pb:2 '> {Price}</p>
        <button type="submit" className='lg:text-2xl md:text-1xl sm:text-sm rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white' onClick={buttonHanler} > Purchase </button>

   </div>
  );
}

export default Card;