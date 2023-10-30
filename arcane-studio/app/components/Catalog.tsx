import React from "react";

//This is the catalog component, when Catalog is clicked it will bring you to the catalog part of the website where the items os the business are displayed.
const Catalog = () => {
  return ( 
    <div className='ml-12' id='catalog'>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <div className='text-center text-3xl font-bold mb-4'>Discover our catalog</div>
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