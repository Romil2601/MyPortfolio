import React, { useState } from "react";
import { motion } from "framer-motion";
import Contact from "../Components/ContactForm";
import Testimonials from "./Testimonials";
import { FaReact, FaJs, FaGitAlt, FaBootstrap, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import Wavify from "react-wavify";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const skills = [
    { name: "React.js", icon: <FaReact className="text-blue-500 text-4xl mx-auto" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl mx-auto" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500 text-4xl mx-auto" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-4xl mx-auto" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl mx-auto" /> }
  ];


  return (
    <div className={`min-h-screen container 
      ${darkMode ? "animated-bg-dark bg-black text-white" : "bg-white text-black animated-bg-light"} 
    flex flex-col items-center`}>

      <Wavify
        fill="#846CF9"
        paused={false}
        options={{
          height: 40,
          amplitude: 80,
          speed: 0.2,
          points: 3,
        }}
        className="absolute bottom-0 w-full z-30"
      />
      <nav className="w-full flex justify-between p-6 shadow-md bg-opacity-80 backdrop-blur-md">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <div className="flex justify-evenly items-center space-x-4">
          <button className={`button ${darkMode ? "animated-bg-dark bg-black-100 text-white" : "bg-gray-100 text-black animated-bg-light"} mb-1 `}>
            <a
              href="/resume.pdf"
              download="resume.pdf"
            >
              <span className="button-content">Download </span>
            </a>
          </button>
          <div class="checkbox-wrapper-54">
            <label className="switch">
              <input type="checkbox" onClick={() => setDarkMode(!darkMode)} />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center px-4">
        <motion.h1
          className="text-3xl font-semibold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          Hi, I'm <span className="text-[#846CF9]">Romil Raja</span>
        </motion.h1>
        <p className="text-5xl mt-2 font-bold">React Developer</p>
        <p className="text-5xl mt-2 font-bold">+ Frontend Designer </p>
      </section>

      {/* About Section */}
      <section className="w-full max-w-7xl text-center p-10">
        <h2 className="text-3xl font-bold">ABOUT ME</h2>
        <p className="mt-6 text-lg">Passionate about crafting responsive and user-friendly web experiences,
          I am currently a trainee at Byteweb IT Solutions, sharpening my skills in React.js, JavaScript, Bootstrap, CSS, and HTML.
          I enjoy building dynamic and visually appealing websites, constantly learning and improving my coding abilities.
          I am eager to apply my knowledge to real-world projects and collaborate with like-minded professionals.
          Open to opportunities where I can contribute and grow as a Frontend Developer. Let’s connect!</p>
        <p>#FrontendDevelopment #ReactJS #OpenToWork</p>
      </section>


      {/* Skills Section */}
      <section className="w-full max-w-4xl text-center p-10">
        <h2 className="text-3xl font-bold">SKILLS</h2>
        <div className={`mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 ${darkMode ? "bg-black" : "bg-white"}`}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 
      ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}
            >
              {skill.icon}
              <p className="text-center mt-2 font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <div className="w-full max-w-6xl text-center p-10">
        <h2 className="text-3xl font-bold">TESTIMONIALS</h2>
        <div>
          <Testimonials />
        </div>
      </div>

      {/* Contact Section */}
      <section className="w-full max-w-6xl text-center p-10">
        <div>
          <Contact darkMode={darkMode} />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full p-6 text-center border-t mt-6">
        <p className="text-lg">© 2025 Romil Raja. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-6 text-2xl">
          <a href='https://github.com/Romil2601' className="hover:text-[#846CF9]"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/romil-raja" className="hover:text-[#846CF9]"><FaLinkedin /></a>
        </div>
      </footer>
    </div>
  );
}

export default Home;