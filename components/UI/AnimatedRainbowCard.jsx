"use client";

import React from "react";

export default function AnimatedRainbowCard({ children, className = '' }) {
  return (
    <div className={`rainbow-card bg-gray-800 block w-full min-h-24 cursor-pointer p-4 mt-8 mx-auto mb-0 border-2 border-solid border-neonBlue transition-all text-light ${className}`}>
      {children}
    </div>
  );
}

