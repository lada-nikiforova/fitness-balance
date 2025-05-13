import back from '../images/fitness.jpg'

const About = () => {
  return (
    <section className="bg-cover bg-center bg-no-repeat h-120 lg:h-200 flex items-center justify-center mb-1 lg:mb-3 " 
            style={{ backgroundImage: `linear-gradient(rgba(34, 30, 30, 0.44), rgba(34, 30, 30, 0.7)), url(${back})`}} >
        <div className='flex flex-col items-center justify-center ml-1 mr-1 gap-2 lg:gap-4 px-4'>
            <h1 className='text-center text-beige text-lg md:text-2xl lg:text-4xl font-druk drop-shadow-sm'>СТУДИЯ РАСТЯЖКИ И ТАНЦЕВ<br/>В НИЖНЕМ НОВГОРОДЕ</h1>
            <p className='text-center text-beige text-lg leading-5 lg:leading-10 md:text-xl lg:text-4xl font drop-shadow-sm mb-3 md:mb-5'>Танцуй с легкостью,<br/>растягивайся с удовольствием!</p>
            <button className='bg-pink text-dark font-druk text-sm md:text-lg lg:text-2xl 
                   rounded-full px-6 lg:px-12 py-3 md:py-4 lg:py-5 cursor-pointer
                   shadow-lg hover:shadow-xl hover:bg-[#B0B0B0] 
                   transition-transform duration-300 transform hover:scale-105'>Записаться</button>
        </div>
      
    </section>
  )
}

export default About
