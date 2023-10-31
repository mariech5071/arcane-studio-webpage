import React from "react";

//This is the About component, when About is clicked it will bring you to the About section where information of the business is displayed.
const About = () => {
  return ( 
    <div id='about'>
      <div className='text-center text-4xl font-bold mx-4 mb-4 pt-40 -mt-20' >About Us</div>
      <div className='grid grid-cols-1 lg:grid-cols-2 pb-8'>
        <img src='/images/AboutUs.jpg' className='w-80 inline-block m-auto'></img>
        <p className='mx-4 px-4 mt-4 pt-4 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis. Viverra accumsan in nisl nisi scelerisque. Ac tincidunt vitae semper quis lectus nulla at volutpat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed faucibus turpis in eu. In dictum non consectetur a erat nam at. Id faucibus nisl tincidunt eget nullam non nisi est sit. Viverra mauris in aliquam sem fringilla. Fermentum posuere urna nec tincidunt.</p>
      </div>
    </div>
  )
};

export default About;