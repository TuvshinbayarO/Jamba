import React from 'react'
import {FaApple, FaCentos} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='w-[5%] bg-black h-screen py-5'>
        <div className='flex flex-col justify-around h-full items-center'>
            <p className='text-white'>Logo</p>
            <div className='flex flex-col justify-between space-y-5'>
                <FaApple className='text-white' />
                <FaApple className='text-white' />
                <FaApple className='text-white' />
            </div>
            <FaCentos className='text-white' />
        </div>
    </div>
  )
}

export default Navbar