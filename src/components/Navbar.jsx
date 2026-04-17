import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className='w-full px-6 py-4 hidden md:flex justify-between items-center max-w-6xl mx-auto '>
            <h1 className='text-xl font-bold'>AI Resume</h1>
            <div className='flex justify-between gap-10'>
                <a href="#feature"> Features</a>
                <a href="#">Pricing</a>
                <a href="#">Contact</a>
            </div>
            <button className='bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 cursor-pointer'>
                Login
            </button>
      </nav>
    </div>
  )
}

export default Navbar
