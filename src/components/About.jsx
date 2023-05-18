import React from "react";
import abd from "../assets/1.png";
const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gray-900 text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-teal-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-20 pl-8">
          <div className="sm:text-right pt-8">
            <p className=" text-3xl font-bold">
              Hi, my name is Abdulla
            </p>
            <p className="text-xl">
              I am 25 years old FrontEnd Developer from Jizzakh, Uzbekistan. I love reading books. Football and table tennis are one of my favourite hobbies. Programming is the part of my life and I do love what I do. 
            </p>
          </div>
          <div>
            <img
              className="h-64 max-w-lg transition-all duration-300 rounded-full blur-sm hover:blur-none"
              src={abd}
              alt="image description"
            />
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default About;
