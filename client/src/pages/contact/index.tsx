import PageTemplate from '@/PageTemplate/PageTemplate'
import { useStore } from '@/context/messages';
import React from 'react'
import { useFormik } from 'formik'
import { toast } from 'react-toastify';
import * as Yup from 'yup';

function Contact() {
  const { createMessage } = useStore();

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      message:''
    },
    validationSchema: Yup.object({
        email: Yup.string()
                  .email('Please enter a valid email')
                  .required('Email is required'),
        name: Yup.string()
                     .required('Password is required'),
        message: Yup.string()
    }),
    onSubmit: async values => {
      
      try{
        await createMessage(values)
        toast.success('Message sent')
      }catch(error){
        throw error
      }
     
    },
  });


  return (
    <PageTemplate>
      <>
      <div className='bg-gradient-custom bg-right bg-cover h-screen flex flex-col justify-center items-center'>
      <div className='flex  md:w-1/2'>
      <h1 className='skew-x-12 md:skew-x-45 text-5xl lg:text-7xl uppercase inline-block font-extrabold text-white'>Get in touch</h1>
      </div>
      <div className="container mx-auto px-4">
      <form onSubmit={formik.handleSubmit} className="px-8 pt-6 pb-8 mb-4">
        <div className="flex flex-col md:flex-row justify-evenly md:justify-center h-[10rem] md:h-auto mb-4 w-full">
         
          <input
            className="shadow appearance-none border rounded md:w-1/4 w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name" name="name" type="text" placeholder="Your Name" value={formik.values.name} onChange={formik.handleChange}
          />
  
          <input
            className="shadow appearance-none border rounded md:w-1/4 w-full py-2 px-3 text-gray-700 leading-tight ml-0 md:ml-2 focus:outline-none focus:shadow-outline"
            id="email" type="email" name="email" placeholder="Email Address" value={formik.values.email} onChange={formik.handleChange}
          />
        </div>
        <div className="flex justify-center mb-4">
        <textarea
          name="message"
          placeholder='Message'
          value={formik.values.message}
          onChange={formik.handleChange}
          rows={5}
          cols={55}
          className="shadow appearance-none border rounded w-full md:w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
        /> 
         
        </div>
        <div className="flex items-center justify-center">
          <button
            className='bg-gradient-to-r from-[rgb(48,37,95)] to-[rgb(187,214,253)] capitalize text-white font-bold py-2 px-4 rounded-r'
            type="submit"
          >
              Send me your Message
          </button>
        </div>
      </form>
    </div>
    </div>
      </>
    </PageTemplate>
  )
}

export default Contact