import React from 'react'
import profileImage from '../assets/Sanjay.png'
import { FaArrowRight } from "react-icons/fa6";
import {Link} from 'react-scroll';
function Home() {
  return (
    <div name="home" className='h-screen w-full bg-black text-white bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center
      h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full mt-{-4}'>
          <h2 className='text-4xl sm:text-7xl font-bold text text-white'>
            I'm a Web Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            As a web developer, I am devoted to transforming visions into reality
            with elegant front-end development and seamless back-end integration.
          </p>
          <div>
            <Link
              to="Portfolio"
              smooth
              duration={500}
              className='text-white group w-fit px-6 py-3 my-2 flex items-center
             rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 '
          //  <button className='text-white group w-fit px-6 py-3 my-2 flex items-center
          //    rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 '>
          >
            Portfolio
            <span className='group-hover:rotate-90 px-2 duration-300'>
              <FaArrowRight/>
            </span>
            </Link>
            {/* </button> */}
          </div>
        </div>
        <div>
         <img src={profileImage} alt='profile image' className='rounded-2xl mx-auto
         w-2/3 md:w-full'/>
         </div>
      </div>
    </div>
  )
}

export default Home
