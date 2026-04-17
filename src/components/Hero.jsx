import React from 'react'
import { motion } from "framer-motion";

function Hero() {
  return (
    <div>
      <div className='min-h-screen text-wrap bg-gray-50 flex items-center justify-center px-6'>
        <div className='max-w-6xl py-20 w-full grid md:grid-cols-2 gap-10 items-center'>



          {/* left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            <div>
              <h1 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight'>Build Your Resume In Minutes With AI</h1>
              <p className='mt-4 text-gray-400 text-lg'>Create professional resumes effortlessly using our AI-powered platform. Save time and stand out . </p>
              <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 hover:scale-105 transition duration-300 cursor-pointer hover:rotate-1 ">
                Get Started
              </button>
            </div>
          </motion.div>



          {/* right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <img src="https://illustrations.popsy.co/gray/work-from-home.svg" alt="hero" className='w-full' />
            </div>

          </motion.div>


        </div>
      </div>
    </div>
  )
}

export default Hero
