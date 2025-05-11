import React from 'react'
import Header from '../components/Header'
import About from '../sections/About'
import Directions from '../sections/Directions'

const Home = () => {
  return (
    <div>
      <Header/>
      <main>
        <About/>
        <Directions/>
      </main>
    </div>
  )
}

export default Home
