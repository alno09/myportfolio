import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import AboutMe from './sections/AboutMe'
import Showcase from './sections/Showcase'
import Footer from './components/Footer'
import Skills from './sections/Skills'

const App = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Skills />
        <Showcase />
        <AboutMe />
        <Footer />
    </>
  )
}

export default App