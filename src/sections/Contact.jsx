import React, { forwardRef } from 'react'
import ContactForm from '../components/ContactForm'
import back from '../images/back.jpg'
const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref} className='bg-center bg-no-repeat min-h-[200px] flex flex-col items-center py-2 mb-4 md:mb-6' >
        <div style={{ backgroundImage: `linear-gradient(rgba(17, 17, 17, 0.5), rgba(17, 17, 17, 0.5)), url(${back})`}} className='bg-cover bg-center bg-no-repeat w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[90vw] min-h-[200px] lg:max-w-[90vw] rounded-[16px] shadow-sm p-8 mb-[12px] flex flex-col justify-between '>
            <h3 className='font-semibold mb-3 text-xl md:text-2xl lg:text-3xl  text-beige'>Запишись на пробное занятие</h3>
            <ContactForm/>
            <p className='text-beige text-sm lg:text-lg'>Нажимая на кнопку «отправить заявку» вы соглашаетесь на <a className='underline pointer' href="#">обработку персональных данных</a></p>
        </div>
    </section>
  )
})

export default Contact
