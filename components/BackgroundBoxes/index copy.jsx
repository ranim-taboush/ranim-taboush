"use client";

import React, { useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const letters = [
  "F",
  "U",
  "L",
  "L",
  "S",
  "T",
  "A",
  "C",
  "K",
  "\u00A0",
  "W",
  "E",
  "B",
  "\u00A0",
  "A",
  "N",
  "D",
  "\u00A0",
  "M",
  "O",
  "B",
  "I",
  "L",
  "E",
  "\u00A0",
  "A",
  "P",
  "P",
  "L",
  "I",
  "C",
  "A",
  "T",
  "I",
  "O",
  "N",
  "S",
];


export default function NavigationSection() {

  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-[#1e1f26] text-center p-8 overflow-hidden">
      {/* Heading */}
      <h1 className="z-10 font-josefin text-[5vw] ">
        FRONTEND TRENDS
      </h1>

      {/* Animated Loader Text */}
      <h3 className="loader z-10 mt-4 inline-block font-roboto text-[2vw] tracking-[0.7em] font-light text-[#faebd7]">
        {letters.map((char, idx) => (
          <span key={idx} className={`m inline-block animate-loader delay-${idx}`}>
            {char}
          </span>
        ))}
      </h3>
    </section>
  );
}