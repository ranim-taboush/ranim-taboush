"use client";

import AnimatedRainbowCard from '@/components/UI/AnimatedRainbowCard';
import { skillsData } from '@/config/data';
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section className="py-16 px-4">
      <h2 className="uppercase tracking-wider lg:text-5xl font-bold [text-shadow:2px_2px_4px_#ff0266,-2px_-2px_4px_#03dac6] text-light text-center mb-8">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skillsData.map((skill, index) => (
          <motion.div key={`skill-${index}`} 
          initial={{ opacity: 0, y: 150, scaleY: 0.1 }}
          whileInView={{ opacity: 1, y: 0, scaleY: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 12,
            mass: 0.75,
            delay: 0.5 + index * 0.1,
          }}
          className="w-4/5">
            <AnimatedRainbowCard className="flex flex-col items-center">
              <img src={skill.img} alt={skill.alt} className="w-16 h-16 object-contain mb-2" />
              <span className="text-gray-200">{skill.title}</span>
            </AnimatedRainbowCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
