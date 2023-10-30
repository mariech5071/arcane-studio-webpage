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
    <div className='bg-zinc-600 grid grid-cols-1 lg:grid-cols-2 p-3'>
      <div className=' pt-5  text-white flex flex-col items-center lg:items-left justify-center' id='contact'>
        <h1 className='text-3xl font-bold pb-3'>Contact Us</h1>
        <p className='font-bold'>info@arcanestudio.com</p>
        <p>Enter your information to contact us!</p>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className=' border rounded-md p-5 m-2 bg-white'>
          <div className='w-full flex flex-col'>
            <label htmlFor='name'>Name</label>
            <input className='border border-gray-400 rounded-md' required type='text' id='name' {...register('name', { required: true })}></input>
          </div>
          <div className='w-full flex flex-col'>
            <label htmlFor='email'>Email</label>
            <input className=' border border-gray-400 rounded-md' required type='email' id='email' {...register('email', { required: true })}></input>
          </div>
          <div className='w-full flex flex-col'>
            <label htmlFor='country'>Country</label>
            <input className=' border border-gray-400 rounded-md' type='text' id='country' {...register('country', { required: true })}></input>
          </div>
          <div className='w-full flex flex-col'>
            <label htmlFor='message'>Message</label>
            <textarea className=' border border-gray-400 rounded-md' required rows={3}  id='message' {...register('message', { required: true })}></textarea>
          </div>
          <button type='submit' className='hover:shadow-form rounded-md bg-zinc-600 py-3 px-5 mt-5 text-base font-semibold text-white outline-none'>Submit</button>
        </form>
      </div>
    </div>
  )
};

export default Contact;