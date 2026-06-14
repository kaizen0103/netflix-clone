import React from 'react'
import heroImage from "../assets/netflix-bg-image.jpg";
const HeroBanner = () => {
  return (
        <section className="relative h-screen">

      
      <img
        src={heroImage}
        alt="Netflix Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      
      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>

      
      <div className="relative z-10 text-white flex flex-col items-center justify-center text-center h-full px-4">

        <h1 className="text-5xl md:text-5xl font-bold max-w-4xl ">
          Unlimited movies, TV shows <br /> and more
        </h1>

        <p className="text-xl mt-6">
          Starts at ₹149. Cancel anytime.
        </p>

        <p className="mt-6">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="flex gap-3 mt-6">
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-3 w-80 border border-gray-400 rounded bg-black/50"
          />

          <button className="bg-red-600 hover:bg-red-700 px-7 py-4 rounded text-xl font-semibold">
            Get Started
          </button>
        </div>

      </div>
    </section>
  )
}

export default HeroBanner
