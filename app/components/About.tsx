import React from 'react'

const About = () => {
  return (
    <>
    <section className='px-6 p-10 bg-[#B9E5E8] flex justify-between items-center flex-col'>
        <h2 className='text-4xl font-bold text-center text-black-800 mb-8'>
            About Us
        </h2>  
        <p className='text-black-600 mb-8'>
            This is a simple web application built using Next.js and Tailwind CSS. It demonstrates the capabilities of Next.js for server-side rendering and static site generation, as well as the use of Tailwind CSS for styling.
        </p>
        <p className='text-black-600 mb-8'>
        The application is designed to be responsive and mobile-friendly, ensuring that users can access and manage the products on their devices of all sizes.
        </p>
        <p className='text-black-600 mb-8'>
        The source code is available on GitHub at <a href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" className='text-black-500 hover:underline'>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</a>
        </p>
        <p className='text-black-600 mb-8'>
        Thanks for visiting
        </p>
        <p className='text-black-600 mb-8'>
        Ateeb Kashif, 2024
        </p>
    </section>
    </>
  )
}

export default About
