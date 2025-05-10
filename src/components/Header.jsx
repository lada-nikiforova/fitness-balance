import logo from '../icons/logo.svg';
import { useState } from 'react';
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 w-full bg-header shadow-md z-50">
            <nav className=' px-10 py-4'>
                <div className='flex justify-between items-center'>
                    <a href="#">
                        <img className='md:w-40' src={logo} alt="Logo"/>
                    </a>
                    <button className={`md:hidden flex flex-col w-6 h-6 z-52 relative ${menuOpen ? 'justify-around' : 'justify-center'}`} onClick={() => setMenuOpen(!menuOpen)}>
                        <span
                            className={`block h-0.5 w-4 bg-pink transition-transform duration-300 ease-in-out ${
                            menuOpen ? 'w-6 transform rotate-45 translate-y-1.5' : '-translate-y-1'
                            }`}
                        />
                        <span
                            className={`block h-0.5 bg-pink transition-transform duration-300 ease-in-out ${
                            menuOpen ? 'transform -rotate-45 -translate-y-1.5' : 'translate-y-1'
                            }`}
                        />
                    </button>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-8">
                            <li><a href="#" className ="text-pink text-[25px] font-inter font-semibold">О нас</a></li>
                            <li><a href="#" className="text-pink text-[25px] font-inter font-semibold">Расписание</a></li>
                            <li><a href="#" className="text-pink text-[25px] font-inter font-semibold">Прайс</a></li>
                        </ul>
                    </nav>
                    {menuOpen && <nav className='md:hidden fixed top-0 left-0 w-full h-full bg-white z-50'>
                        <div className='px-10 py-4'>
                            <a href="#">
                                <img className='md:w-40' src={logo} alt="Logo"/>
                            </a>

                        </div>
                        <ul className='flex flex-col justify-center items-center h-full'>
                            <li className='mb-5'><a href="#" className ="text-pink text-[30px] font-inter font-semibold">О нас</a></li>
                            <li className='mb-5'><a href="#" className="text-pink text-[30px] font-inter font-semibold">Расписание</a></li>
                            <li><a href="#" className="text-pink text-[30px] font-inter font-semibold">Прайс</a></li>
                        </ul>
                    </nav>}
                </div>
            </nav>
        </header>
        
    )
}

export default Header
