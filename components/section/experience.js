"use client";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { MdWork } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { BsArrowDownCircle } from "react-icons/bs";
import Waypoints from "../../components/dust/waypoints";
import Zoom from "react-reveal/Zoom";

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

    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const expeObserver = new IntersectionObserver(
      ([expeEntry]) => {
        setIsExpe(expeEntry.isIntersecting);
      },
      {
        rootMargin: "-100px",
      }
    );

    expeObserver.observe(expeRef.current);

    if (isExpe) {
      expeBoxesRef.current.classList.add("pop-up-child");
    } else {
      expeBoxesRef.current.classList.remove("pop-up-child");
    }
  }, [isExpe]);

  const isMobileView = windowWidth < 640;

  return (
    <Fragment>
      <Waypoints target={"toexperience"}>
        <section id="experience" ref={expeRef}>
          <h1
            className="text-3xl font-bold text-center mt-36 sm:mt-48"
            data-aos="fade-up"
          >
            Experience
          </h1>
          <div className="flex justify-center mb-10">
            <span
              className="bg-[#6C63FF] w-[150px] h-[5px]"
              data-aos="fade-up"
              data-aos-delay="400"
            ></span>
          </div>

          <div
            className="pop-down-child  pb-[30px] px-[20px] mb-36 "
            ref={expeBoxesRef}
          >
            {ExperienceData.map((experience, index) => (
              <div
                className={`md:flex gap-2 items-end  transition-all duration-500 ${
                  index !== 0 ? "mt-7" : ""
                }`}
                key={experience.companyName}
              >
                {isMobileView ? (
                  // Content without React Reveal animations for mobile view
                  <div
                    className={`md:w-[45%] cursor-pointer p-6  border-2 border-black  shadow-zinc-300 dark:shadow-zinc-700 bg-[#3fe9ff] shadow-2xl   `}
                    onMouseEnter={() => setDesc(experience.description)}
                    onMouseLeave={() => setDesc("")}
                  >
                    <div className="flex justify-between gap-2">
                      <p className="text-xl md:text-3xl font-bold text-violet-600">
                        {experience.companyName}
                      </p>
                      <p className="flex gap-2 sm:text-xl items-center text-blue-500">
                        <ImLocation /> {experience.location}
                      </p>
                    </div>

                    <div className="flex justify-between sm:text-xl text-black gap-2 mt-2">
                      <p className="font-semibold">{experience.role}</p>
                      <p>{experience.fromTo}</p>
                    </div>

                    <p
                      className="mt-3 text-justify transition-all duration-700 overflow-hidden text-black sm:text-xl"
                      style={
                        desc === experience.description
                          ? { maxHeight: "400px" }
                          : { maxHeight: "0px" }
                      }
                    >
                      {experience.description}
                    </p>
                  </div>
                ) : (
                  // Content with React Reveal animations for larger screens
                  <Zoom
                    left={experience.side === "left"}
                    right={experience.side === "right"}
                  >
                    <div className="flex justify-center ">
                      <div
                        className={`md:w-[80%] cursor-pointer p-6 my-8  shadow-zinc-300 dark:shadow-zinc-700 bg-[#3fe9ff] border-2 border-black shadow-2xl   `}
                        onMouseEnter={() => setDesc(experience.description)}
                        onMouseLeave={() => setDesc("")}
                      >
                        <div className="flex justify-between gap-2">
                          <p className="text-xl md:text-3xl font-bold text-violet-600">
                            {experience.companyName}
                          </p>
                          <p className="flex gap-2 sm:text-xl items-center text-blue-500">
                            <ImLocation /> {experience.location}
                          </p>
                        </div>

                        <div className="flex justify-between sm:text-xl text-black gap-2 mt-2">
                          <p className="font-semibold">{experience.role}</p>
                          <p>{experience.fromTo}</p>
                        </div>

                        <p
                          className="mt-3 text-justify transition-all duration-700 overflow-hidden text-black sm:text-xl"
                          style={
                            desc === experience.description
                              ? { maxHeight: "400px" }
                              : { maxHeight: "0px" }
                          }
                        >
                          {experience.description}
                        </p>
                      </div>
                      <button
                        className="transition-all absolute right-10 top-20 duration-500 hidden md:block"
                        onClick={() =>
                          setDesc(
                            desc === experience.description
                              ? ""
                              : experience.description
                          )
                        }
                        style={
                          desc === experience.description
                            ? { transform: "rotate(180deg)" }
                            : {}
                        }
                      >
                        <BsArrowDownCircle size={42} />
                      </button>
                    </div>
                  </Zoom>
                )}
              </div>
            ))}
          </div>
        </section>
      </Waypoints>
    </Fragment>
  );
};

export default Experience;
