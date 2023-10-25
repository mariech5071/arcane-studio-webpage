'use client';

import React from "react";
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

export type FormData = {
  name: string;
  email: string;
  country: string;
  message: string;
};

//This is the Contact component, when Contact is clicked it will bring you to this part where there is a form to contact the business.
const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }
  return (
    <div className='bg-gray-400'>
      <div className='text-center pt-5 text-3xl font-bold w-1/2 float-left' id='contact'>Contact</div>
      <div className='w-1/2 float-right'>
        <form onSubmit={handleSubmit(onSubmit)} className=' border rounded-md p-5 m-2'>
          <div className='w-full flex flex-col'>
            <label htmlFor='name'>Name</label>
            <input className='border border-gray-400 rounded-md' required type='text' id='name'></input>
          </div>
          <div className='w-full flex flex-col'>
            <label htmlFor='email'>Email</label>
            <input className=' border border-gray-400 rounded-md' required type='email' id='email' ></input>
          </div>
          <div className='w-full flex flex-col'>
            <label htmlFor='country'>Country</label>
            <input className=' border border-gray-400 rounded-md' type='text' id='country'></input>
          </div>
          <div className='w-full flex flex-col'>
            <label htmlFor='message'>Message</label>
            <input className=' border border-gray-400 rounded-md' required type='text' id='message'></input>
          </div>
          <button type='submit' className='hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none'>Submit</button>
        </form>
      </div>
    </div>
  )
};

export default Contact;