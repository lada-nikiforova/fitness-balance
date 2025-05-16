import logo from '../icons/logo3.png';
import { useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const isSchedulePage = location.pathname === '/raspisanye';
    return (
        <header className={`fixed top-0 left-0 w-full bg-header shadow-md z-50`}>
            <nav className=' px-8 py-1.5 md:py-2 md:px-13 lg:px-15 lg:py-4'>
                <div className='flex justify-between lg:items-center'>
                    <Link to={"/"}>
                        <img className='w-32 md:w-36 lg:w-43' src={logo} alt="Logo"/>
                    </Link>
                    <button className={`lg:hidden w-10 z-52 cursor-pointer relative flex flex-col justify-center items-center`} onClick={() => setMenuOpen(!menuOpen)}>
                        <span
                            className={`absolute rounded left-0 h-0.5 bg-pink transition-transform duration-300 ease-in-out ${
                            menuOpen ? 'w-7 md:w-8 transform rotate-45 top-5 md:top-4.5' : 'w-6  rotate-0 md:top-3 top-2.5'
                            }`}
                        />
                        <span
                            className={`absolute rounded left-0 h-0.5 bg-pink transition-transform duration-300 ease-in-out ${
                            menuOpen ? 'w-7 md:w-8 transform -rotate-45 bottom-3.5 md:bottom-5' : ' w-9 rotate-0 md:bottom-3.5 bottom-2.5'
                            }`}
                        />
                    </button>
                    <nav className="hidden lg:block text-center">
                        <ul className="flex space-x-9 text-pink font-druk text-2xl">
                            <li><Link to={"/"} >О нас</Link></li>
                            <li><Link to={"/raspisanye"}>Расписание</Link></li>
                            <li><a href="#" >Прайс</a></li>
                        </ul>
                    </nav>
                    {menuOpen && <nav className='lg:hidden fixed top-0 left-0 w-full h-full bg-white z-50'>
                        <div className='px-10 md:px-13 py-1.5 md:py-2'>
                            <a href="#">
                                <img className='w-32 md:w-36' src={logo} alt="Logo"/>
                            </a>
                        </div>
                        <ul className='flex flex-col justify-center items-center h-full text-pink font-druk text-3xl md:text-4xl gap-8 md:gap-16'>
                            <li ><Link to={"/"}>О нас</Link></li>
                            <li ><Link to={"/raspisanye"}>Расписание</Link></li>
                            <li><a href="#" >Прайс</a></li>
                        </ul>
                    </nav>}
                </div>
            </nav>
        </header>
        
    )
}

export default Header
