import Image from "next/image";

import { useState, useEffect } from "react";
import Waypoints from "../dust/waypoints";
import Fade from "react-reveal/Fade";
import face from "../../public/img/codeing2.gif";

export default function About() {
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        fill="#3fe9ff"
      >
        <path
          fillOpacity={1}
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-[#3fe9ff] px-6">
        <Waypoints target={"toabout"}>
          <div className=""></div>

          <section id="about" className="text-black py-20">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex justify-center md:mb-0 mb-5 py-5   md:w-screen">
                <Fade left>
                  <Image
                    className="z-50"
                    src={face}
                    alt="about me"
                    width={600}
                    height={500}
                  />
                </Fade>
              </div>

              <div className="">
                <h1
                  className="text-3xl text-center md:text-start font-bold leading-9"
                  data-aos="fade-up"
                >
                  About Me
                </h1>
                <div className="flex justify-center md:justify-start">
                  <div
                    className="bg-[#6C63FF] w-[150px] h-[5px] "
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  ></div>
                </div>
                {screenWidth >= 640 ? (
                  <Fade right>
                    <div className="mt-5 md:text-xl text-justify">
                      Hey! I&apos;m{" "}
                      <span className="font-extrabold ">Himani Bhammar</span>, the coding virtuoso and AI adventurer at SRM Institute of Science and Technology. Imagine me diving deep into machine learning algorithms by day and debugging my way through the labyrinth of code by night—all while sipping chai and plotting my next big project.
                    </div>
                    <p className="mt-5 md:text-xl text-justify">
                    In the world of tech, I'm on a mission to unravel the mysteries of AI/ML, crafting smart solutions that bridge innovation and real-world impact. From training deep learning models to tackling algorithmic challenges, every line of code is a step closer to shaping the future.


                    </p>
                    <p className="mt-5 md:text-xl text-justify">
                    But wait, it's not just about code! Whether it's building AI-driven solutions, crafting intuitive web apps, or exploring the depths of data science, I thrive on transforming challenges into innovations. So gear up—this journey is a fusion of technology, creativity, and relentless curiosity, where every dataset holds a secret, every project is a new quest, and every bug is just a riddle waiting to be solved! 
                    </p>
                  </Fade>
                ) : (
                  <div className="mt-2 md:text-lg text-justify">
                    <div className="mt-5 md:text-xl text-justify">
                      Hey! I&apos;m{" "}
                      <span className="font-extrabold ">Himani Bhammar</span>, the coding virtuoso and AI adventurer at SRM Institute of Science and Technology. Imagine me diving deep into machine learning algorithms by day and debugging my way through the labyrinth of code by night—all while sipping chai and plotting my next big project.
                    </div>
                    <p className="mt-5 md:text-xl text-justify">
                    In the world of tech, I'm on a mission to unravel the mysteries of AI/ML, crafting smart solutions that bridge innovation and real-world impact. From training deep learning models to tackling algorithmic challenges, every line of code is a step closer to shaping the future.


                    </p>
                    <p className="mt-5 md:text-xl text-justify">
                    But wait, it's not just about code! Whether it's building AI-driven solutions, crafting intuitive web apps, or exploring the depths of data science, I thrive on transforming challenges into innovations. So gear up—this journey is a fusion of technology, creativity, and relentless curiosity, where every dataset holds a secret, every project is a new quest, and every bug is just a riddle waiting to be solved! 
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </Waypoints>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        fill="#3fe9ff"
        className="invert-svg"
      >
        <path
          fillOpacity={1}
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <style jsx>{`
        .invert-svg {
          transform: rotate(180deg);
        }
      `}</style>
    </>
  );
}
