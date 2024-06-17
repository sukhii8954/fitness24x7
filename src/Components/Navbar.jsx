import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <div className=''>
     <div className='flex  mx-10 gap-36 justify-between sm:gap-28 xs:mx-6
      mt-4 xs:mt-28  sm:justify-normal  px-5'>
        <a href='/' >
          <img className='w-16 h-16 my-0 mx-4' src={Logo} alt="logo" />
        </a>
      
      <div className='flex gap-10 text-2xl items-end'>
          
       <a  className= ' text-[#3A1212]  border-b-2 border-red-800 ' href="/">Home</a>
        <a className=' no-underline  text-[#3A1212]' href="#excercises">Excercises</a>
      </div>
       
     </div>
    </div>
  )
}

export default Navbar