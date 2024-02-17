import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaBootstrap, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";

const SkillSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="absolute container mx-auto py-8 bg-black text-sky-700">
      <h2 className="text-2xl font-bold mb-2 -mt-28">Skills</h2>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-5 bg-black">
        <SkillCard icon={<FaHtml5 className="text-4xl mx-auto bg-black" />} name="HTML5" />
        <SkillCard icon={<FaCss3Alt className="text-4xl mx-auto bg-black" />} name="CSS3" />
        <SkillCard icon={<FaBootstrap className="text-4xl mx-auto bg-black" />} name="BootStrap" />
        <SkillCard icon={<IoLogoJavascript className="text-4xl mx-auto bg-black" />} name="JavaScript" />
        <SkillCard icon={<FaReact className="text-4xl mx-auto bg-black" />} name="React" />
        <SkillCard icon={<SiTailwindcss className="text-4xl mx-auto bg-black" />} name="Tailwind" />
        <SkillCard icon={<FaNodeJs className="text-4xl mx-auto bg-black" />} name="Node.js" />
        <SkillCard icon={<FaDatabase className="text-4xl mx-auto bg-black" />} name="Databases" />
      </div>

      <div className="flex justify-end mt-8">
        <button
          onClick={scrollToTop}
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-4"
        >
          <FaArrowUp className="text-2xl" />
        </button>
        <button
          onClick={scrollToBottom}
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <FaArrowDown className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

const SkillCard = ({ icon, name }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-lg text-center">
      {icon}
      <p className="text-lg mt-2">{name}</p>
    </div>
  );
};

export default SkillSection;
