import React from "react";

//This is the About component, when About is clicked it will bring you to the About section where information of the business is displayed.
const Footer = () => {
  return ( 
    <div className=' bg-black text-white p-8'>
        <div className='flex justify-between'>
            <h1 className='p-3'>Arcane Studios</h1>
            <div className='flex items-center'>
                <p className='p-3 float-left'>Follow Us</p>
                <a href='https://www.instagram.com/good.luck.bryan/' target='_blank'><img className='w-8 float-right ml-3' src='/images/InstagramLogo.png' ></img></a>
                <a href='https://www.linkedin.com/in/hernandezbryanho/' target='_blank'><img className='w-8 float-right ml-3' src='/images/linkedin.png'></img></a> 
            </div>
        </div>
        <hr className='decoration-white'></hr>
        <p className='pt-3 text-sm'>© 2023 Arcane Studio. All Rights Reserved.</p>
    </div>

  )
};

export default Footer;