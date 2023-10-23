import React from "react";

//This is the catalog component, when Catalog is clicked it will bring you to the catalog part of the website where the items os the business are displayed.
const Catalog = () => {
  return ( 
    <div className='p-10 ml-10'>
        <div className='text-center pt-5 text-3xl font-bold' id='catalog'>Discover our catalog</div>
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