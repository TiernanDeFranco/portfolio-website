import React from 'react';
import '../styles/portfolio.css';
import mcBike from '../assets/minecraftbike.jpg';
import hmLogo from '../assets/HmLogo2.png';

export const Portfolio = () => {

    const projects = [
        {
            id: 1,
            name: "Minecraft with a Bike",
            src: mcBike,
            stack: ["GPC","Titan Two"],
            link: "https://github.com/TiernanDeFranco/minecraft-bike",
        },
        {
            id: 2,
            name: "HealthMode (Prototype)",
            src: hmLogo,
            stack: [".NET MAUI", "SQL Server", "AWS", "ASP. NET"],
            link: "https://github.com/TiernanDeFranco/HealthModeApp",
        },
    ]

  return (
   
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
                {projects.map((project) => (
                    <div key={project.id}  onClick={() => window.open(project.link, "_blank")} className='shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 cursor-pointer'>
                        <label className='justify-center flex py-1 font-bold'>{project.name}</label>
                        <img src={project.src} alt="" className='rounded-md'/>
                        <div className="scrolling-wrapper mx-auto py-2 space-x-1">
                            {project.stack.map((tech, index) => (
                                <div key={index} className="item flex items-center justify-center border border-gray-300 rounded px-1.5 py-1 text-sm">
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>


        </div>
    </div>

  )
}
