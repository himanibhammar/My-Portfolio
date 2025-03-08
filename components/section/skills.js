"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPython, FaJava, FaJs, FaReact, FaDatabase, FaGitAlt,
  FaHtml5, FaCss3, FaDjango
} from "react-icons/fa";
import {
  SiTensorflow, SiPytorch, SiScikitlearn, SiOpencv, SiKeras, SiPostgresql,
  SiNumpy, SiPandas, SiNextdotjs, SiDjango, SiTailwindcss, SiC, SiCplusplus
} from "react-icons/si";

const SkillsSection = () => {
  // Updated Skills Data with Brand Colors & Proper Icons
  const skillsData = [
    // Programming Languages
    { name: "Python", icon: <FaPython className="text-[#3776AB]" />, category: "Programming" },
    { name: "Java", icon: <FaJava className="text-[#007396]" />, category: "Programming" },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" />, category: "Programming" },
    { name: "C++", icon: <SiCplusplus className="text-[#00599C]" />, category: "Programming" },
    { name: "C", icon: <SiC className="text-[#A8B9CC]" />, category: "Programming" },

    // Web Development
    { name: "React.js", icon: <FaReact className="text-[#61DAFB]" />, category: "Frontend" },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" />, category: "Frontend" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, category: "Frontend" },
    { name: "Django", icon: <SiDjango className="text-[#092E20]" />, category: "Backend" },
    { name: "SQL", icon: <FaDatabase className="text-gray-600" />, category: "Database" },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" />, category: "Database" },
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" />, category: "Frontend" },
    { name: "CSS3", icon: <FaCss3 className="text-[#1572B6]" />, category: "Frontend" },

    // AI/ML & Data Science
    { name: "TensorFlow", icon: <SiTensorflow className="text-[#FF6F00]" />, category: "AI/ML" },
    { name: "PyTorch", icon: <SiPytorch className="text-[#EE4C2C]" />, category: "AI/ML" },
    { name: "OpenCV", icon: <SiOpencv className="text-[#5C3EE8]" />, category: "Computer Vision" },
    { name: "Scikit-learn", icon: <SiScikitlearn className="text-[#F7931E]" />, category: "AI/ML" },
    { name: "Keras", icon: <SiKeras className="text-[#D00000]" />, category: "AI/ML" },
    { name: "NumPy", icon: <SiNumpy className="text-[#013243]" />, category: "Data Science" },
    { name: "Pandas", icon: <SiPandas className="text-[#150458]" />, category: "Data Science" },

    // Tools & Version Control
    { name: "GitHub", icon: <FaGitAlt className="text-black" />, category: "Tools" },
  ];

  // Get unique categories
  const categories = ["All", ...new Set(skillsData.map((skill) => skill.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter skills based on selected category
  const filteredSkills = selectedCategory === "All"
    ? skillsData
    : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50" id="techStack">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-teal-700">Technical Expertise</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            My technical toolkit for transforming ideas into innovative solutions.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1.5 w-32 bg-teal-600 rounded-full"></div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 text-lg font-medium rounded-xl transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-teal-600 text-white shadow-lg"
                    : "bg-white text-gray-700 shadow-sm hover:shadow-md border border-teal-100 hover:border-teal-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6" layout>
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{
                y: -8,
                boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.1)",
              }}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md border border-teal-100 h-48 transition-all duration-300"
            >
              <div className="text-6xl mb-5">{skill.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 text-center">{skill.name}</h3>
              <span className="mt-2 inline-block px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium">
                {skill.category}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Count Indicators */}
        <div className="mt-16 flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-white p-6 rounded-xl shadow-md border border-teal-100">
            {categories
              .filter((cat) => cat !== "All")
              .map((category) => {
                const count = skillsData.filter((skill) => skill.category === category).length;
                return (
                  <div key={category} className="text-center">
                    <div className="text-3xl font-bold text-teal-700">{count}</div>
                    <div className="text-gray-600">{category}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
