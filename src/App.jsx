import React from 'react'       //Create a functional component rafce
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonilas from './components/testimonials/Testimonilas'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonilas />
      <Contact />
      <Footer />

    </>
  )
}

export default App

