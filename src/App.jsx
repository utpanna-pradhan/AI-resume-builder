import React from 'react'

function App() {
  return (
    <div>
      <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
        <div className='max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center'>



          {/* left */}
          <div> 
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight'>Build Your Resume In Minutes With AI</h1>
            <p className='mt-4 text-gray-400 text-lg'>Create professional resumes effortlessly using our AI-powered platform. Save time and stand out . </p>
            <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 hover:scale-105 transition duration-300 cursor-pointer ">
              Get Started
            </button>
          </div>


          {/* right */}
          <div>
            <img src="https://illustrations.popsy.co/gray/work-from-home.svg" alt="hero" className='w-full' />
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
