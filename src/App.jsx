import React from 'react'
import Navbar from './components/Navbar'
import FeatureSection from './components/FeatureSection'
import tvImage from "./assets/tvImage.jpg"

import HeroBanner from './components/HeroBanner'

const App = () => {
  return (
    <div className='bg-black min-h-screen'>
      <Navbar/>
      
      <HeroBanner/>
      <FeatureSection
      title="Enjoy on your TV"
      description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV and more."
      image={tvImage}/>
    </div>
  )
}

export default App
