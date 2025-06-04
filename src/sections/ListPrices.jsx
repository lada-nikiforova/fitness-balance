import React, { useEffect, useState } from 'react'
import CardPrice from '../components/CardPrice'

const ListPrices = () => {
    const [activeButton, setActiveButton] = useState('adult');
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);
    const data = {
        adult: [
            { id: 'trial', label: 'ПРОБНОЕ', price: '300 P' },
            { id: 'less1', label: 'РАЗОВОЕ', price: '600 P' },
            { id: 'less4', label: '4 ЗАНЯТИЯ', price: '2200 P', rules: `· срок действия 1 месяц\n· посещение занятий по всем взрослым направлениям, кроме танцев 16+`, price1: 'цена за занятие 550р' },
            { id: 'less8', label: '8 ЗАНЯТИЙ', price: '4000 P', rules: '· срок действия 1 месяц\n· посещение занятий по всем взрослым направлениям, кроме танцев 16+', price1: 'цена за занятие 500р' },
            { id: 'less12', label: '12 ЗАНЯТИЙ', price: '5400 P', rules: '· срок действия 1 месяц\n· посещение занятий по всем взрослым направлениям, кроме танцев 16+', price1: 'цена за занятие 450р' },
        ],
        kids: [
            { id: 'trial_k', label: 'ПРОБНОЕ', price: '300 P' },
            { id: 'less1_k', label: 'РАЗОВОЕ', price: '600 P' },
            { id: 'less4_k', label: '4 ЗАНЯТИЯ', price: '2100 P', rules: '· срок действия 1 месяц\n ·перерасчет при предъявлении справки от врача', price1: 'цена за занятие 525р' },
            { id: 'less8_k', label: '8 ЗАНЯТИЙ', price: '3900 P', rules: '· срок действия 1 месяц\n · перерасчет при предъявлении справки от врача', price1: 'цена за занятие 487р' },
            { id: 'less12_k', label: '12 ЗАНЯТИЙ', price: '5200 P', rules: '· срок действия 1 месяц\n· перерасчет при предъявлении справки от врача', price1: 'цена за занятие 433р' },
        ]
    };
  return (
    <section className='flex flex-col items-center mb-5'>
        <h1 className='px-3 text-lg md:text-xl ml-3 font-bold text-dark mb-4 text-start lg:text-3xl lg:mb-10 font-druk'>СТОИМОСТЬ АБОНЕМЕНТОВ</h1>
        <div className='flex bg-gray py-2.5 lg:py-4 text-start text-lg md:text-xl lg:text-2xl font-semibold  w-full justify-center flex-row gap-10 '>
            <button id='adult' onClick={()=>setActiveButton('adult')} className={`${activeButton === 'adult' && ' py-1 lg:py-2 bg-beige px-3 lg:px-4 shadow-xl rounded-full'}`}>Взрослые</button>
            <button id='kids' onClick={()=>setActiveButton('kids')} className={`${activeButton === 'kids' && ' py-1 lg:py-2 bg-beige px-3 shadow-xl lg:px-4  rounded-full'}`}>Детские</button>
        </div>
        <div className="w-full h-75 overflow-x-auto overflow-y-visible  mt-4">
            <div key={activeButton} className="flex flex-nowrap items-stretch gap-3 px-3 animate-fadeIn">
                {data[activeButton].map((item) => (
                    <CardPrice key={item.id} label={item.label} price={item.price} rules={item.rules} price1={item.price1} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default ListPrices
