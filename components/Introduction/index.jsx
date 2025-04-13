"use client";

import Atom from '@/components/Atom';
import SocialLinks from '@/components/SocialLinks';
import { motion } from 'framer-motion';

export default function Introduction() {
  return (
    <section className="relative w-full text-center">
      <motion.div 
          initial={{ opacity: 0, y: 150, scaleY: 0.1 }}
          whileInView={{ opacity: 1, y: 0, scaleY: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 12,
            mass: 0.75,
            delay: 0.5,
          }}
          className=" min-h-screen w-full flex flex-col items-center justify-center gap-2 ">
        <SocialLinks />
        <div className={`w-4/5 md:p-14 py-20 px-[5%] backdrop-blur flex items-center md:justify-around justify-center 
        max-md:flex-col-reverse md:gap-4 gap-12  bg-dark rounded-lg shadow-lg`}
        >
          <h1 className="flex flex-col items-center justify-between md:text-4xl text-3xl font-bold md:pb-2 pb-4 text-neonBlue">
            <span className="tracking-[.2em]">Hello, I'm </span>
            <span className="transition-all duration-300 md:hover:translate-y-4 hover:translate-y-0 translate-y-2 hover:text-neonGreen">
              <span className="text-neonGreen">Ranim</span> Yassin
            </span>
          </h1>
          <div className="md:size-64 size-44">
            <Atom />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
