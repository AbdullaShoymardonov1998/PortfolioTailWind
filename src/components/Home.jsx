import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-gray-900">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-teal-500">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Abdulla Baxromovich
        </h1>
        <h2 className="text-3xl sm:text-5xl font-semibold text-teal-300">
          FrontEnd Developer
        </h2>
        <p className="text-gray-400 py-4 max-w-[700px]">
          Self motivated, very passionate, hard working and responsible person
          with a strong commitment to develop skills within the IT industry. I
          am able to work both in a team environment as well as using my own
          initiative
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-teal-500 hover:border-teal-600">
            <Link to="about" smooth={true} offset={50} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
