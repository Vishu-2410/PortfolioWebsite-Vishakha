import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo,project4,project5,project6,project7} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="E-commerce Website"
          des=" A platform for online shopping that allows users to browse and purchase products with ease."
          src={projectOne}
          gitlink="https://github.com/Vishu-2410/ecommerce-website"
          livelink="https://ecommerce-website-1.netlify.app/"
        />
        <ProjectsCard
          title="Chatting App"
          des="  A real-time messaging application that facilitates communication between users, offering features like chat rooms and direct messaging."
          src={projectTwo}
          gitlink="https://github.com/Vishu-2410/Chatting-App"
          livelink="https://chatting-app-1.netlify.app/"
        />
        <ProjectsCard
          title="Weather App"
          des=" An application that provides up-to-date weather information, including temperature, forecasts, and weather conditions based on the user’s location."
          src={project5}
          gitlink="https://github.com/Vishu-2410/Weather-App"
          livelink="https://weather-app-1.netlify.app/"
        />
        <ProjectsCard
          title="Expense Tracker App"
          des=" A financial tool that helps users track and manage their daily expenses, offering insights into spending patterns.This system allows users to add, edit, and delete expenses. Users can categorize expenses, view summaries, and analyze their spending habits. The application ensures a smooth and user-friendly experience."
          src={project4}
          gitlink="https://github.com/Vishu-2410/Expense-Tracker-App"
          livelink="https://expense-tracker-app-1.netlify.app/"
        />
        <ProjectsCard
          title="Job Portal - React"
          des="  The Job Portal is a React-based application designed to connect job seekers with employers. Users can search for jobs, apply for positions, and manage their job applications This platform allows job seekers to browse and apply for job listings posted by employers. Employers can create and manage job listings, review applications, and communicate with potential candidates."
          src={project7}
          gitlink="https://github.com/Vishu-2410/Job-Portal"
          livelink="https://job-portal-1.netlify.app/"
        />
        <ProjectsCard
          title="Online Quiz Platform - React"
          des="  The Online Quiz Platform is a comprehensive web application built using React. It allows users to create, take, and manage quizzes efficiently. The platform supports various question types and provides detailed results and analytics. This platform enables users to create quizzes with multiple question types, take quizzes, and view results. It supports user authentication and authorization, ensuring that only authorized users can create or modify quizzes."
          src={project6}
          gitlink="https://github.com/Vishu-2410/Online-Quiz-Platform"
          livelink="https://online-quiz-platform-1.netlify.app/"
        />
      </div>
    </section>
  );
}

export default Projects