import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Contact from "../Components/ContactForm";
import Footer from "../Components/Footer";
import Testimonials from "../Components/Testimonials";
import GitHubStats from "../Components/Github_states";
import { FaReact, FaJs, FaGitAlt, FaBootstrap, FaDownload } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import Wavify from "react-wavify";
import anime from 'animejs/lib/anime.es.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const skills = [
    {
      name: "React.js",
      icon: <FaReact className="text-blue-500 text-4xl mx-auto" />,
      description: "Building dynamic and reusable UI components for modern web apps."
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-500 text-4xl mx-auto" />,
      description: "Writing interactive and efficient code using ES6+ features."
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-600 text-4xl mx-auto" />,
      description: "Ensuring type safety and scalability in JavaScript applications."
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-purple-500 text-4xl mx-auto" />,
      description: "Creating responsive and visually appealing UI layouts."
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-red-500 text-4xl mx-auto" />,
      description: "Managing code, collaborating and deploying projects efficiently"
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-blue-400 text-4xl mx-auto" />,
      description: "Building modern, responsive, and utility-first designs with ease."
    },
  ];

  useEffect(() => {
    anime({
      targets: '.about-section',
      opacity: [0, 1],
      translateY: [900, 0],
      duration: 3000,
    });
  }, []);

  return (
    <div className={`min-h-screen container 
      ${darkMode ? "animated-bg-dark bg-black text-white" : "bg-white text-black animated-bg-light"} 
    flex flex-col items-center`}>
      <Wavify
        fill="#5465FF"
        paused={false}
        options={{
          height: 70,
          amplitude: 90,
          speed: 0.2,
          points: 3,
        }}
        className="absolute bottom-0 w-full h-80"
      />
      <nav className="w-full md- flex justify-between p-6 shadow-md bg-opacity-80 backdrop-blur-md">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <div className="flex justify-evenly items-center space-x-4 ">
          <button className={`button ${darkMode ? "animated-bg-dark bg-black-100 text-white" : "bg-gray-100 text-black animated-bg-light"} mb-1 `}>
            <a
              href="/romil_cv.pdf"
              download="romil_cv.pdf"
            >
              <span className="button-content"><FaDownload /> </span>
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
      <section className="h-screen flex flex-col justify-center px-4 z-30">
        <motion.h1
          className="text-3xl font-semibold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          Hi, I'm <span className="text-[#5465FF]">Romil Raja</span>
        </motion.h1>
        <p className="text-5xl mt-2 font-bold">React Developer</p>
        <p className="text-5xl mt-2 font-bold">+ Frontend Designer </p>
      </section>

      {/* About Section */}
      <section className="about-section w-full max-w-7xl text-center p-10">
        <div data-aos="fade-up"
          data-aos-duration="3000">
          <h2 className="text-3xl font-bold">ABOUT ME</h2>
          <p className="mt-8 text-lg" >Passionate about crafting responsive and user-friendly web experiences,
            I am currently a trainee at Byteweb IT Solutions, sharpening my skills in React.js, Typescript, JavaScript, Bootstrap, CSS, and HTML.
            I enjoy building dynamic and visually appealing websites, constantly learning and improving my coding abilities.
            I am eager to apply my knowledge to real-world projects and collaborate with like-minded professionals.
            Open to opportunities where I can contribute and grow as a Frontend Developer. Let’s connect!</p>
          <p>#FrontendDevelopment #ReactJS #OpenToWork</p>
        </div>
      </section>


      {/* Skills Section */}
        <section className="w-full max-w-6xl text-center p-10">
          <h2 className="text-3xl font-bold">SKILLS</h2>
          <div data-aos="flip-down">
            <div className={`mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ${darkMode ? "bg-black" : "bg-white"}`}>
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className={`p-4 m-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 
                  ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                  whileHover={{ scale: 1.5 }}
                >
                  <h3 className="text-xl font-semibold mt-2">{skill.name}</h3>
                  {skill.icon}
                  <p className="text-sm text-gray-400 mt-1">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* GitHub Stats Section */}
        <section className="w-full max-w-6xl text-center p-10">
          <h2 className="text-3xl font-bold">GITHUB STATS</h2>
          <div>
            <GitHubStats darkMode={darkMode} />
          </div>
        </section>

        {/* Testimonials Section */}
        <div className="w-full max-w-6xl text-center p-10">
          <h2 className="text-3xl font-bold">TESTIMONIALS</h2>
          <div>
            <Testimonials darkMode={darkMode} />
          </div>
        </div>

        {/* Contact Section */}
        <section className="w-full max-w-6xl text-center p-10">
          <div>
            <Contact darkMode={darkMode} />
          </div>
        </section>

        {/* Footer Section */}
        <div className="w-full p-1">
          <Footer darkMode={darkMode} />
        </div>
    </div>
  );
}

export default Home;