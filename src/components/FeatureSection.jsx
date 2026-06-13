import React from 'react'

const FeatureSection = (
    {title,description,image,reverse}
) => {
  return (
    <section
      className={`flex items-center justify-between px-20 py-24 border-t border-gray-800 bg-black text-white ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
        <div className='w-1/2'>
            <h2 className='text-5xl font-bold'>{title}</h2>
        </div>
        <p className='text-2xl mt-6'>{description}</p>
        <div className='w-1/2 flex justify-center'>
            <img className='w-full max-w-md object-cover rounded-xl' src={image} alt={title} />
        </div>
    </section>
  )
}

export default FeatureSection
