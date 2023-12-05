import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useState, useEffect } from "react";
import AnimatedLetters from "./AnimateLetters";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo-zj.png";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = [
    "Z",
    "u",
    "b",
    "a",
    "i",
    "r",
    " ",
    "J",
    "a",
    "v",
    "a",
    "i",
    "d",
  ];

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
  }, []);

  return (
    <>

    
      <div
        name="home"
        className="w-full h-screen bg-[#000000] flex justify-aro align-center"
        
      >
        {/* Container */}
        <div className="lg:flex-1">
        <div  className="block lg:hidden">
        <img src={Logo} alt="Logo" style={{ width: "100px" }} className="logo" />
      </div>
          
          <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className="text-pink-600 text-xl">Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={1}
              />
            </h1>
            <br />

            <h2 className="text-xl sm:text-2xl font-bold text-[#8892b0]">
              Full Stack Developer/ Freelancer
            </h2>
            <p className="text-[#8892b0] py-4 max-w-[700px]"></p>
            <div>
              <Link to="work" smooth={true} duration={500}>
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                  View Work
                  <span className="group-hover:rotate-90 duration-300 " >
                    <HiArrowNarrowRight className="ml-3 " />
                  </span>
                </button>

              </Link>
              
          <div className="lg:hidden  bottom-0 left-0">
            <ul className="flex flex-col ">

              <li className="w-[100px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600" >
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href="https://www.linkedin.com/in/mir-zubair-849524291/"
                >
                  Linkedin  <FaLinkedin size={12} />
                </a>
              </li>
              <li className="w-[100px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href="https://github.com/mezubair"
                >
                  Github <FaGithub size={12} />
                </a>
              </li>
              <li className="w-[100px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href="https://mailto:zbrjaveed@gmail.com"
                >
                  Email <HiOutlineMail size={12} />
                </a>
              </li>
              <li className="w-[100px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href="https://drive.google.com/file/d/1Y0_pSLGshGhGJZ0MNpvTfzVAA7hEmWRv/view?usp=drivesdk"
                >
                  Resume <BsFillPersonLinesFill size={12} />
                </a>
              
              </li>

            </ul>
          </div>
            </div>
          </div>

        </div>

      </div>
    </>

  );
};

export default Home;
