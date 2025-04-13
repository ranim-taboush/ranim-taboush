"use client"
import AdvancedFlipCard from '@/components/UI/AdvancedFlipCard';
import { projectItems } from '@/config/data';
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="py-16 ">
      <h2 className="uppercase tracking-wider lg:text-5xl font-bold [text-shadow:2px_2px_4px_#ff0266,-2px_-2px_4px_#03dac6] text-light text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectItems.map((project, i) => (
          // <Card key={project.id} className="flex flex-col">
          //   <img src={project.imgSrc} alt={project.name} className="w-full h-48 object-cover rounded-md mb-4" />
          //   <h3 className="text-xl text-light mb-2">{project.name}</h3>
          //   <p className="text-gray-300 mb-2">{project.description}</p>
          //   <p className="text-gray-400 text-sm mb-4">{project.using}</p>
          //   <div className="flex justify-between">
          //     <a href={project.infoLink} className="text-neonBlue hover:underline">Info</a>
          //     <a href={project.codeLink} className="text-neonBlue hover:underline">Code</a>
          //     <a href={project.demoLink} className="text-neonBlue hover:underline">Demo</a>
          //   </div>
          // </Card>
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 150, scaleY: 0.1 }}
            whileInView={{ opacity: 1, y: 0, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 12,
              mass: 0.75,
              delay: 0.5 + i * 0.1,
            }}
            className="w-full"
            style={{ transformOrigin: "top" }}
          >
            <AdvancedFlipCard
              links={{
                infoLink: project.infoLink,
                codeLink: project.codeLink,
                demoLink: project.demoLink,
              }}
              bgImg={project.imgSrc}
              frontSubject={project.description}
              frontTitle={project.name}
              backHeading="Skill Set"
              backDetails={project.using?.split(" / ")}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
