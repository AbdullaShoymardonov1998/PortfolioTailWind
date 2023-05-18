import React from "react";
import tailwindLogo from "../assets/tail.png";
import reactLogo from '../assets/react.png';
import jsLogo from '../assets/jsLogo.png'; 
import bootstrapLogo from '../assets/bootstrapLogo.png'; 
import html5Logo from '../assets/html5.png'; 
import cssLogo from '../assets/cssLogo.png'; 
import muiLogo from '../assets/muiLogo.png'; 
import SAPlogo from '../assets/SAPlogo.png'; 
const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-gray-900 text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-teal-600">Skills</p>
          <p className="py-4">Technologies I learned so far</p>
        </div>
       
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-slate-800">
            <img className="w-20 mx-auto pt-2" src={reactLogo} alt="React JS" />
            <p className="my-4">React JS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-slate-800">
            <img className="w-20 mx-auto" src={tailwindLogo} alt="TailwindLogo" />
            <p className="my-4">Tailwind CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-slate-800">
            <img className="w-20 mx-auto pt-1" src={jsLogo} alt="JavaScript" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-slate-800">
            <img className="w-20 mx-auto pt-4" src={bootstrapLogo} alt="Bootstrap" />
            <p className="my-4 pt-2">Bootstrap</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-slate-800">
            <img className="w-20 pt-3 mx-auto" src={html5Logo} alt="html5Logo" />
            <p className="my-2">HTML 5</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-slate-800">
            <img className="w-20 pt-3 mx-auto" src={cssLogo} alt="cssLogo" />
            <p className="my-2">CSS3</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-slate-800">
            <img className="w-20 mx-auto pt-4" src={muiLogo} alt="muiLogo" />
            <p className="my-4 pt-2">Material UI</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-slate-800">
            <img className="w-32 mx-auto pt-4" src={SAPlogo} alt="SAPlogo" />
            <p className="my-4 pt-2">SAP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
