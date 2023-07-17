import React from "react";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import Fade from "react-reveal/Fade";

const Project = ({ item, counter }) => {
  const client = createClient({
    projectId: "b4bintk8",
    dataset: "production",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);

  return (
    <Fade top distance="20%" duration={1500} delay={counter}>
      <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-2xl flex flex-col bg-gradient-to-r bg-secondary dark:bg-dark group hover:bg-gradient-to-b  transition-colors duration-1000">
        <div className="w-full h-[80%] overflow-hidden rounded-lg">
          <img
            className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
            src={`${builder.image(item.projectimage).url()}`}
            alt="src"
          />
        </div>
        <div className="w-full mt-5 flex flex-col  gap-6">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-base uppercase text-designColor font-normal">
                {item.title}
              </h3>
              <div className="flex gap-2">
                <a
                  href={item.githuburl}
                  target="_blank"
                  className="text-2xl w-10 h-10 rounded-full text-gray-400  inline-flex justify-center items-center  hover:text-primary dark:hover:text-primary duration-300 cursor-pointer"
                >
                  <BsGithub />
                </a>
                <a
                  href={item.liveurl}
                  target="_blank"
                  className="text-2xl w-10 h-10 rounded-full text-gray-400 inline-flex justify-center items-center  hover:text-primary dark:hover:text-primary duration-300 cursor-pointer"
                >
                  <FaGlobe />
                </a>
              </div>
            </div>
            <p className="pt-4 text-lg">{item.description}</p>
            <p className="text-sm tracking-wide mt-3 hover:text-primary duration-300">
              {item.category}
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Project;
