import React from 'react'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setisOpen] = useState(false)
  return (
    <div>
      <nav >
        {/* desktop view */}
        <div className='w-full px-6 py-4 hidden md:flex justify-between items-center max-w-6xl mx-auto '>
          <h1 className='text-xl font-bold'>AI Resume</h1>
          <div className='flex justify-between gap-10'>
            <a href="#feature"> Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>
          <button className='bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 cursor-pointer'>
            Login
          </button>

        </div>

      {/* mobile view */}
        <div className='md:hidden '>
          <button className='font-bold text-3xl px-6  ' onClick={() => setisOpen(!isOpen)}>☰</button>
        </div>


        {isOpen && (
          <div className='absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 md:hidden '>
            <a href="#feature" onClick={()=>setisOpen(false)}>Feature</a>
            <a href="#pricing" onClick={()=>setisOpen(false)}>Pricing</a>
            <a href="#contact" onClick={()=>setisOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

    </div>
  )
}

export default Navbar
