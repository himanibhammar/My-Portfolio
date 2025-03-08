import Image from "next/image";
import { useEffect, useRef } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowDown } from "react-icons/fa";
import About from "./section/about";
import Projects from "./section/projects";
import Contact from "./section/contact";
import { Toaster } from "react-hot-toast";
import Waypoints from "./dust/waypoints";
import { motion } from "framer-motion";
import Skills from "./section/skills";
import Experience from "./section/experience";
import me from "../public/img/me3.jpeg";
import Footer from "../components/footer";

export default function Main() {
  const textRef = useRef(null);

  useEffect(() => {
    const initializeTextEffect = () => {
      if (!textRef.current) return;
      const phrases = ["Code", "Explore", "Sleep", "Travel", "Repeat"];
      let currentPhraseIndex = 0;
      let currentCharIndex = 0;
      let isDeleting = false;
      let typingSpeed = 150;
  
      const type = () => {
        const currentPhrase = phrases[currentPhraseIndex];
  
        if (isDeleting) {
          textRef.current.textContent = currentPhrase.substring(0, currentCharIndex - 1);
          currentCharIndex--;
          typingSpeed = 100;
        } else {
          textRef.current.textContent = currentPhrase.substring(0, currentCharIndex + 1);
          currentCharIndex++;
          typingSpeed = 150;
        }
  
        if (!isDeleting && currentCharIndex === currentPhrase.length) {
          isDeleting = true;
          typingSpeed = 2000;
        } else if (isDeleting && currentCharIndex === 0) {
          isDeleting = false;
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
          typingSpeed = 500;
        }
  
        setTimeout(type, typingSpeed);
      };
  
      type();
    };
  
    initializeTextEffect();
  }, []);
  
  return (
    <>
      <Toaster />
      <Waypoints target={"tohome"}>
        <div className=" mx-auto px-8 py-16 bg-white text-gray-900">
          {/* Header
          <header className="bg-teal-700 text-white py-6 text-lg">
            <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
              <h2 className="text-3xl font-bold">Himani Bhammar</h2>
              <p className="text-teal-200 text-xl">AI/ML Developer • SRMIST KTR, Chennai</p>
              <div className="flex space-x-6 mt-2 md:mt-0 text-2xl">
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300">
                  <FaGithub />
                </a>
                <a href="mailto:himani@example.com" className="hover:text-teal-300">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </header> */}

          {/* Hero Section */}
          <div className="container mx-auto px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              {/* Profile Image */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="md:col-span-4 flex justify-center"
              >
                <div className="relative">
                  <div className="w-72 h-72 md:w-96 md:h-96 rounded-lg overflow-hidden shadow-xl border-4 border-teal-200">
                    <Image 
                      src={me} 
                      alt="Himani Bhammar" 
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* Introduction */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:col-span-8"
              >
                <div className="bg-teal-50 p-10 rounded-lg shadow-lg border border-teal-200">
                  <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                    Turning Ideas into Intelligent Solutions
                  </h1>
                  
                  <p className="text-xl text-gray-700 mb-6 font-semibold">
                    I love to <span ref={textRef} className="font-bold text-teal-700"></span><span className="text-teal-700">|</span>
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-lg">
                    <div className="bg-white p-6 rounded shadow border-l-4 border-teal-500">
                      <h3 className="font-bold text-gray-800">Technical Skills</h3>
                      <p className="text-gray-700">Python, TensorFlow, PyTorch, React, Node.js, SQL</p>
                    </div>
                    <div className="bg-white p-6 rounded shadow border-l-4 border-teal-500">
                      <h3 className="font-bold text-gray-800">Education</h3>
                      <p className="text-gray-700">B.Tech in Computer Science, SRMIST KTR</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-6">
                    <a 
                      href="#projects" 
                      className="px-8 py-4 bg-teal-600 text-white text-lg rounded-lg shadow-md hover:bg-teal-700 transition"
                    >
                      View Projects
                    </a>
                    <a 
                      href="/himaniresume.pdf" 
                      download="himaniresume.pdf" 
                      className="px-8 py-4 bg-white text-teal-700 text-lg border border-teal-600 rounded-lg shadow-md hover:bg-teal-50 transition"
                    >
                      Download Resume
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16"
            >
              <div className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Featured Project</h2>
                <div className="bg-white p-4 rounded shadow-sm">
                  <h3 className="font-bold text-teal-700">AI-Powered Image Recognition System</h3>
                  <p className="text-gray-600 mb-2">
                    Built a deep learning model that achieves 97% accuracy in classifying objects in images, using TensorFlow and a custom CNN architecture.
                  </p>
                  <a href="#projects" className="text-teal-600 font-medium hover:text-teal-800">
                    Learn more →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Waypoints>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer/>
    </>
  );
}
