import React from 'react'

function Footer() {
  return (
    <div>
      <footer className='bg-gray-900 text-white py-10 px-6'>
            <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-8'>

                <div>
                    <h2 className='text-xl font-bold'>AI Resume</h2>
                    <p className='mt-2 text-gray-400'>Build professional resume easily with AI</p>
                </div>

                <div>
                    <h2 className='font-semibold'>Quick Links</h2>
                    <ul>
                        <li><a href="">Features</a></li>
                    </ul>
                </div>

            </div>
      </footer>
    </div>
  )
}

export default Footer
