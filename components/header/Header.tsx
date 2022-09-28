import Image from 'next/image'
import React from 'react'
import {FaUserAlt} from 'react-icons/fa'
const Header = () => {
  return (
    <div className='w-full h-screen'>
        <div className='container mx-auto pt-14'>
            <div className='flex justify-between w-full'>
                <div className='w-[65%]'>
                    <h1 className='text-black text-3xl w-[65%]'>Monitor health of your business</h1>
                    <div className='flex justify-between items-center'>
                        <p className='text-gray-500 text-xs pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit itaque.</p>
                        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">   
                            <li className="mr-2">
                                <a href="#" className="inline-block py-2 px-8 text-white bg-green-300 rounded-2xl active" aria-current="page">Weak</a>   
                            </li>    
                            <li className="mr-2">
                                <a href="#"  className="inline-block py-2 px-8 rounded-2xl hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Month</a>    
                            </li>    
                            <li className="mr-2">        
                                <a href="#" className="inline-block py-2 px-8 rounded-2xl hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Year</a>    
                            </li>    
                        </ul>
                    </div>
                    <div className='flex justify-between pt-10'>
                        <div className=' h-56 w-64 rounded-2xl shadow-2xl p-5 flex flex-col justify-between'>
                            <div className='flex justify-between'>
                                <p>Views</p>
                                <FaUserAlt />
                            </div>
                            <div className='flex justify-between items-center'>
                                <h1 className='font-bold text-3xl'>31</h1>
                                <p>+3 last day</p>
                            </div>
                        </div>
                        <div className=' h-56 w-64 rounded-2xl shadow-2xl p-5 flex flex-col justify-between'>
                            <div className='flex justify-between'>
                                <p>Views</p>
                                <FaUserAlt />
                            </div>
                            <div className='flex justify-between items-center'>
                                <h1 className='font-bold text-3xl'>31</h1>
                                <p>+3 last day</p>
                            </div>
                        </div>
                        <div className=' h-56 w-64 rounded-2xl shadow-2xl p-5 flex flex-col justify-between'>
                            <div className='flex justify-between'>
                                <p>Views</p>
                                <FaUserAlt />
                            </div>
                            <div className='flex justify-between items-center'>
                                <h1 className='font-bold text-3xl'>31</h1>
                                <p>+3 last day</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[30%]'>
                    <div className=' h-[21rem] w-full bg-red-500 rounded-3xl' style={{backgroundImage: `url('https://media.istockphoto.com/photos/business-office-building-in-london-england-picture-id511061090?k=20&m=511061090&s=612x612&w=0&h=nPelzFaYsfdi9j8Prva-ob89zxr870ZiH-bTN6X2X4o=')`}} />
                </div>
            </div>   
        </div>
    </div>
  )
}

export default Header