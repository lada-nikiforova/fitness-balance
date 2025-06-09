import React from 'react'
import Slider from '../components/Slider'

const WhyWe = () => {
  return (
    <section className='bg-center bg-no-repeat flex flex-col items-center py-2 mb-4 md:mb-6'>
        <div className="w-full max-w-[90vw] sm:max-w-[80vw] lg:max-w-[90vw]">
            <h2 className='text-lg tracking-wider md:text-xl font-bold text-dark mb-[8px] text-start lg:text-3xl lg:mb-4 font-druk'>
                ПОЧЕМУ МЫ?
            </h2>
        </div>
      <Slider/>
    </section>
  )
}

export default WhyWe
