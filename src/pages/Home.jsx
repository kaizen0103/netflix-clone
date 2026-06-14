import React from 'react'
import Navbar from '../components/Navbar'
import FeatureSection from '../components/FeatureSection'
import tvImage from "../assets/tvImage.jpg"

import HeroBanner from '../components/HeroBanner'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import Browse from './Browse'


const Home = () => {
  return (
    <div className='bg-black min-h-screen'>
      
      <div className='absolute top-4 left-4 z-50 '>
        <Logo/>
        </div>
      <div className='absolute top-4 right-4 z-50'>
        <Navbar/>
      </div>
      
      <HeroBanner/>
      <FeatureSection
      title="Enjoy on your TV"
      description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV and more."
      image={tvImage}/>
      <FeatureSection
      title="Download your shows to watch offline"
      description="Save your favourites easily and always have something to watch."
      image={tvImage}/>
      <Browse/>
      <FAQ/>
      <Footer/>
    </div>
    
  )
}

export default Home
