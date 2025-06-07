import React, { useEffect } from 'react'
import Header from '../components/Header'
import scheduleImage from '../images/schedule.svg'
import Footer from '../components/Footer';
import Contact from '../sections/Contact';

const Schedule = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);
  return (
    <>
    <section className='flex flex-col justify-center items-center px-4 py-6 pt-[60px] md:pt-[80px] lg:pt-[100px]'>
      <Header/>
      <img
        src={scheduleImage}
        alt="Расписание занятий"
        className="max-w-full h-auto rounded-xl shadow-lg mb-5"
      />
      <Contact/>
    </section>
    <Footer/>
    </>
  )
}

export default Schedule
