import back from '../images/fitness.jpg'

const About = () => {
  return (
    <section className="bg-cover bg-center bg-no-repeat h-[500px] md:h-[800px] flex items-center justify-center" 
            style={{ backgroundImage: `linear-gradient(rgba(34, 30, 30, 0.54), rgba(34, 30, 30, 0.54)), url(${back})`}} >
        <div className='flex flex-col items-center justify-center ml-1 mr-1'>
            <h1 className='text-center text-beige text-xl md:text-5xl mb-2 md:mb-4 font-inter font-bold'>СТУДИЯ РАСТЯЖКИ И ТАНЦЕВ<br/>В НИЖНЕМ НОВГОРОДЕ</h1>
            <p className='text-center text-beige text-sm md:text-3xl mb-5 md:mb-6 font-oldstandart'>Танцуй с легкостью,<br/>растягивайся с удовольствием!</p>
            <button className='rounded-2xl md:rounded-3xl w-30 md:w-60 text-sm md:text-3xl bg-beige py-2 px-3 md:py-3 md:px-4 text-center font-inter font-bold'>Записаться</button>
        </div>
      
    </section>
  )
}

export default About
