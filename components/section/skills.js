"use client";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { FaLaptopCode } from "react-icons/fa";
import Waypoints from "../../components/dust/waypoints";
import { motion } from "framer-motion";
import Flip from "react-reveal/Flip";

import { skillsData } from "../../constants/skillsData";
import { LightSpeed, Rotate } from "react-reveal";

const Skills = () => {
  const [section, setSection] = useState("Advance");
  const [sectionData, setSectionData] = useState([]);
  const [istechStack, setIsTechStack] = useState(false);
  const techStackRef = useRef();
  const techBoxesRef = useRef();
  const buttonsRef = useRef();

  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const techStackObserver = new IntersectionObserver(
      ([techStackEntry]) => {
        setIsTechStack(techStackEntry.isIntersecting);
      },
      {
        rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-250px"}`,
      }
    );

    techStackObserver.observe(techStackRef.current);

    if (istechStack) {
      techBoxesRef.current.classList.add("pop-up-child");
      buttonsRef.current.classList.add("pop-up");
    } else {
      techBoxesRef.current.classList.remove("pop-up-child");
      buttonsRef.current.classList.remove("pop-up");
    }
  }, [istechStack]);

  useEffect(() => {
    const selectedSection = skillsData.find((sections) =>
      sections.hasOwnProperty(section)
    );
    setSectionData(selectedSection ? selectedSection[section] : []);

    setTimeout(() => {
      techBoxesRef.current.classList.add("pop-up-child");
    }, 300);
  }, [section]);

  return (
    <Fragment>
      <Waypoints target={"totechStack"}>
        <section className="overflow-hidden" id="techStack" ref={techStackRef}>
          <h1 className="text-3xl font-bold text-center" data-aos="fade-up">
            Skills
          </h1>
          <div className="flex justify-center mb-4">
            <span
              className="bg-[#6C63FF] w-[150px] h-[5px]"
              data-aos="fade-up"
              data-aos-delay="400"
            ></span>
          </div>

          <div
            className="pop-down transition-all w-fit duration-500 m-auto  border border-black dark:border-white border-solid overflow-hidden "
            ref={buttonsRef}
          >
            <button
              className={`max-[320px]:w-[90px] w-[120px] md:w-[150px] p-2 font-bold ${
                section === "Advance" ? "bg-red-600" : null
              } transition-all`}
              onClick={(e) => {
                setSection(e.target.innerText);
                if (section !== e.target.innerText)
                  techBoxesRef.current.classList.remove("pop-up-child");
              }}
            >
              Advance
            </button>
            <button
              className={`w-[120px] md:w-[150px] p-2 font-bold ${
                section === "Good" ? "bg-red-600" : null
              } transition-all border-l border-r border-black dark:border-white border-solid`}
              onClick={(e) => {
                setSection(e.target.innerText);
                if (section !== e.target.innerText)
                  techBoxesRef.current.classList.remove("pop-up-child");
              }}
            >
              Good
            </button>
            <button
              className={`w-[100px] md:w-[150px] p-2 font-bold ${
                section === "Familiar" ? "bg-red-600" : null
              } transition-all`}
              onClick={(e) => {
                setSection(e.target.innerText);
                if (section !== e.target.innerText)
                  techBoxesRef.current.classList.remove("pop-up-child");
              }}
            >
              Familiar
            </button>
          </div>

          <div
            className="pop-down-child flex min-h-[450px] mb-10 mt-10 sm:mt-0 sm:mb-0  px-[20px] md:px-[100px] flex-wrap justify-center items-center gap-5"
            ref={techBoxesRef}
          >
            {sectionData.map((tech) => (
              <motion.a whileHover={{ scale: 1.1 }} key={tech.name}>
                <Flip left>
                  <div className="transition-all duration-700 px-2 h-fit py-3 md:py-5 w-[120px] md:w-[150px] bg-[#3fe9ff]  text-black shadow-2xl  flex flex-col gap- items-center ">
                    <p>{tech.icon}</p>
                    <p>{tech.name}</p>
                  </div>
                </Flip>
              </motion.a>
            ))}
          </div>
        </section>
      </Waypoints>
    </Fragment>
  );
};

export default Skills;
