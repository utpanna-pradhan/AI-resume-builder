import React from 'react'

function Contact() {
  return (
   <section id='contact' className='px-6 py-20 max-w-4xl mx-auto  '>
    <h2 className='text-3xl font-bold text-center'>Contact Us</h2>
    <textarea rows="5" placeholder='Your Message' className=' mt-10 w-full p-3 border rounded-lg focus:outline-none
    focus:ring-black'></textarea>
    <button type='submit' className='cursor-pointer w-full bg-black 
    text-white py-3 rounded-lg hover:bg-gray-800 transition'>Send Message</button>
   </section>
  )
}

export default Contact
