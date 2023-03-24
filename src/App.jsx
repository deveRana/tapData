import React from 'react'
import Features from './Components/Features'
import Finance from './Components/Finance'
import GetStarted from './Components/GetStarted'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Features/>
      <Finance/>
      <GetStarted/>
    </>
  )
}

export default App