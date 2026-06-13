import React from 'react'

const Hero = () => {
  return (
    <section className='text-white flex flex-col items-center justify-center text-center px-4 h-[80vh]'>
        <h1 className='text-5xl font-bold max-w-3xl'>Unlimited movies, TV shows and more</h1>
        <p className='text-xl mt-4'>Starts at ₹149. Cancel anytime</p>
        <p className='mt-6'>Ready to watch? Enter your email to create or restart your membership.</p>

        <div className='flex gap-2 mt-6'>
            <input 
            className='px-4 py-3 border border-gray-500 rounded w-80 bg-transparent'
            type="email"
            placeholder='Email address' 
            />
            <button className='bg-red-600 px-6 py-3 rounded font-semibold' >
                Get Started 
            </button>

        </div>
    </section>
  )
}

export default Hero
