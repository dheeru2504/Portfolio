import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Exp'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contacts/Contacts'
import Footer from './components/footer/Footer'
import Skill from './components/Skills'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      {/* <Experience /> */}
      <Skill />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App