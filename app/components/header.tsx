import React from 'react'

const header = () => {
  return (
   <> 
        <header className='bg-[#DFF2EB] py-4 text-black '>
        <div className='container mx auto px-6 flex justify-between items-center'>
        <a className='text-2xl font-bold' href='#'>MAK Enterprises</a>
        <nav className='hidden lg:block'>
        <ul className='inline-flex'>
            <li><a className='px-4 font-bold' href='#'>Home</a></li>
            <li><a className='px-4 hover:text-orange-500' href='#'>About</a></li>
            <li><a className='px-4 hover:text-orange-500' href='#'>Contact</a></li>
            <li><a className='px-4 hover:text-orange-500' href='#'>Services</a></li>
        </ul>
        </nav>
        </div>
      </header>
    </>
  )
}

export default header
