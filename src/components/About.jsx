import React from "react";

export const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          Hello there, I'm Tiernan, and I've been immersed in the world of
          programming since I was 15. For me, coding is more than just a
          skill—it's a way to transform ideas into finished products, whether
          they're practical solutions or quirky experiments. Self-taught and
          driven by curiosity, I've forged my own path in software development.
          From my early days of wild experimentation to the serious projects I'm
          currently engaged in, my journey has been about pushing boundaries and
          embracing the possibilities that code offers.
          <br /> <br />
          The thrill of creating anything I can dream of has always captivated
          me. Over the past five years, I've been my own teacher, constantly
          learning and exploring new technologies. As a frontend developer, I
          specialize in crafting seamless user experiences and translating ideas
          into visually appealing designs. Attention to detail is my forte. It's
          not just about writing lines of code; it's about creating solutions
          that are functional, practical, and efficient.
          <br /> <br />I believe in the 'dream it, build it' philosophy. My
          portfolio showcases my skills as a developer, highlighting my passion
          for creating solutions no matter the challenge.
        </p>

        <br />
      </div>
    </div>
  );
};
