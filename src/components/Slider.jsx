import React, { useRef, useEffect, useState } from 'react';

const slides = [
  {
    id: 1,
    label: 'Первая студия в ЖК "Анкудиновский парк" с занятиями на гамаках',
  },
  {
    id: 2,
    label: 'Индивидуальный подход к каждому',
    text: 'Мини-группы до 6 человек. Контроль техники каждого движения.',
  },
  {
    id: 3,
    label: 'Различные программы для взрослых и детей',
    text: 'Широкий выбор программ, что позволяет каждому найти что-то по душе',
  },
  {
    id: 4,
    label: '1 абонемент = 3 направления',
    text: 'Покупая взрослый абонемент, вы можете посещать любые направления по вашему выбору до окончания количества занятий.',
  },
  {
    id: 5,
    label: 'Уютная студия в светлых тонах',
    text: 'Cоздается атмосфера комфорта и спокойствия, куда хочется возвращаться снова.',
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
    }, 2500);

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
    <div className="overflow-hidden w-full max-w-[90vw] md:max-w-[70vw] lg:max-w-[60vw] ">
      {/* Слайдер */}
      <div
        ref={containerRef}
        className=" flex overflow-x-auto text-center scroll-smooth no-scrollbar snap-x snap-mandatory gap-4 py-2 px-1 text-sm md:text-lg lg:text-2xl"
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full shrink-0 text-shadow-xs flex flex-col justify-center snap-center bg-gray rounded-3xl shadow-md shadow-pink inset-shadow-dark px-6 py-5 text-dark"
          >
            <p className='font-bold  rounded-2xl text-[16px] mb-2'>{slide.label}</p>
            <p>{slide.text}</p>
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
              index === activeIndex ? 'bg-pink' : 'bg-gray'
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
