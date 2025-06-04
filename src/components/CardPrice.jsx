import React from 'react'

const CardPrice = ({label, price, rules, price1}) => {
  return (
    <div className='flex flex-col'>
      <h1 className="font-bold text-center py-2 lg:py-2 bg-pink text-white text-lg md:text-xl lg:text-2xl rounded-t-2xl ">
          {label}
        </h1>
      <div className='min-w-[16rem] px-4 py-5 w-60 h-60 shadow-sm  bg-white border-3 border-pink rounded-b-2xl flex flex-col justify-between items-center'>
        <p className='whitespace-pre-line text-sm mb-4 text-dark'>{rules}</p>
        <div><p className='font-druk text-4xl text-pink'>{price}</p>
        <p className='text-dark text-sm'>{price1}</p></div>
        
      </div>
    </div>
    
  )
}

export default CardPrice
