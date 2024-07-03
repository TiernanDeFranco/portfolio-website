import React from "react";
import expo from "../assets/expo.png";
import aws from "../assets/aws.png";
import vite from "../assets/vite.svg";

export const Technologies = () => {
  const tools = [
    {
      id: 1,
      title: "JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      style: "shadow-yellow-500",
    },
    {
      id: 2,
      title: "TypeScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      title: "React",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      style: "shadow-cyan-500",
    },
    {
      id: 4,
      title: "Vite",
      src: "https://vitejs.dev/logo.svg",
      style: "shadow-violet-400",
    },
    {
      id: 5,
      title: "Next.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      style: "shadow-gray-500",
    },
    {
      id: 6,
      title: "Expo",
      src: expo,
      style: "shadow-white",
    },
    {
      id: 7,
      title: "Supabase",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
      style: "shadow-green-500",
    },
  ];

  return (
    <div
      name="technologies"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-blue-500 p-2 inline">
            Technologies
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0">
          {tools.map((tech) => (
            <div
              key={tech.id}
              className={`shadow-md hover:scale-110 duration-300 py-3 rounded-lg ${tech.style}`}
            >
              <img
                src={tech.src}
                className={`w-20 mx-auto ${
                  tech.title === "Expo" && "bg-white rounded-lg p-4"
                }`}
              />
              <p className="mt-4">{tech.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
