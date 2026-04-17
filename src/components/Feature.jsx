import React from 'react'
import {motion} from 'framer-motion'
function Feature() {
  return (
    <>
    <motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  className="p-6 bg-white rounded-xl shadow"
>
  <section className='max-w-6xl mx-auto px-6 py-20' id='feature'>
        <h2 className='text-3xl font-bold text-center'>Features</h2>
        <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <div className='mt-12 grid gap-8 md:grid-cols-3'>

            <div className='p-6 bg-white rounded-xl shadow hover:shadow-lg transition'>
                <h3 className='text-xl font-semibold'>AI Powered</h3>
                <p className='text-gray-600 mt-2'>Generate resumes instantly using AI.</p>
            </div>

            <div className='p-6 bg-white rounded-xl shadow gover:shadow-lg transition'>
                <h3 className='text-xl font-semibold'>Easy to use</h3>
                <p className='text-gray-600 mt-2'>Simple interface for everyone .</p>
            </div>

            <div className='p-6 bg-white rounded-xl shadow gover:shadow-lg transition'>
                <h3 className='text-xl font-semibold'>Customizable</h3>
                <p className='text-gray-600 mt-2'>Edit and personalize easily .</p>
            </div>ƒ

        </div>
</motion.div>
      
    </section>
</motion.div>
  
    </>
  )
}

export default Feature
