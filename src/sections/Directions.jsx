import { forwardRef, useState } from 'react';
import aeroImage from '../images/aerostretching.jpg';
import mfrImage from '../images/mfr.jpg';
import stretchImage from '../images/stretching.jpg';
import danceImage from '../images/dance.jpg';
import kidsAeroImage from '../images/kidsaero.jpg';

const Directions = forwardRef((props, ref) => {
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
        <section ref={ref} className='bg-center bg-no-repeat min-h-[400px] lg:min-h-[700px] flex flex-col items-center py-2 mb-4 md:mb-6'>
            <div className="w-full max-w-[90vw] sm:max-w-[80vw] lg:max-w-[90vw] ">
                <h2 className='text-lg md:text-xl font-bold text-dark mb-[8px] text-start lg:text-3xl lg:mb-4 font-druk'>
                НАШИ НАПРАВЛЕНИЯ
                </h2>
            </div>
            <div className='flex flex-col md:flex-row justify-between text-xs md:text-sm lg:text-2xl md:max-w-[90vw] sm:max-w-[80vw]'>
                <div className='bg-white w-full max-w-[90vw] sm:max-w-[80vw] min-h-[215px] rounded-[16px] shadow-sm p-[14px] mb-[12px] md:min-h-[400px] lg:min-h-[620px] md:mr-[15px] lg:mr-[20px] flex flex-col justify-between lg:p-[20px]'>
                    <div className='flex flex-wrap gap-[5px] mb-[8px] lg:gap-[8px]'>
                    {directions.map(({ id, label }) => ( 
                        <button key={id} className={`border-[1px] md:border-[2px] font-bold rounded-full text-center px-[14px] lg:px-[24px] py-[6px] lg:py-[12px]  cursor-pointer shadow-sm hover:shadow-xl
                            ${activeDirection === id ? 'bg-pink text-dark  border-pink'
                            : 'bg-white text-lightdark border-pink hover:shadow-xl hover:bg-pink hover:text-dark active:bg-pink active:text-dark'}`} 
                            onClick={() => setActiveDirection(id)}>{label}</button>))}
                    </div>
                    <div >
                        <div className='text-dark mb-[12px]'>
                            {directionText[activeDirection].split('\n').map((para, index) => (<p key={index} className="mb-[6px]">{para}</p>))}
                        </div>
                        <div><p>Продолжительность занятия ~ 55 минут</p></div>
                    </div>
                    
                </div>
                <div className='bg-white w-full max-w-[90vw] sm:max-w-[80vw] h-[260px] md:h-[400px]  lg:h-[620px] rounded-[16px] shadow-sm'>
                        <img className='w-full h-full object-cover  rounded-2xl' src={directionImage[activeDirection]} />  
                </div>

            </div>
            

        </section>
    )
})

export default Directions
