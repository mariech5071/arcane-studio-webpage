import React from "react";

//This is the catalog component, when Catalog is clicked it will bring you to the catalog part of the website where the items os the business are displayed.
const Catalog = () => {
  return ( 
    <div id='catalog'>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <div className='text-center text-4xl font-bold mb-14'>Discover our catalog</div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 place-items-center px-6'>
          <div>
            <img src='/images/Ima-01.png' className='w-full'></img>
            <h2 className='font-bold'>Product 1</h2>
            <p>in est ante in nibh mauris</p>
          </div>
          <div>
            <img src='/images/Ima-02.png' className='w-full'></img>
            <h2 className='font-bold'>Product 2</h2>
            <p>in est ante in nibh mauris</p>
          </div>
          <div>
            <img src='/images/Ima-03.png' className='w-full'></img>
            <h2 className='font-bold'>Product 3</h2>
            <p>in est ante in nibh mauris</p>
          </div>
          <div>
            <img src='/images/Ima-04.png' className='w-full'></img>
            <h2 className='font-bold'>Product 4</h2>
            <p>in est ante in nibh mauris</p>
          </div>
        </div>
    </div>
  )

};

export default Catalog;