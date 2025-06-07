import React, { useRef, useEffect, useState } from 'react';

const slides = [
  {
    id: 1,
    content: (
      <p className="font-bold ">
        Первая студия в ЖК "Анкудиновский парк" с занятиями на гамаках
      </p>
    ),
  },
  {
    id: 2,
    content: (
      <>
        <p className="font-bold mb-1 ">Индивидуальный подход к каждому</p>
        <p>Мини-группы до 6 человек. Контроль техники каждого движения.</p>
      </>
    ),
  },
  {
    id: 3,
    content: (
        <>
        <p className="font-bold   mb-1">Разнообразные программы для взрослых и детей</p>
        <p>Широкий выбор программ, что позволяет каждому найти что-то по душе</p>
        </>
      
    ),
  },
  {
    id: 4,
    content: (
        <>
        <p className="font-bold  mb-1">Уютная студия в светлых пастельных тонах</p>
        <p>Cоздается атмосфера комфорта и спокойствия, куда хочется возвращаться снова.</p>
        </>
      
    ),
  },

];

const Slider = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Автоматическая прокрутка
  useEffect(() => {
    const container = containerRef.current;
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % slides.length;
      scrollToSlide(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  // Функция прокрутки
  const scrollToSlide = (index) => {
    const container = containerRef.current;
    const cardWidth = container.firstChild.offsetWidth; 
    container.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

  // Отслеживание прокрутки вручную
  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      const cardWidth = container.firstChild.offsetWidth + 16;
      const index = Math.round(container.scrollLeft / cardWidth);
      setActiveIndex(index);
    };
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-hidden w-full max-w-[90vw] md:max-w-[70vw]">
      {/* Слайдер */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory gap-4 p-3 text-sm md:text-lg lg:text-2xl"
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full shrink-0 snap-center bg-lightdark rounded-3xl shadow-md shadow-pink inset-shadow-sm inset-shadow-dark px-6 py-5 text-beige"
          >
            {slide.content}
          </div>
        ))}
      </div>

      {/* Точки */}
      <div className="flex justify-center  gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? 'bg-pink' : 'bg-gray-400'
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
