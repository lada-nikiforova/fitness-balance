import React from 'react'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <section className='bg-center bg-no-repeat min-h-[400px] flex flex-col items-center py-2'>
        <div className='bg-white w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[90vw] min-h-[200px] lg:max-w-[90vw] rounded-[16px] shadow-sm p-8 mb-[12px] flex flex-col justify-between '>
            <h3 className='font-semibold mb-3 text-xl md:text-2xl lg:text-3xl  text-dark'>Запишись на пробное занятие</h3>
            <ContactForm/>
        </div>
    </section>
  )
}

export default Contact
