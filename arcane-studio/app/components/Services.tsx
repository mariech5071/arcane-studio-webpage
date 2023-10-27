import React from "react";

//This is the services components, when services is clicked it will bring you to the services part of the website. Here are displayed the services offered by the business.
const Services = () => {
  return (
   <div>
      <div className='text-center pt-5 text-3xl font-bold' id='services'>Our Services</div>
      <p className='tex-center m-8' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Quis enim lobortis scelerisque fermentum.</p>
      <div className='m-4 p-8 grid grid-cols-1 lg:grid-cols-2'>
        <img></img>
        <div className='bg-white border-4 rounded-md shadow-gray-500/40'>
          <h1 className='m-6 font-semibold text-2xl'>Service 1</h1>
          <p className='ml-4 mb-4 mr-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor morbi non arcu.</p>
        </div>
      </div>
      <div className='m-4 p-8 grid grid-cols-1 lg:grid-cols-2'>
        <div className='bg-white border-4 rounded-md shadow-gray-500/40'>
          <h1 className='m-6 font-semibold text-2xl'>Service 2</h1>
          <p className='ml-4 mb-4 mr-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor morbi non arcu.</p>
        </div>
        <img></img>
      </div>
      <div className='m-4 p-8 grid grid-cols-1 lg:grid-cols-2'>
        <img></img>
        <div className='bg-white border-4 rounded-md shadow-gray-500/40'>
          <h1 className='m-6 font-semibold text-2xl'>Service 3</h1>
          <p className='ml-4 mb-4 mr-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor morbi non arcu.</p>
        </div>
      </div>
      <div className='m-4 p-8 grid grid-cols-1 lg:grid-cols-2'>
        <div className='bg-white border-4 rounded-md shadow-gray-500/40'>
          <h1 className='m-6 font-semibold text-2xl'>Service 4</h1>
          <p className='ml-4 mb-4 mr-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor morbi non arcu.</p>
        </div>
        <img></img>
      </div>
   </div>
  )
};

export default Services;