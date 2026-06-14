import React from 'react'

const MovieModal = ({movie, onClose}) => {
    if(!movie) return null;
  return (
    <div className='fixed inset-0 bg-black/80 flex justify-center items-center z-50' onClick={onclose}>
      <div className='bg-zinc-900 rounded-xl w-200 max-h-[90vh] overflow-y-auto' onClick={(e)=>e.stopPropagation()} >
        <img src="" alt={movie.title} 
        className='w-full h-100 object-cover'/>
        <div className='p-6'>
            <h1 className='text-white text-4xl font-bold'>{movie.title}</h1>
            <p className='text-gray-300 mt-4'>{movie.overview}</p>
            <button onClick={onClose} className='mt-6 bg-red-600 px-5 py-2 rounded text-white'>Close</button>

        </div>
      </div>
    </div>
  )
}

export default MovieModal
