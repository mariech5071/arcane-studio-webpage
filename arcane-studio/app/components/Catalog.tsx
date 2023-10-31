import React from "react";

//This is the catalog component, when Catalog is clicked it will bring you to the catalog part of the website where the items os the business are displayed.
const Catalog = () => {
  return ( 
    <div className='ml-12' id='catalog'>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <div className='text-center text-4xl font-bold mb-4'>Discover our catalog</div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3'>
          <div>
            <img src='/images/Ima-01.png' className='w-3/4 p-3'></img>
            <h2 className='font-bold'>Product 1</h2>
            <p>in est ante in nibh mauris</p>
          </div>
          <div>
            <img src='/images/Ima-02.png' className='w-3/4 p-3'></img>
            <h2 className='font-bold'>Product 2</h2>
            <p>in est ante in nibh mauris</p>
          </div>
          <div>
            <img src='/images/Ima-03.png' className='w-3/4 p-3'></img>
            <h2 className='font-bold'>Product 3</h2>
            <p>in est ante in nibh mauris</p>
          </div>
          <div>
            <img src='/images/Ima-04.png' className='w-3/4 p-3'></img>
            <h2 className='font-bold'>Product 4</h2>
            <p>in est ante in nibh mauris</p>
          </div>
        </div>
    </div>
  )

};

export default Catalog;