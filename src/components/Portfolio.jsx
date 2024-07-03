import React from "react";
import "../styles/portfolio.css";
import fauxnancebank from "../assets/fauxnancebanking.png";
import fauxnanceinvest from "../assets/fauxnanceinvesting.png";
import hmLogo from "../assets/HmLogo2.png";
import cardCompare from "../assets/cardCompare.png";

export const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: "Fauxnance Banking",
      src: fauxnancebank,
      stack: ["React", "TypeScript", "Firebase"],
      link: "https://fauxnance-banking.netlify.app/",
      github: "https://github.com/TiernanDeFranco/fauxnance-banking",
    },
    {
      id: 2,
      name: "Card Compare",
      src: cardCompare,
      stack: ["React", "TypeScript", "Firebase"],
      link: "https://cardcompare.io/",
      github: "https://github.com/TiernanDeFranco/card-compare",
    },
    {
      id: 3,
      name: "HealthMode: Fitness for Free",
      src: hmLogo,
      stack: ["React Native / Expo", "Supabase"],
      link: "https://www.healthmode.app/",
    },
  ];

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

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map((project) => (
            <div
              key={project.id}
              className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 cursor-pointer"
            >
              <label className="justify-center flex py-1 font-bold">
                {project.name}
              </label>
              <div className="image-container">
                <img src={project.src} alt="" className="rounded-md" />
              </div>
              <div className="scrolling-wrapper mx-auto py-2 space-x-1">
                {project.stack.map((tech, index) => (
                  <div
                    key={index}
                    className="item flex items-center justify-center border border-gray-300 rounded px-1.5 py-1 text-sm"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <div className="flex justify-around py-2">
                {project.github && (
                  <button
                    onClick={() => window.open(project.github, "_blank")}
                    className="border-2 border-gray-600 bg-gradient-to-b from-gray-800 to-gray-900 px-4 py-1 rounded-md text-gray-500 hover:text-gray-200"
                  >
                    GitHub
                  </button>
                )}
                {project.link && (
                  <button
                    onClick={() => window.open(project.link, "_blank")}
                    className="border-2 border-gray-800 bg-gradient-to-r from-cyan-700 to-blue-800 px-2 py-1 rounded-md text-gray-400 hover:text-gray-100"
                  >
                    Link
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
