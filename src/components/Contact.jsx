import React from 'react'
import { useState } from 'react';


function Contact() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("")
  const [loading,setLoading] = useState(false);
  const [sucess,setSucess] = useState("");
  const [error,setError] = useState("")

  const handleSubmit =async(e)=>{
      e.preventDefault();
      setLoading(true)
      setSucess("")
      setError("")

      try{
        const res= await fetch("http://localhost:8000/api/contact",{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify({name,email,message}),
        });

        const data = await res.json();
        if(res.ok){
          setSucess("Message sent sucessfully");
          setName("");
          setEmail("");
          setMessage("");
        }
        else{
          setError(data.error || "Something went wrong")
        }
      }catch(err){
        setError(err)
      }
      setLoading(false)

  }
  return (
    <section id='contact' className='px-6 py-20 max-w-4xl mx-auto  '>
      <h2 className='text-3xl font-bold text-center'>Contact Us</h2>


      <form action="" onSubmit={handleSubmit}>
        <input className='mt-10 w-full p-3 border rounded-lg focus:outline-none
    focus:ring-black' type="text" placeholder='Enter Your Name'
    onChange={(e)=>setName(e.target.value)} value={name}/>

        <input className='mt-10 w-full p-3 border rounded-lg focus:outline-none
    focus:ring-black' type="email" placeholder='Enter Your Email'
    onChange={(e)=>setEmail(e.target.value)} value={email}/>

        <textarea rows="5" placeholder='Your Message' className=' mt-10 w-full p-3 border rounded-lg focus:outline-none
    focus:ring-black' onChange={(e)=>setMessage(e.target.value)} value={message}></textarea>
       
        <button type='submit' className='cursor-pointer w-full bg-black 
    text-white py-3 rounded-lg hover:bg-gray-800 transition' disabled={loading}>
       {loading ? "Sending..." : "Send Message"}
    </button>


      </form>
      {sucess && <p className='text-green-600'>{sucess}</p>}
      {error && <p className='text-red-600'>{error}</p>}
    </section>
  )
}

export default Contact
