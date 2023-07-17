import React from "react";
import ResumeCard from "./ResumeCard";


const Education = ({ EducationAndExperience }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20">
      {/* part one */}
      <div>
        <div className="py-6 lg:py-16 font-titleFont flex flex-col gap-4">
          <h2 className="text-primary text-3xl md:text-4xl font-bold">
            Education
          </h2>
        </div>

        <div className="mt-4 lg:mt-8 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30  flex flex-col gap-10">
          {EducationAndExperience.map((items) => {
            return items.educationdata.map((item) => {
              return (
                <ResumeCard
                  title={item.coursename}
                  subTitle={item.universityname}
                  des={item.description}
                />
              );
            });
          })}
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lg:py-16 font-titleFont flex flex-col gap-4">
          <h2 className="text-primary text-3xl md:text-4xl font-bold">
            Experience
          </h2>
        </div>

        <div className="mt-6 lg:mt-4 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {EducationAndExperience.map((items) => {
            return items.experiencedata.map((item) => {
              return (
                <ResumeCard
                  title={item.designationname}
                  subTitle={item.companyname}
                  result="USA"
                  des={item.description}
                />
              );
            });
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;
