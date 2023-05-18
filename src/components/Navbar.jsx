import React, { useState } from "react";
import {
  FaBars,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTimes,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import "./Navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center border-b-2 border-teal-500 px-4 bg-gray-900 text-gray-300">
      <div>
        <Link to="home" smooth={true} offset={50} duration={500}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
            />
          </svg>
        </Link>
      </div>

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} offset={50} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="works" smooth={true} offset={50} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={50} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}

      {nav && (
        <ul className="absolute top-0 left-0 w-full h-screen bg-gray-900 flex flex-col justify-center items-center ">
          <li className="py-6 text-4xl">
            <Link to="home" smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link to="about" smooth={true} offset={50} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link to="skills" smooth={true} offset={50} duration={500}>
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link to="works" smooth={true} offset={50} duration={500}>
              Projects
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link to="contact" smooth={true} offset={50} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      )}

      {/* Social Icons */}
      <div className="hidden md:flex fixed flex-col top-[30%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold"
              href="https://www.linkedin.com/in/abdulla-shoymardonov/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-400">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold"
              href="https://t.me/A_Shoymardonov"
            >
              Telegram <FaTelegram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-30 bg-gray-700">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold"
              href="https://github.com/AbdullaShoymardonov1998"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-bold"
              href="https://www.facebook.com/abdulla.shoymardonov"
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 instaBackground">
            <a
              className="flex justify-between items-center w-full text-gray-100 font-bold"
              href="https://www.instagram.com/abdulla_cfc"
            >
              Instagram <FaInstagram className="text-gray-300" size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-amber-400">
            <a
              className="flex justify-between items-center w-full text-white font-bold"
              href="mailto:abdulla1998uz@gmail.com"
            >
              Mail <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
