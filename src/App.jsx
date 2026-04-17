import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Feature from './components/Feature'
import CTA from './components/CTA'
import Pricing from './components/Pricing'
import Faq from './components/Faq'


function App() {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <Navbar />
      <Hero />
      <Feature />
      <CTA />
      <Pricing />
      <Faq />
    </div>
  )
}

export default App
