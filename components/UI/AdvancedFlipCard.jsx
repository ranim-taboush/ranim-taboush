"use client";

import React from "react";

export default function AdvancedFlipCard({
  bgImg,
  frontSubject,
  frontTitle,
  backHeading,
  backDetails = [],
  links,
}) {
  return (
    <div className="flex items-center justify-center p-16 min-h-full relative group h-96 hover:h-[36rem] delay-75">
      <div className="relative w-full h-full perspective-[200rem] my-4">
        {/* BACK SIDE */}
        <div
          className={`size-full absolute top-0 left-0 [backface-visibility:hidden] border border-x-neonBlue/50 border-y-neonPink/50 overflow-hidden transition-all duration-700 
            bg-dark text-light [transform:rotateY(180deg)] group-hover:[transform:rotateY(0deg)] shadow-lg `}>
          <div className={`relative size-full rounded-tl-sm rounded-tr-sm overflow-hidden [clip-path:polygon(0_0,100%_0,100%_85%,0_100%)]
             group-hover:h-32 transition-all duration-700 delay-150`}>
            <img src={bgImg} alt="Card background"
              className="absolute inset-0 w-full h-full object-cover bg-gradient-to-bl from-dark/65 to-neonBlue/70 group-hover:to-dark transition-all duration-700 delay-150"
            />
          </div>
          <div className="px-8 py-16">
            <ul className="w-10/12 mx-auto">
              {backDetails.map((item, index) => (
                <li
                  key={index}
                  className={`text-center p-2 border-b border-solid border-gray-400 ${
                    index === backDetails.length - 1 ? "border-none" : ""
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-8">
              {/* <a href={links.infoLink} className="text-neonBlue hover:text-dark px-2 rounded-lg py-1 hover:bg-neonBlue hover:border-r hover:border-b border-neonPink transition duration-700">Info</a> */}
              <a href={links.codeLink} className="text-neonBlue hover:text-dark px-2 rounded-lg py-1 hover:bg-neonBlue hover:border-r hover:border-b border-neonPink transition duration-700">Code</a>
              <a href={links.demoLink} className="text-neonBlue hover:text-dark px-2 rounded-lg py-1 hover:bg-neonBlue hover:border-r hover:border-b border-neonPink transition duration-700">Demo</a>
            </div>
          </div>
        </div>

        {/* FRONT SIDE */}
        <div
          className="size-full absolute top-0 left-0 [backface-visibility:hidden] overflow-hidden transition-all duration-700 group-hover:[transform:rotateY(-180deg)] delay-75 bg-cover shadow-lg bg-gradient-to-bl from-dark/65 to-neonBlue/70"
        >
          <img src={bgImg} alt="Card background"
            className="absolute inset-0 w-full h-full object-cover [clip-path:polygon(0_0,100%_0,100%_85%,0_100%)] brightness-[.2] saturate-50 opacity-80 group-hover:scale-90 transition-all"
          />
          <div className="absolute text-center inset-0 gap-2">
            <div className="text-light size-full px-8 flex items-center justify-center flex-col gap-2">
              <p className="lg:text-medium text-small drop-shadow-xl mb-4">{frontSubject}</p>
              <p className="uppercase lg:tracking-[0.6rem] tracking-widest lg:text-3xl font-bold [text-shadow:2px_2px_4px_#ff0266,-2px_-2px_4px_#03dac6]">
                {frontTitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
