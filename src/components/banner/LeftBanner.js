import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Frontend Developer.", "Full Stack Developer.", "UI Designer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Vishakha Mourya</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        <p>
                    I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.
                        .I have worked with a vareity of technologies including React,Node.js,MySQL,SQL server,MongoDB,etc..
                    </p>
                    <p>
                    My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where i continously strive to learn
                           and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.
                             Outside of coding .I enjoy staying active,exploring new technologies,and contributing to open-source projects. 
                    </p>
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner