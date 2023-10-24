import React from "react";

//This is the Contact component, when Contact is clicked it will bring you to this part where there is a form to contact the business.
const Contact = () => {
  return (
    <div>
      <div className='text-center pt-5 text-3xl font-bold' id='contact'>Contact</div>
      <form>
        <div className='w-full flex flex-col'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name'></input>
        </div>
        <div className='w-full flex flex-col'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email'></input>
        </div>
        <div className='w-full flex flex-col'>
          <label htmlFor='organization'>Organization</label>
          <input type='text' id='organization'></input>
        </div>
        <div className='w-full flex flex-col'>
          <label htmlFor='job-title'>Job Title</label>
          <input type='text' id='job-title'></input>
        </div>
        <div className='w-full flex flex-col'>
          <label htmlFor='country'>Country</label>
          <input type='text' id='country'></input>
        </div>
        <div className='w-full flex flex-col'>
          <label htmlFor='inquiry'>Brief description of your inquiry</label>
          <input type='text' id='inquiry'></input>
        </div>
      </form>
    </div>
  )
};

export default Contact;