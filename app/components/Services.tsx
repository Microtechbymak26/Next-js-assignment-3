import React from 'react'
import Image from "next/image";
import logo from "./Image1.jpg"
import Logo from "./Image2.jpg"
import logo1 from "./Image3.jpg"

const Services = () => {
  return (
   <>
   <section className='mx-auto px-6 p-10 bg-[#7AB2D3]  flex justify-between items-center flex-col'>
    <h2 className='text-4xl font-bold text-center text-gray-800 mb-8'>Services</h2>
    <p className='text-center text-black-600 mb-8'>Here are some of the services we provide</p>
    <div className='flex flex-wrap'>
        <div className='w-full md:w-1/3 px-2 mb-4'>
            <Image src={logo} alt="image 1" className='w-full h-auto rounded-lg shadow-lg'/>
            <h1></h1>
        </div>
        <div className='w-full md:w-1/3 px-2 mb-4'>
          <Image src={logo1} alt='image 2'/>
        </div>
        <div className='w-full md:w-1/3 px-2 mb-4'>
        <Image src={Logo} alt="image 1" className='w-full h-auto rounded-lg shadow-lg'/>
        </div>
    </div>
   </section>
   </>
  )
}

export default Services
