import React from 'react'

const CardPrice = ({label, price, rules, price1, ref}) => {
  return (
    <div className='flex flex-col '>
      <h1 className="font-bold text-center py-1.5 lg:py-2 bg-pink text-white text-lg md:text-xl lg:text-2xl rounded-t-2xl ">
          {label}
        </h1>
      <div className='px-4 py-5 w-70 h-60 shadow-sm  bg-white border-3 border-pink rounded-b-2xl flex flex-col justify-between items-center mb-3'>
        <p className='whitespace-pre-line text-sm mb-4 text-dark'>{rules}</p>
        <div><p className='font-druk tracking-wider text-4xl text-pink'>{price}</p>
        <p className='text-dark text-sm'>{price1}</p></div>
      </div>
      <a href={ref} className='bg-pink font-druk font-bold text-center py-3 tracking-wider text-dark text-lg md:text-xl lg:text-2xl rounded-full cursor-pointer shadow-lg hover:shadow-xl '>КУПИТЬ</a>
    </div>
    
  )
}

export default CardPrice
