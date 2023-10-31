import React from "react";

//This is the services components, when services is clicked it will bring you to the services part of the website. Here are displayed the services offered by the business.
const Services = () => {
  return (
   <div id='services'>
      <br></br>
      <br></br>
      <br></br>
      <div className='text-center pt-5 text-4xl font-bold'>Our Services</div>
      <p className='text-center m-8 px-12 text-lg' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Quis enim lobortis scelerisque fermentum. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. </p>
    <div className='mx-12 p-8 md:p-0 grid grid-cols-1 md:grid-cols-2 '>
        <img src='/images/Robot.jpg' className='w-80 md:inline-block m-auto hidden'></img>
        <div className='flex flex-col justify-center items-left'>
          <div className='bg-white border-4 rounded-md shadow-gray-500/40 hover:scale-110'>
            <h1 className='m-6 font-semibold text-2xl '>Service 1</h1>
            <p className='ml-4 mb-4 mr-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor morbi non arcu.</p>
          </div>
        </div>
      </div>
      <div className='mx-12 p-8 md:p-0 grid grid-cols-1 md:grid-cols-2'>
        <div className='flex flex-col justify-center items-left'>
          <div className='bg-white border-4 rounded-md shadow-gray-500/40 hover:scale-110'>
            <h1 className='m-6 font-semibold text-2xl'>Service 2</h1>
            <p className='ml-4 mb-4 mr-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor morbi non arcu.</p>
          </div>
        </div>
        <img src='/images/Videogames.jpg' className='w-80 md:inline-block m-auto hidden'></img>
      </div>
      <div className='mx-12 p-8 md:p-0 grid grid-cols-1 md:grid-cols-2'>
        <img src='/images/Designing.jpg' className='w-80 md:inline-block m-auto hidden'></img>
        <div className='flex flex-col justify-center items-left'>
          <div className='bg-white border-4 rounded-md shadow-gray-500/40 hover:scale-110'>
            <h1 className='m-6 font-semibold text-2xl'>Service 3</h1>
            <p className='ml-4 mb-4 mr-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor morbi non arcu.</p>
          </div>
        </div>
      </div>
      <div className='mx-12 p-8 md:p-0 grid grid-cols-1 md:grid-cols-2'>
        <div className='flex flex-col justify-center items-left'>
          <div className='bg-white border-4 rounded-md shadow-gray-500/40 hover:scale-110'>
            <h1 className='m-6 font-semibold text-2xl'>Service 4</h1>
            <p className='ml-4 mb-4 mr-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor morbi non arcu.</p>
          </div>
        </div>
        <img src='/images/Programming.jpg' className='w-80 md:inline-block m-auto hidden'></img>
      </div>
   </div>
  )
};

export default Services;