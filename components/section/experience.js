"use client";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { ImLocation } from "react-icons/im";
import { BsArrowDownCircle } from "react-icons/bs";
import Waypoints from "../../components/dust/waypoints";
import { ExperienceData } from "../../constants/experienceData";

const Experience = () => {
  const [desc, setDesc] = useState("");
  const [isExpe, setIsExpe] = useState(false);
  const expeRef = useRef();
  const expeBoxesRef = useRef();
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsExpe(entry.isIntersecting);
      },
      { rootMargin: "-100px" }
    );

    observer.observe(expeRef.current);

    if (isExpe) {
      expeBoxesRef.current.classList.add("pop-up-child");
    } else {
      expeBoxesRef.current.classList.remove("pop-up-child");
    }
  }, [isExpe]);

  return (
    <Fragment>
      <Waypoints target={"toexperience"}>
        <section id="experience" ref={expeRef} className="py-10 -mt-10">
          <h1 className="text-5xl font-bold text-center text-teal-700 mb-6">
            Experience
          </h1>
          <div className="flex justify-center mb-10">
            <span className="bg-[#FFD700] w-[150px] h-[6px] rounded-full"></span>
          </div>

          <div className="pop-down-child pb-16 px-6 md:px-12" ref={expeBoxesRef}>
            {ExperienceData.map((experience, index) => (
              <div
                className={`flex flex-col md:flex-row justify-between items-center bg-white border border-gray-300 shadow-lg rounded-lg p-8 mb-8 transition-all duration-500 ${
                  index !== 0 ? "mt-6" : ""
                }`}
                key={experience.companyName}
              >
                {/* Left Side (Details) */}
                <div className="w-full md:w-3/4">
                  <h2 className="text-3xl font-bold text-teal-700">
                    {experience.companyName}
                  </h2>
                  <p className="flex items-center text-lg text-gray-600 mt-2">
                    <ImLocation className="mr-2 text-blue-500" />
                    {experience.location}
                  </p>
                  <p className="text-xl font-semibold text-gray-800 mt-2">
                    {experience.role}
                  </p>
                  <p className="text-lg text-gray-600">{experience.fromTo}</p>

                  {/* Description Toggle */}
                  <p
                    className={`text-lg text-gray-700 mt-4 transition-all duration-700 overflow-hidden ${
                      desc === experience.description ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    {experience.description}
                  </p>
                </div>

                {/* Toggle Button */}
                <button
                  className="transition-all duration-500 hidden md:block"
                  onClick={() =>
                    setDesc(
                      desc === experience.description ? "" : experience.description
                    )
                  }
                  style={{
                    transform:
                      desc === experience.description ? "rotate(180deg)" : "",
                  }}
                >
                  <BsArrowDownCircle size={42} className="text-teal-700" />
                </button>
              </div>
            ))}
          </div>
        </section>
      </Waypoints>
    </Fragment>
  );
};

export default Experience;
