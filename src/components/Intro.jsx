import React from "react";

const Intro = () => {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Tiernan DeFranco</h1>

            <p className="text-base md:text-xl mt-1 mb-3 font-medium rounded-md p-1 text-white bg-gradient-to-r from-cyan-500 to-blue-500 drop-shadow-md">
            Software Engineer  </p>

            <p className="text-sm max-w-xl
            mb-5 font-bold">
                I've been into programming since I was 15, always learning and building stuff.
                I love turning crazy ideas into real things, whether they're practical or just for fun. 
                I taught myself everything I know about software development and           
                my goal is to keep getting better at what I do. <br /><br />
                Starting from the crazy experiments and ideas of my teenage years,
                to the serious projects I work on now and in the future. I believe as long as you can imagine it, it can be done! </p>
        </div>
    )
}

export default Intro;
