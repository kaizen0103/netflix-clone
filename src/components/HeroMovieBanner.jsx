import React from 'react'
import {Play} from 'lucide-react';
const HeroMovieBanner = ({movie,onMoreInfo}) => {
    if(!movie) return null;

  return (
    <section className='h-[90vh] bg-cover  bg-top-right relative' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}}>
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent"></div>

        <div className='relative z-10 h-full flex items-center px-16'>
            <div className='max-w-xl'>
                <h1 className='text-white text-6xl font-bold'>
                    {movie.title}
                </h1>
                <p className='text-white mt-6 text-lg'>
                    {movie.overview}
                </p>
                <div className='flex gap-4 mt-8'>
                    <button className='bg-white text-black px-8 py-3 rounded font-semibold cursor-pointer transition-all duration-300 hover:scale-110'>
                        <Play size={20 } /> Play
                    </button>
                    <button
                        onClick={onMoreInfo}
                        className="bg-gray-700/70 text-white px-8 py-3 rounded"
                    >
                        More Info
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroMovieBanner
