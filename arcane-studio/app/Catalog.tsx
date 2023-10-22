import React from "react";

const Catalog = () => {
  return ( 
    <div>
        <div className='text-center pt-5 text-3xl font-bold'>Discover our catalog</div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3'>
            <img src='/images/rectangle.png' className='w-3/4 p-3'></img>
            <img src='/images/rectangle.png' className='w-3/4 p-3'></img>
            <img src='/images/rectangle.png' className='w-3/4 p-3'></img>
            <img src='/images/rectangle.png' className='w-3/4 p-3'></img>
            <img src='/images/rectangle.png' className='w-3/4 p-3'></img>
            <img src='/images/rectangle.png' className='w-3/4 p-3'></img>
            <img src='/images/rectangle.png' className='w-3/4 p-3'></img>
            <img src='/images/rectangle.png' className='w-3/4 p-3'></img>
        </div>
    </div>
  )

};

export default Catalog;