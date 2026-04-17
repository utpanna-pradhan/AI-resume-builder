import React from 'react'
import { useState } from 'react'

function Pricing() {
    const [isYearly,setIsYearly] = useState(false);
  return (
<section className='max-w-6xl mx-auto px-6 py-20 text-center'>
    <h2 className='text-3xl font-bold'>Pricing</h2>
    {/* toggle */}
    <div className='mt-6 flex justify-center items-center gap-4'>
        <span>Monthly</span>
        <button onClick={()=>setIsYearly(!isYearly)} className='w-12 h-6 bg-gray-300 rounded-full flex items-center px-1'>
            <div className={`w-4 h-4 bg-black rounded-full transform 
                transition ${isYearly ? "translate-x-6" : ""}`}></div>
        </button>
        <span>Yearly</span>
    </div>

    <div className='mt-12 grid md:grid-cols-3 gap-8'>
       <div className='p-6 bg-white rounded-xl shadow'>
                <h3 className='text-xl font-semibold'>Basic</h3>
                <p className='mt-4 text-2xl font-bold'>₹{isYearly ? "999" : "99"}</p>
       </div>
       
       <div className='p-6 bg-white rounded-xl shadow border-2 border-black'>
        <h3 className='text-xl font-semibold'>Pro</h3>
        <p className='mt-4 text-2xl font-bold'>₹{isYearly ? "1999" : "199"}</p>
       </div>
        
        <div className='p-6 bg-white rounded-xl shadow'>
            <h3 className='text-xl font-semibold'>Premium</h3>
            <p className='mt-4 text-2xl font-bold'>₹{isYearly ? "2999" : "299"}</p>
        </div>
    </div>
</section>
  )
}

export default Pricing
