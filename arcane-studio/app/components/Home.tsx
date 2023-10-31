import React from "react";

//This is the home component, when home is clicked it will bring you to the top of the website
const Home = () => {
  return (
  <div className="md:bg-[url('/images/Home.jpg')] bg-[url('/images/Home2.png')] w-full h-60 md:h-full bg-cover pt-20" id='home'>
      <h1 className='text-white font-semibold px-8 pt-8 text-6xl md:visible invisible' >Virtual Reality</h1>
      <p className='text-white text-lg px-8 pt-4 pb-10 md:visible invisible'>create your own experience</p>
      <div className='grid md:grid-cols-5 grid-cols-2'>
        <div>
          <h2 className='text-base text-white font-semibold px-8 md:visible invisible'>Service</h2>
          <p className='text-white p-4 px-8 md:visible invisible'>Lorem ipsum dolor sit amet. Massa tincidunt dui ut ornare.</p>
        </div>
        <div>
          <h2 className='text-base text-white font-semibold px-4 md:visible invisible' >Service</h2>
          <p className='text-white p-4 md:visible invisible'>Lorem ipsum dolor sit amet, dolore magna aliqua. Massa tincidunt dui ut ornare.</p>
        </div>
    </div>
  </div>
  )
};

export default Home;