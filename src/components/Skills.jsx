import React from "react";

import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import AWS from "../assets/seo.png";
import Django from "../assets/Wordpress.png";
import Python from "../assets/python.png";
import Docker from "../assets/Java.png";
import Sass from "../assets/Google.png";
import Flutter from "../assets/Mongo.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#000000] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">
            &#47;&#47; These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#D65478] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Django} alt="HTML icon" />
            <p className="my-4">Wordpress Developer</p>
          </div>
          <div className="shadow-md shadow-[#D65478] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Python} alt="HTML icon" />
            <p className="my-4">Python</p>
          </div>
          <div className="shadow-md shadow-[#D65478] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Docker} alt="HTML icon" />
            <p className="my-4">Java</p>
          </div>
          <div className="shadow-md shadow-[#D65478] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#D65478] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#D65478] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Flutter} alt="HTML icon" />
            <p className="my-4">Database Mongo</p>
          </div>
          <div className="shadow-md shadow-[#D65478] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={AWS} alt="HTML icon" />
            <p className="my-4">Search Engine Optmisation</p>
          </div>
          <div className="shadow-md shadow-[#D65478] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Sass} alt="HTML icon" />
            <p className="my-4">Google Adwords</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
