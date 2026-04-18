import React from 'react'

function Footer() {
  return (
    <div>
      <footer className='bg-gray-900 text-white py-10 px-6'>
            <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-8 '>

                <div>
                    <h2 className='text-xl font-bold'>AI Resume</h2>
                    <p className='mt-2 text-gray-400'>Build professional resume easily with AI</p>
                </div>

                <div>
                    <h2 className='font-semibold'>Quick Links</h2>
                    <ul className='flex flex-col gap-4 mt-4 text-gray-400'>
                         <a href="#feature"> Features</a>
                        <a href="#pricing">Pricing</a>
                        <a href="#contact">Contact</a>
        
                    </ul>
                </div>

                <div>
                  <h3 className='font-semibold'>Follow Us</h3>
                  <div className='mt-2 flex gap-4 text-gray-400 flex-col'> 
                    <span>Twitter</span>
                    <span>Github</span>
                    <span>LinkedIn</span>
                  </div>
                </div>

            </div>
            <p className='text-center text-gray-500 mt-10'>
              @ 2026 AI Resume . All right reserved
            </p>
      </footer>
    </div>
  )
}

export default Footer
