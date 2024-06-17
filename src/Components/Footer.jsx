import React from 'react'
import logo from  '../assets/images/Logo-1.png'
const Footer = () => {
  return (
    <div className='flex justify-center bg-[#fff3f4] mt-20'>
         <div className='gap-[40px]  flex  py-4 items-center flex-col'>
            <img src={logo} alt="logo"  className='w-[240px] h-12 '/>
            <div className='text-2xl pb-5'>
            Made with ❤️ by Sukhpreet Singh
            </div>
         </div>
    </div>
  )
}

export default Footer