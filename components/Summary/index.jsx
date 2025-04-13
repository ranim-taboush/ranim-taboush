"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Summary() {
  return (
    <section className="">
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
        className="size-full py-16 px-4 flex flex-wrap-reverse justify-center items-center gap-8 bg-dark rounded-lg shadow-lg"
      >
        <div className="max-w-2xl w-full">
          <h2 className="text-3xl text-neonBlue pb-2 mb-4 border-b w-full border-neonBlue max-w-2xl">
            Summary
          </h2>
          <p className="text-light flex flex-col gap-4 max-w-2xl">
            <span>
              I am a passionate and dedicated <b>software engineer</b> with a strong foundation in web development and a keen interest in mobile app development.
            </span>
            <span>
              I thrive in collaborative environments and enjoy tackling complex challenges with innovative solutions.
            </span>
            <span>
              Having +4 year of experience in frontend, and +1 year of experience in backend, I am comfortable working with 
              html, CSS, tailwindCss, Boostrap, JavaScript, reactjs, nextjs, nodejs, and flutter.
            </span>
          </p>
        </div>
        <div className="max-w-60 w-full animate-lateral">
          <Image
            src="/images/svg/software-engineer.svg"
            alt="software engineer"
            width={500}
            height={500}
            className="w-full h-auto object-fill animate-bounce [animation-duration:_3s]"
          />
        </div>
      </motion.div>
    </section>
  );
}
