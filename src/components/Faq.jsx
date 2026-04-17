import React from 'react'
import { useState } from 'react'

function Faq() {
    const [openIndex,setOpenIndex] = useState(null);
    const faqs=[
        {
            question:"How does AI resume builder work ?",
            answer:"It generates resume based on your input using AI"
        },
        {
            question:"Is it free ?",
            answer:"We offer both free and paid plans",
        },
        {
            question:"Can I edit my resume ?",
            answer : "Yes, you can fully customize it."
        }
    ]
  return (
   <section className='max-w-4xl mx-auto px-6 py-20'>
  <h2 className='text-3xl font-bold text-center'>FAQ</h2>

  <div className='mt-10 space-y-4'>
    {faqs.map((faq, index) => {
      const isOpen = openIndex === index;

      return (
        <div
          key={index}
          className='p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition'
          onClick={() => setOpenIndex(isOpen ? null : index)}
        >
          {/* HEADER */}
          <div className='flex justify-between items-center'>
            <h3 className='font-semibold'>{faq.question}</h3>

            <span className='text-xl font-bold'>
              {isOpen ? '-' : '+'}
            </span>
          </div>

          {/* ANSWER */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isOpen ? 'max-h-40 mt-2' : 'max-h-0'
            }`}
          >
            <p className='text-gray-600'>{faq.answer}</p>
          </div>
        </div>
      );
    })}
  </div>
</section>
  )
}

export default Faq
