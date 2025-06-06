import React from 'react'
import logo from '../icons/logo3.png';
import { Link } from 'react-router-dom';

const Footer = ({scrollTo}) => {
  return (
    <footer className='bg-dark text-beige text-base md:text-lg lg:text-xl w-full p-5 md:py-7 md:px-10 lg:py-10 lg:px-13'>
      <div className='lg:flex lg:justify-center lg:gap-15'>
         <Link to={"/"}>
          <img className='w-42 md:w-46 lg:w-50 mb-5 md:mb-7' src={logo} alt="Logo"/>
        </Link>
        <div className='flex flex-col gap-2 ml-2 mb-5 md:mb-7'>
          <a href="">О студии</a>
          <a onClick={scrollTo}>Направления</a>
          <Link to={"/raspisanye"}>Расписание</Link>
          <Link to={"/price"}>Прайс</Link>
        </div>
        <div className='flex flex-row w-73 md:w-100 justify-between px-2 mb-5 md:mb-7'>
          <div>
            <p><span className='text-lightbeige'>АДРЕС</span> <br />Черкесская 18</p>
          </div>
          <div>
            <p className='mb-2 lg:mb-4'><span className='text-lightbeige'>КОНТАКТЫ</span> <br />+7 (953) 559-96-86</p>
            <div className='flex flex-row gap-3 '>
              <a href="https://vk.com/blnce_nn"><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-lightbeige"
                  viewBox="0 0 24 24"><path d="M22.316,1.684C20.632,0,17.921,0,12.5,0h-1C6.079,0,3.368,0,1.684,1.684C0,3.368,0,6.079,0,11.5v1   c0,5.421,0,8.131,1.684,9.816S6.079,24,11.5,24h1c5.421,0,8.131,0,9.816-1.684C24,20.632,24,17.921,24,12.5v-1   C24,6.079,24,3.368,22.316,1.684z M19.503,17h-1.75c-0.667,0-0.863-0.532-2.05-1.719c-1.039-1.001-1.484-1.131-1.743-1.131   c-0.353,0-0.458,0.1-0.458,0.6v1.569c0,0.43-0.137,0.681-1.25,0.681c-1.854,0-3.892-1.126-5.339-3.202   c-2.17-3.041-2.763-5.34-2.763-5.803c0-0.26,0.1-0.495,0.6-0.495h1.751c0.447,0,0.615,0.196,0.783,0.68   c0.856,2.493,2.3,4.672,2.893,4.672c0.222,0,0.324-0.103,0.324-0.667V9.608c-0.065-1.186-0.696-1.284-0.696-1.706   c0-0.195,0.167-0.402,0.445-0.402h2.751c0.371,0,0.5,0.198,0.5,0.643v3.467c0,0.37,0.161,0.5,0.272,0.5   c0.223,0,0.408-0.13,0.816-0.538c1.261-1.409,2.151-3.578,2.151-3.578c0.112-0.26,0.316-0.495,0.762-0.495h1.75   c0.529,0,0.641,0.272,0.529,0.643c-0.223,1.02-2.355,4.023-2.355,4.023c-0.186,0.297-0.26,0.445,0,0.779   c0.186,0.26,0.797,0.779,1.205,1.261c0.752,0.846,1.319,1.559,1.477,2.051C20.254,16.75,20.003,17,19.503,17z"/> </svg></a>
              <a href="https://t.me/balance_nn1"><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-lightbeige"
                  viewBox="0 0 24 24">
                  <path d="M12,0C5.373,0,0,5.373,0,12s5.373,12,12,12s12-5.373,12-12S18.627,0,12,0z    M17.562,8.161c-0.18,1.897-0.962,6.502-1.359,8.627c-0.168,0.9-0.5,1.201-0.82,1.23c-0.697,0.064-1.226-0.461-1.901-0.903   c-1.056-0.692-1.653-1.123-2.678-1.799c-1.185-0.781-0.417-1.21,0.258-1.911c0.177-0.184,3.247-2.977,3.307-3.23   c0.007-0.032,0.015-0.15-0.056-0.212s-0.174-0.041-0.248-0.024c-0.106,0.024-1.793,1.139-5.062,3.345   c-0.479,0.329-0.913,0.489-1.302,0.481c-0.428-0.009-1.252-0.242-1.865-0.442c-0.751-0.244-1.349-0.374-1.297-0.788   c0.027-0.216,0.324-0.437,0.892-0.663c3.498-1.524,5.831-2.529,6.998-3.015c3.333-1.386,4.025-1.627,4.477-1.635   C17.472,7.214,17.608,7.681,17.562,8.161z"/>
                </svg></a>
            </div>
            
          </div>
        </div>

      </div>
      <p className='text-lightbeige m-2 lg:text-center'>© 2025 все права защищены</p>
      <a className='text-lightbeige m-2 text-sm md:text-base lg:text-lg block lg:text-center' href="https://t.me/ladosq ">Сайт разработала Лада Никифорова</a>
        
      
    </footer>
  )
}

export default Footer
