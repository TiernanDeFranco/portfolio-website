import React from 'react';  
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const SocialLinks = () => {

    const Twitter = () => {
        return (
          <svg xmlns="http://www.w3.org/2000/svg" height="30" fill="#FFFFFF" width="30" viewBox="0 0 448 512">
            {/* FontAwesome Free 6.5.1 icon data */}
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
          </svg>
        );
      };

const links = [
    {
        id: 1,
        child: (
            <>
            LinkedIn <FaLinkedin size={30}/>
        </>
        ),
        href: 'https://www.linkedin.com/in/tiernan-defranco-a4314b2a2/',
        style: 'rounded-tr-md',
    },
    {
        id: 2,
        child: (
            <>
            GitHub <FaGithub size={30}/>
        </>
        ),
        href: 'https://github.com/TiernanDeFranco',
    },
    {
        id: 3,
        child: (
            <>
            Twitter / X <Twitter size={30}/>
        </>
        ),
        href: 'https://www.twitter.com/TiernanDeFranco',
        style: 'rounded-br-md',
    }
]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
    <ul>
        {links.map((link) => (
        <li key={link.id}  onClick={() => window.open(link.href, "_blank")} className={"flex cursor-pointer justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-5px] hover:rounded-md duration-300 bg-gray-600" + " " + link.style}>
            <a
            className='flex justify-between items-center w-full text-white'>
                <>
               {link.child}
            </>
            </a>
        </li>
        ))}

    </ul>
    </div>
  )
}
