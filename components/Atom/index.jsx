"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Atom() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.75 }}
      className="relative mx-auto size-full"
    >
      {/* First Wrap (c1 animations) */}
      <div className="absolute inset-0 animate-lateral">
        {/* Horizontal */}
        <div
          className="absolute inset-0 border-[3px] border-solid rounded-full animate-horizontalC1"
          style={{ borderColor: "var(--tw-border-color, #aaa)" }}
        >
          <div className="absolute inset-0 animate-electronC1">
            <div
              className="absolute rounded-full -top-2 left-1/2 size-3 -translate-x-1/2"
              style={{ backgroundColor: "var(--tw-border-color, #39FF14)" }}
            ></div>
          </div>
        </div>
        {/* Vertical */}
        <div
          className="absolute inset-0 border-[3px] border-solid rounded-full animate-verticalC1"
          style={{ borderColor: "var(--tw-border-color, #aaa)" }}
        >
          <div className="absolute inset-0 animate-electronC1">
            <div
              className="absolute rounded-full -top-2 left-1/2 size-3 -translate-x-1/2"
              style={{ backgroundColor: "var(--tw-border-color, #39FF14)" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Second Wrap (c2 animations) */}
      <div className="absolute inset-0 animate-lateralRevert">
        {/* Horizontal */}
        <div
          className="absolute animate-horizontalC2 rounded-full md:size-36 size-28 md:top-[calc((256px-144px)/2)] md:left-[calc((256px-144px)/2)] top-[calc((176px-112px)/2)] left-[calc((176px-112px)/2)]"
          style={{ border: "2px solid var(--tw-border-color-c2, #666)" }}
        >
          <div className="absolute inset-0 animate-electronC2">
            <div
              className="absolute rounded-full -top-2 left-1/2 md:size-3 size-2 -translate-x-1/2"
              style={{ backgroundColor: "var(--tw-border-color-c2, #39FF14)" }}
            ></div>
          </div>
        </div>
        {/* Vertical */}
        <div
          className="absolute animate-verticalC2 rounded-full md:size-36 size-28 md:top-[calc((256px-144px)/2)] md:left-[calc((256px-144px)/2)] top-[calc((176px-112px)/2)] left-[calc((176px-112px)/2)]"
          style={{ border: "2px solid var(--tw-border-color-c2, #666)" }}
        >
          <div className="absolute inset-0 animate-electronC2">
            <div
              className="absolute rounded-full -top-2 left-1/2 md:size-3 size-2 -translate-x-1/2"
              style={{ backgroundColor: "var(--tw-border-color-c2, #39FF14)" }}
            ></div>
          </div>
        </div>
        {/* Core */}
        <div
          className="absolute rounded-full shadow-[0_0_5px_#fff] bg-neonGreen md:size-8 size-6 md:top-[calc((256px-32px)/2)] md:left-[calc((256px-32px)/2)] top-[calc((176px-24px)/2)] left-[calc((176px-24px)/2)]"
        ></div>
      </div>
    </motion.div>
  );
}
