import React from 'react'
import HeroIamge from "../assets/Chandru A.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black
    to-gray-800 text-white'>
       
       <div className='max-w-screen-lg mx-auto flex flex-col items-center h-full px-4 md:flex-row '>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                I'm a Full Stack Developer
            </h2>
            <p className='text-gray-500 py-4 max-w-md'>
                I have 2 years of experience and designing software.
                Currently, I love to work on web application using technologies like React, Tailwind. 
            </p>
             
             <div>
                <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-gray-400 to-blue-400 cursor-pointer'>
                    Hire me
                    <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                    </span>
                </button>
             </div>
             </div>
        <div>
            <img className='rounded-2xl mx-auto h-80 md:w-full' src={HeroIamge} alt="my profile" />
        </div>

        
       </div>



    </div>
  )
}
