import back from '../images/hall.webp'

const About = ({scrollTo}) => {
  return (
    <section className="bg-cover bg-center bg-no-repeat h-120 lg:h-200 flex items-center justify-center mb-3 md:mb-6 " 
            style={{ backgroundImage: `linear-gradient(rgba(34, 30, 30, 0.44), rgba(34, 30, 30, 0.7)), url(${back})`}} >
        <div className='flex flex-col items-center justify-center ml-1 mr-1 gap-2 lg:gap-4 px-4'>
            <h1 className='text-center text-beige text-lg md:text-2xl lg:text-4xl font-druk drop-shadow-sm tracking-wider'>СТУДИЯ РАСТЯЖКИ И ТАНЦЕВ<br/>В НИЖНЕМ НОВГОРОДЕ</h1>
            <p className='text-center text-beige text-[16px] leading-5 lg:leading-10 md:text-xl lg:text-4xl font drop-shadow-sm mb-3 md:mb-5'>Здоровье — это стиль жизни.<br/> <span className='text-pink font-bold'>BALANCE</span> — его начало.</p>
            <button onClick={scrollTo} className=' bg-pink text-dark font-druk text-xs md:text-lg lg:text-2xl 
                   rounded-full px-6 lg:px-12 py-3 md:py-4 lg:py-5 cursor-pointer
                   shadow-lg hover:shadow-xl hover:bg-[#B0B0B0] 
                   transition-transform duration-300 transform hover:scale-105 tracking-wider'>Записаться</button>
        </div>

    </section>
  )
}

export default About
