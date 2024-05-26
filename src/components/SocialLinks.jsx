import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {
    const links = [
      {
        icon: <FaLinkedin size={30} />,
        text: 'Linkedin',
        href: 'https://www.linkedin.com/in/iamsanjaych',
        backgroundColor: 'bg-blue-600',
        textColor: 'text-gray-300',
      },
      {
        icon: <FaGithub size={30} />,
        text: 'Github',
        href: 'https://github.com/Sanjay-Choudhary07',
        backgroundColor: 'bg-gray-800', // Adjust as needed
        textColor: 'text-gray-300',
      },
      {
        icon: <HiOutlineMail size={30} />,
        text: 'Email',
        href: 'mailto:iamsanjaych@gmail.com',
        backgroundColor: 'bg-orange-500', // Adjust as needed
        textColor: 'text-gray-100',
      },
      {
        icon: <BsFillPersonLinesFill size={30} />,
        text: 'Resume',
        href: 'https://drive.google.com/file/d/1nCLFMOhdRsOQOx5suzwPqmzuq3nUobe1/view?usp=drive_link',
        backgroundColor: 'bg-gray-700', // Adjust as needed
        textColor: 'text-gray-300',
      },
    ];
  
    return (
      <div className="hidden lg:flex fixed flex-col top-[39%] left-0">
        <ul>
          {links.map(({ icon, text, href, backgroundColor, textColor }) => (
            <li
              key={text}
              className={`flex px-4 w-40 h-16 justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${backgroundColor}`}
            >
              <a
                target="_blank"
                rel="noreferrer"
                className={`flex justify-between items-center w-full ${textColor}`}
                href={href}
              >
                {text}{icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SocialLinks;