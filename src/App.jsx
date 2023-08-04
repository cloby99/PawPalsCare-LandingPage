import React from 'react'       //Create a functional component rafce
import Header from './components/header/Header'
import About from './components/about/About'
import Mission from './components/mission/Mission'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Mission />
      <Contact />
      <Footer />

    </>
  )
}

export default App

