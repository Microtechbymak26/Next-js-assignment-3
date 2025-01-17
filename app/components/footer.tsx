import React from 'react'

const footer = () => {
  return (
    <>
      <footer className='bg-[#4A628A]'>
        <div className='container mx-auto px-6 pt-10 pb-6'>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/4 text-center md:text-left'>
                <h5 className='uppercase mb-6 font-bold'>Links</h5>
                <ul className='mb-4'>
                     <li className='mt-2'><a href='#' className='hover:underline text-black-600 hover:text-orange-500'>FAQ</a></li>
                     <li className='mt-2'><a href='#' className='hover:underline text-black-600 hover:text-orange-500'>Help</a></li>
                     <li className='mt-2'><a href='#' className='hover:underline text-black-600 hover:text-orange-500'>Support</a></li>
                  </ul>
                </div>
                <div className='w-full md:w-1/4 text-center md:text-left'>
                <h5 className='uppercase mb-6 font-bold'>Legal</h5>
                <ul className='mb-4'>
                    <li className='mt-2'><a href='#' className='hover:underline text-black-600 hover:text-orange-500'>Terms</a></li>
                    <li className='mt-2'><a href='#' className='hover:underline text-black-600 hover:text-orange-500'>Privacy</a></li>
                 </ul>
                 </div>
                 <div className='w-full md:w-1/4 text-center md:text-left'>
                 <h5 className='uppercase mb-6 font bold '>Social</h5>
                 <ul className='mb-4'>
                    <li className='mt-2'><a href='#' className='hover:underline text-black-600 hover:text-orange-500'>Facebook</a></li>
                    <li className='mt-2'><a href='#' className='hover:underline text-black-600 hover:text-orange-500'>Linkdin</a></li>
                    <li className='mt-2'><a href='#' className='hover:underline text-black-600 hover:text-orange-500'>Twitter</a></li>
                 </ul>
                 </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default footer
