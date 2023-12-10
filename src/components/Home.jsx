import React from 'react';
import heroImage from '../assets/hero-image.jpg';
import { MdKeyboardArrowRight } from "react-icons/md";
import {Link} from 'react-scroll';

export const Home = () => {
    return (
        <div
          name="home"
          className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
        >
          <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-4xl sm:text-7xl font-bold text-white">
                I'm a Frontend Developer
              </h2>
              <h3 className='text-md sm:text-1xl text-gray-600 mt-1'>
                With backend experience from personal projects
              </h3>
              <p className="text-gray-500 py-4 max-w-md">
                I have been programming since I was 15 <br /> (around 5 years), 
                have made some small games when I started, have worked with the .NET MAUI framework for mobile development
                and am currently working on a web application using React and TypeScript
              </p>
    
              <div>
                <Link
                  to="portfolio"
                  smooth
                  duration={500}
                  className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-200"
                >
                  Portfolio
                  <span className="group-hover:rotate-90 duration-300">
                    <MdKeyboardArrowRight size={25} className="ml-1" />
                  </span>
                </Link>
              </div>
            </div>
    
            <div>
              <img
                src={heroImage}
                alt=""
                className="rounded-2xl mx-auto w-8/12 md:w-9/12 shadow-md shadow-cyan-600 hover:scale-105 duration-300"
              />
            </div>
          </div>
        </div>
      );
}
