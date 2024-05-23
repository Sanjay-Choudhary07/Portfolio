import React from 'react'
import {Link} from 'react-scroll'
function Navbar() {
  const links = [
    {
      id:1,
      link:'home'
    },
    {
      id:2,
      link:'about'
    },
    {
      id:3,
      link:'skills'
    },
    {
      id:4,
      link:'projects'
    },
    {
      id:5,
      link:'contact'
    }
  ]
  return (
    <div className='flex justify-between w-full items-center h-20 px-4 text-white bg-black fixed'>
      <div>
        <h1 className='text-4xl sm:text-5xl ml-2 mt-3 font-signature'>Sanjay Choudhary</h1>
      </div>
      <ul className='flex'>
        {links.map(({id,link}) => (
            <li 
            key={id}
             className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
             <Link to={link} smooth duration={500}>{link}</Link> 
              </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
