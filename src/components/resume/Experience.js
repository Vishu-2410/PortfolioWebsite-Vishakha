import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-4xl font-bold">Internship Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Programming & Web Development Instructor"
            subTitle="Excel Analytics Computer Traning and Pvt. Ltd."
            result="BHOPAL"
            des=" Led engaging and interactive coding and web development sessions for students.Empowered students through hands-on projects, boosting their practical skills. Delivered personalized mentorship, significantly enhancing student proficiency and enthusiasm for
coding."
          />
         <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Encryptix(IT Services and IT Consulting) - (2024)"
            result="Remote"
            des="his experience has been incredibly enriching, offering hands-on opportunities to enhance my skills in HTML, CSS, and web development. Throughout the internship, I worked on various projects, which honed my technical and creative abilities."
          />
         <ResumeCard
            title="Web Developer & Trainer"
            subTitle="OctaNet Services Pvt Ltd - (2024)"
            result="Remote"
            des="his experience has been incredibly enriching, offering hands-on opportunities to enhance my skills in HTML, CSS, and web development. Throughout the internship, I worked on various projects, which honed my technical and creative abilities."
          />
        </div>
      </div>
      {/* <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="Excel Analytics Computer Traning and Pvt. Ltd. (2024)"
            result="BHOPAL"
            des="Led engaging and interactive coding and web development sessions for students.Empowered students through hands-on projects, boosting their practical skills. Delivered personalized mentorship, significantly enhancing student proficiency and enthusiasm for
coding."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;