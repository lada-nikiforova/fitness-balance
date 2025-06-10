import React, { useEffect, useState } from 'react'
import CardPrice from '../components/CardPrice'
import { Link } from 'react-router-dom';

const ListPrices = () => {
    const [activeButton, setActiveButton] = useState('adult');
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);
    const data = {
        adult: [
            { id: 'trial', label: 'ПРОБНОЕ', price: '300 P', ref:'https://qr.nspk.ru/AS20000IC4D8F7KS88KABDMGOARCO5T4?type=01&bank=100000000284&sum=30000&cur=RUB&crc=2F69' },
            { id: 'less1', label: 'РАЗОВОЕ', price: '600 P', ref: 'https://qr.nspk.ru/AS20006AJEIBIUQR9NLOUU0G7GEVIDLG?type=01&bank=100000000284&sum=60000&cur=RUB&crc=65E3' },
            { id: 'less1_k', label: 'ИНДИВИДУАЛЬНОЕ', price: '1500 P',  ref: ''},
            { id: 'less4', label: '4 ЗАНЯТИЯ', price: '2200 P', rules: `· срок действия 1 месяц\n· посещение занятий по всем взрослым направлениям, кроме танцев 16+`, price1: 'цена за занятие 550р', ref:'https://qr.nspk.ru/AS200058A6TTCS2M97QBO0F9E0QF2Q5C?type=01&bank=100000000284&sum=220000&cur=RUB&crc=8B05' },
            { id: 'less8', label: '8 ЗАНЯТИЙ', price: '4000 P', rules: '· срок действия 1 месяц\n· посещение занятий по всем взрослым направлениям, кроме танцев 16+', price1: 'цена за занятие 500р', ref: 'https://qr.nspk.ru/AS20007E5EHFJ93K81L87TOSML2OOOH9?type=01&bank=100000000284&sum=400000&cur=RUB&crc=8909' },
            { id: 'less12', label: '12 ЗАНЯТИЙ', price: '5400 P', rules: '· срок действия 1 месяц\n· посещение занятий по всем взрослым направлениям, кроме танцев 16+', price1: 'цена за занятие 450р', ref:'https://qr.nspk.ru/BS2000337ORTH9RM9AUO44707PHSGAO9?type=01&bank=100000000284&sum=540000&cur=RUB&crc=389C' },
        ],
        kids: [
            { id: 'trial_k', label: 'ПРОБНОЕ', price: '300 P',  ref:'https://qr.nspk.ru/AS20000IC4D8F7KS88KABDMGOARCO5T4?type=01&bank=100000000284&sum=30000&cur=RUB&crc=2F69' },
            { id: 'less1_k', label: 'РАЗОВОЕ', price: '600 P',  ref: 'https://qr.nspk.ru/AS20006AJEIBIUQR9NLOUU0G7GEVIDLG?type=01&bank=100000000284&sum=60000&cur=RUB&crc=65E3'},
            { id: 'less1_k', label: 'ИНДИВИДУАЛЬНОЕ', price: '1500 P',  ref: ''},
            { id: 'less4_k', label: '4 ЗАНЯТИЯ', price: '2100 P', rules: '· срок действия 1 месяц\n · перерасчет при предъявлении справки от врача', price1: 'цена за занятие 525р', ref: 'https://qr.nspk.ru/BS200048Q4PN9TJ29SKPD2K1N1V62528?type=01&bank=100000000284&sum=210000&cur=RUB&crc=ACE1' },
            { id: 'less8_k', label: '8 ЗАНЯТИЙ', price: '3900 P', rules: '· срок действия 1 месяц\n · перерасчет при предъявлении справки от врача', price1: 'цена за занятие 487р', ref: 'https://qr.nspk.ru/BS20001L2I8RJ6TF99BBCDKJKCE0DDEA?type=01&bank=100000000284&sum=390000&cur=RUB&crc=F736' },
            { id: 'less12_k', label: '12 ЗАНЯТИЙ', price: '5200 P', rules: '· срок действия 1 месяц\n· перерасчет при предъявлении справки от врача', price1: 'цена за занятие 433р', ref: 'https://qr.nspk.ru/AS20001JIS9LFDP08BJQKMCAQC90O05C?type=01&bank=100000000284&sum=520000&cur=RUB&crc=EF4D' },
        ],
        dance: [
            {id: 'dance16', label: '8 ЗАНЯТИЙ', price: '4500 Р', rules: '· 7 тренировок и проф. съемка на 8 тренировке\n · присоединится можно не позднее 3-ий тренировки (будет перерасчет)\n ·новый набор в начале каждого месяца ', ref: 'https://qr.nspk.ru/AS20006VSOSAUIS48P18RABFIKC3ORB7?type=01&bank=100000000284&sum=450000&cur=RUB&crc=2C55' }
        ]
    };
  return (
    <section className='flex flex-col mb-5'>
        <h1 className='px-3 text-lg md:text-xl ml-3 text-dark mb-4  lg:text-3xl lg:mb-10 tracking-wider font-druk'>СТОИМОСТЬ АБОНЕМЕНТОВ</h1>
        <div className='flex  bg-gray py-2.5 lg:py-4 text-start text-lg md:text-xl lg:text-2xl font-semibold  w-full justify-center flex-row gap-10 '>
            <button id='adult' onClick={()=>setActiveButton('adult')} className={`${activeButton === 'adult' && ' py-1 lg:py-2 bg-beige px-3 lg:px-4 shadow-xl rounded-full'}`}>Взрослые</button>
            <button id='kids' onClick={()=>setActiveButton('kids')} className={`${activeButton === 'kids' && ' py-1 lg:py-2 bg-beige px-3 shadow-xl lg:px-4  rounded-full'}`}>Детские</button>
            <button id='dance' onClick={()=>setActiveButton('dance')} className={`${activeButton === 'dance' && ' py-1 lg:py-2 bg-beige px-3 shadow-xl lg:px-4  rounded-full'}`}>Танцы 16+</button>
        </div>
        <div className="w-full flex h-90 md:h-95 overflow-x-auto mt-4 mb-4">
            <div key={activeButton} className="flex flex-nowrap items-stretch gap-3 px-3 animate-fadeIn">
                {data[activeButton].map((item) => (
                    <CardPrice key={item.id} label={item.label} price={item.price} rules={item.rules} price1={item.price1} ref={item.ref}/>
                ))}
            </div>
        </div>
        <p className='px-3 text-base md:text-lg lg:text-xl ml-3 text-dark mb-4 text-start '>* Перед покупкой абонемента ознакомьтесь с <Link className='underline pointer' to={'/agreement'}>публичной офертой на заключение договора на оказание услуг</Link></p>
    </section>
  )
}

export default ListPrices
