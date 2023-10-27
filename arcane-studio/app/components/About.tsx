import React from "react";

//This is the About component, when About is clicked it will bring you to the About section where information of the business is displayed.
const About = () => {
  return ( 
    <div>
      <div className='text-center pt-5 text-3xl font-bold m-4' id='about'>About Us</div>
      <div className='grid grid-cols-1 lg:grid-cols-2 pb-8'>
        <img></img>
        <p className='m-4 p-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis. Viverra accumsan in nisl nisi scelerisque. Ac tincidunt vitae semper quis lectus nulla at volutpat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed faucibus turpis in eu. In dictum non consectetur a erat nam at. Id faucibus nisl tincidunt eget nullam non nisi est sit. Viverra mauris in aliquam sem fringilla. Fermentum posuere urna nec tincidunt.</p>
      </div>
    </div>
  )
};

export default About;