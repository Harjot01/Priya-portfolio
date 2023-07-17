import React, { useState } from "react";
import Education from "./Education";
import Skills from "./Skills";
import Certificates from "./Certificates";

const Resume = ({ EducationAndExperience, MySkills, CertificatesGallery }) => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [certificatesData, setCertificatesData] = useState(false);

  return (
    <section id="skills" className="bg-primary/[.03]">
      <div className="flex flex-col mx-auto w-[85%] py-20 ">
        <h2 className="text-center text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Resume
        </h2>
        <h4 className="pt-6 pb-20 text-center text-xl font-medium sm:text-2xl lg:text-3xl">
          Here is my Resume
        </h4>
        <div>
          <nav className="mb-8 max-w-5xl mx-auto">
            <ul className="flex flex-col space-y-3 md:flex-row justify-evenly items-center text-black md:space-x-3 md:space-y-0">
              <li
                onClick={() =>
                  setEducationData(true) &
                  setSkillData(false) &
                  setCertificatesData(false)
                }
                className={`${
                  educationData ? "bg-primary text-white" : "bg-white"
                } resumeLi border-primary shadow-lg rounded-2xl`}
              >
                Education
              </li>
              <li
                onClick={() =>
                  setEducationData(false) &
                  setSkillData(true) &
                  setCertificatesData(false)
                }
                className={`${
                  skillData ? "bg-primary text-white " : "bg-white"
                } resumeLi border-primary shadow-lg rounded-2xl`}
              >
                Professional Skills
              </li>
              <li
                onClick={() =>
                  setEducationData(false) &
                  setCertificatesData(true) &
                  setSkillData(false)
                }
                className={`${
                  certificatesData ? "bg-primary text-white" : "bg-white"
                } resumeLi border-primary shadow-lg rounded-2xl`}
              >
                Certificates
              </li>
            </ul>
          </nav>
        </div>
        {educationData && <Education EducationAndExperience={EducationAndExperience} />}
        {skillData && <Skills MySkills={MySkills} />}
        {certificatesData && (
          <Certificates CertificatesGallery={CertificatesGallery} />
        )}
      </div>
    </section>
  );
};

export default Resume;
