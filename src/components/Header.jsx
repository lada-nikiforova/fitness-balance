import logo from '../icons/logo3.png';
import { useState } from 'react';
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 w-full bg-header shadow-md z-50">
            <nav className=' px-10 py-2 md:py-5 lg:px-15 lg:py-5'>
                <div className='flex justify-between'>
                    <a href="#">
                        <img className='w-27 md:w-30 lg:w-40' src={logo} alt="Logo"/>
                    </a>
                    <button className={`lg:hidden w-10 z-52 cursor-pointer relative flex flex-col justify-center items-center`} onClick={() => setMenuOpen(!menuOpen)}>
                        <span
                            className={`absolute rounded left-0 h-0.5 bg-pink transition-transform duration-300 ease-in-out ${
                            menuOpen ? 'w-7 md:w-8 transform rotate-45 top-4' : 'w-6  rotate-0 top-2'
                            }`}
                        />
                        <span
                            className={`absolute rounded left-0 h-0.5 bg-pink transition-transform duration-300 ease-in-out ${
                            menuOpen ? 'w-7 md:w-8 transform -rotate-45 bottom-3.5' : ' w-9 rotate-0 md:bottom-0.5 bottom-2'
                            }`}
                        />
                    </button>
                    <nav className="hidden lg:block">
                        <ul className="flex space-x-8">
                            <li><a href="#" className ="text-pink font-semibold text-[25px]">О нас</a></li>
                            <li><a href="#" className="text-pink font-semibold text-[25px] ">Расписание</a></li>
                            <li><a href="#" className="text-pink font-semibold text-[25px]">Прайс</a></li>
                        </ul>
                    </nav>
                    {menuOpen && <nav className='lg:hidden fixed top-0 left-0 w-full h-full bg-white z-50'>
                        <div className='px-10 py-2'>
                            <a href="#">
                                <img className='w-27 md:w-30' src={logo} alt="Logo"/>
                            </a>
                        </div>
                        <ul className='flex flex-col justify-center items-center h-full text-pink font-semibold text-3xl md:text-4xl gap-8 md:gap-16'>
                            <li ><a href="#">О нас</a></li>
                            <li ><a href="#" >Расписание</a></li>
                            <li><a href="#" >Прайс</a></li>
                        </ul>
                    </nav>}
                </div>
            </nav>
        </header>
        
    )
}

export default Header
