import React from 'react'
import Header from '../components/Header'
import scheduleImage from '../images/schedule.svg'

const Schedule = () => {
  return (
    <section className='flex justify-center items-center px-4 py-6 pt-[60px] md:pt-[80px] lg:pt-[100px]'>
      <Header/>
      <img
        src={scheduleImage}
        alt="Расписание занятий"
        className="max-w-full h-auto rounded-xl shadow-lg"
      />
    </section>
  )
}

export default Schedule
