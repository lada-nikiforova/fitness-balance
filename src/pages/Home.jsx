import React from 'react'
import Header from '../components/Header'
import About from '../sections/About'
import Directions from '../sections/Directions'
import ContactForm from '../components/ContactForm'
import Contact from '../sections/Contact'

const Home = () => {
  return (
    <div>
      <Header/>
      <main>
        <About/>
        <Directions/>
        <Contact/>
      </main>
    </div>
  )
}

export default Home
