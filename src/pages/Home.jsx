import React, { useRef } from 'react'
import Header from '../components/Header'
import About from '../sections/About'
import Directions from '../sections/Directions'
import Contact from '../sections/Contact'
import Footer from '../components/Footer'
import WhyWe from '../sections/WhyWe'


const Home = () => {
  const contactRef = useRef(null);
  const directionsRef = useRef(null);
  const scrollToRef = (ref) => {
    const offset = document.querySelector('header')?.offsetHeight; 
    const elementPosition = ref.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }

  return (
    <div>
      <Header/>
      <main>
        <About scrollTo={() => scrollToRef(contactRef)} />
        <WhyWe/>
        <Directions ref = {directionsRef}/>
        <Contact ref={contactRef}/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
