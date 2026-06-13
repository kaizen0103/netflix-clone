import React from 'react'
import Navbar from './components/Navbar'


import HeroBanner from './components/HeroBanner'

const App = () => {
  return (
    <div className='bg-black min-h-screen'>
      <Navbar/>
      
      <HeroBanner/>
    </div>
  )
}

export default App
