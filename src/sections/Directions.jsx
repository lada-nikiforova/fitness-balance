import { useState } from 'react';
import aeroImage from '../images/aerostretching.jpg';
import mfrImage from '../images/mfr.jpg';
import stretchImage from '../images/stretching.jpg';
import danceImage from '../images/dance.jpg';
import kidsAeroImage from '../images/kidsaero.jpg';

const Directions = () => {
    const [activeDirection, setActiveDirection] = useState('aero');
    const directions = [
        { id: 'aero', label: 'АэроCтретчинг' },
        { id: 'mfr', label: 'МФР+Растяжка' },
        { id: 'stretch', label: 'Растяжка' },
        { id: 'kidsDance', label: 'Танцы для детей' },
        { id: 'kidsAero', label: 'АэроЙога для детей' },
    ];
    
    const directionText = {
        aero: 'АэроСтречинг — это современный вид растяжки и фитнеса, который выполняется с использованием специальных подвесных полотен (гамака).\nЭтот метод сочетает элементы йоги, пилатеса, растяжки и антигравитационной гимнастики.',
        mfr: `Хотите улучшить свое самочувствие и гибкость? Мы предлагаем уникальную программу, сочетающую Мануально-Фасциальный Релиз (МФР) и растяжку, которая поможет вам.`,
        stretch: 'Стретчинг — это методика, направленная на увеличение гибкости, улучшение подвижности суставов и снятие мышечного напряжения.\nЗанятия стретчингом включают в себя разнообразные упражнения, которые помогают растянуть различные группы мышц и связок, способствуя улучшению кровообращения и расслаблению.',
        kidsDance: 'Танцы для детей — это весёлые, энергичные и развивающие занятия, которые помогают детям раскрыть творческий потенциал и улучшить координацию.',
        kidsAero: 'АэроЙога для детей — это уникальный и увлекательный вид физической активности, который сочетает элементы йоги, гимнастики и антигравитационной практики.\nЗанятия проводятся с использованием специальных подвесных полотен (гамака), что позволяет детям выполнять различные асаны в воздухе, развивая гибкость, силу и координацию.',
    };
    const directionImage = {
        aero: aeroImage,
        mfr: mfrImage,
        stretch: stretchImage,
        kidsDance: danceImage,
        kidsAero: kidsAeroImage,
    }
    return (
        <section className='bg-center bg-no-repeat min-h-[500px] md:h-[800px] flex flex-col items-center py-2 '>
            <div className="w-full max-w-[290px] md:max-w-[1180px] ">
                <h2 className='text-[18px] font-bold text-dark mb-[8px] text-start md:text-[30px] md:mb-4'>
                НАШИ НАПРАВЛЕНИЯ
                </h2>
            </div>
            <div className='flex flex-col md:flex-row justify-between text-xs md:text-2xl'>
                <div className='bg-white w-full max-w-[90vw] min-h-[215px] rounded-[16px] shadow-sm p-[14px] mb-[12px] md:max-w-[580px] md:min-h-[620px] md:mr-[20px] flex flex-col justify-between md:p-[20px]'>
                    <div className='flex flex-wrap gap-[5px] mb-[8px] md:gap-[8px]'>
                    {directions.map(({ id, label }) => ( 
                        <button key={id} className={`border-[2px] rounded-full px-[12px] md:px-[24px] py-[6px] md:py-[12px] font-semibold cursor-pointer shadow-sm hover:shadow-xl
                            ${activeDirection === id ? 'bg-pink text-dark  border-pink'
                            : 'bg-white text-lightdark border-pink hover:shadow-xl hover:bg-pink hover:text-dark active:bg-pink active:text-dark'}`} 
                            onClick={() => setActiveDirection(id)}>{label}</button>))}
                    </div>
                    <div className='font-semibold'>
                        <div className='text-dark mb-[12px]'>
                            {directionText[activeDirection].split('\n').map((para, index) => (<p key={index} className="mb-[6px]">{para}</p>))}
                        </div>
                        <div><p>Продолжительность занятия ~ 55 минут</p></div>
                    </div>
                    
                </div>
                <div className='bg-white w-full max-w-[90vw] h-[215px] md:max-w-[580px] md:h-[620px] rounded-[16px] shadow-sm'>
                        <img className='w-full h-full object-cover rounded-2xl' src={directionImage[activeDirection]} />  
                </div>

            </div>
            

        </section>
    )
}

export default Directions
