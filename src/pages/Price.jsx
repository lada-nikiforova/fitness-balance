import React from 'react'
import CardPrice from '../components/CardPrice'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ListPrices from '../sections/ListPrices'

const Price = () => {
  return (
    <div>
        <Header/>
        <main className='pt-16 md:pt-17 lg:pt-30'>
            <ListPrices/>
        </main>
        <Footer/>
    </div>
  )
}

export default Price
