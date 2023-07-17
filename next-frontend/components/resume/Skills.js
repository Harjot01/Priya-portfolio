import React from "react";
import { motion } from "framer-motion";

const Skills = ({ MySkills }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20"
    >
      <div className="w-full lg:w-1/2">
        <div className="py-16 font-titleFont flex flex-col gap-4">
          <h2 className="text-primary text-3xl md:text-4xl font-bold">
            Technical Skills
          </h2>
        </div>
        <div className='className="mt-14 w-full flex flex-col gap-6'>
          {MySkills.map((items) => {
            return items.techskills.map((item) => {
              return (
                <div className="overflow-x-hidden">
                  <p className="text-sm uppercase font-medium">
                    {item.techname}
                  </p>
                  <span 
                  style={{ width: `${item.progress}%`}}
                  className="h-2 bgOpacity rounded-md inline-flex mt-2">
                    <motion.span
                      initial={{ x: "-100%", opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className={"w-full h-full bg-primary rounded-md relative"}
                    >
                      <span className="absolute -top-7 right-0">
                        {item.progress}
                      </span>
                    </motion.span>
                  </span>
                </div>
              );
            });
          })}
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="py-16 font-titleFont flex flex-col gap-4">
          <h2 className="text-primary text-3xl md:text-4xl font-bold">
            Professional Skills
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          {MySkills.map((items) => {
            return items.professionalskills.map((item) => {
              return (
                <div className="overflow-x-hidden">
                  <p className="text-sm uppercase font-medium">
                    {item.skillname}
                  </p>
                  <span
                  style={{ width: `${item.progress}%`}}
                   className=" h-2 bgOpacity rounded-md inline-flex mt-2">
                    <motion.span
                      initial={{ x: "-100%", opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className={`w-full h-full bg-primary rounded-md relative`}
                    >
                      <span className="absolute -top-7 right-0">
                        {item.progress}
                      </span>
                    </motion.span>
                  </span>
                </div>
              );
            });
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
