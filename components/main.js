import Image from "next/image";
import Typed from "react-typed";
import { FaUserAlt } from "react-icons/fa";
import { MdCode } from "react-icons/md";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import About from "./section/about";
import Projects from "./section/projects";
import Contact from "./section/contact";
import { Toaster } from "react-hot-toast";
import Social from "./dust/social";
import Waypoints from "./dust/waypoints";
import { Bounce, Flip, Roll } from "react-reveal";
import Skills from "./section/skills";
import Experience from "./section/experience";
import { motion } from "framer-motion";
import me from "../public/img/me3.jpeg";

export default function Main() {
  return (
    <>
      <Toaster />
      {/* Header Starts */}
      <Waypoints target={"tohome"}>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 px-16">
            <div className="pt-36 sm:pt-44 ">
              <div className="">
                <h1 className="text-xl text-center sm:text-start sm:text-4xl font-extrabold leading-10 tracking-tight  text-base-900 sm:leading-none md:text-3xl lg:text-6xl">
                  <span
                    className="inline md:block"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    Hi ,
                    I&apos;m{" "}
                    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500">
                      Himani Bhammar.
                    </span>
                  </span>
                </h1>
              </div>
              <div className="">
                <p
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  className="text-[13px] md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block text-center sm:text-start mb-2 md:mb-0 sm:mx-0 sm:mt-2"
                >
                  <span className="text-black">{`A girl who loves to `}</span>
                  <Typed
                    strings={["code ", "travel", "sleep ", "explore "]}
                    typeSpeed={79}
                    backSpeed={50}
                    backDelay={40}
                    loop
                  />
                </p>
              </div>

              <div className="flex justify-center md:justify-start mt-4 sm:mt-0">
                <Social type={"hero"} />
              </div>

              <div className="mt-5 text-center md:text-left makeGapR1">
                <a href="#about" className="btn btn-primary" data-aos="fade-up">
                  <FaUserAlt className="mr-2 sm:text-2xl" /> About Me
                </a>
                <a
                  href="/himaniresume.pdf"
                  download="himaniresume.pdf"
                  className="btn btn-outline btn-accent mt-2 md:mt-0"
                  data-aos="fade-up"
                >
                  Download Resume
                </a>
              </div>
              <Bounce left>
                <div className="mt-10 mb-10 sm:mb-0 flex justify-center sm:justify-start mx-screen"></div>
              </Bounce>
            </div>

            <div className="flex justify-end md:pt-40  md:mx-0 mx-5">
              <div>
                <Flip right>
                  <div className="grid grid-cols-1">
                    <div className="flex justify-end items-center md:mr-1 ">
                      <motion.a whileHover={{ scale: 1.1 }}>
                        <div className=" overflow-hidden border-black  border-2 shadow-2xl rounded-full  ">
                          <Image
                            src={me}
                            alt="hero image"
                            className="object-cover h-[200px] md:h-[390px] md:w-[390px]  "
                          />
                        </div>
                      </motion.a>
                    </div>
                    <div className="mt-10 flex flex-col justify-end">
                      <div className="text-xl text-center sm:text-start sm:text-2xl leading-1 tracking-tight  text-base-900 sm:leading-none ">
                        <span
                          className="inline md:block"
                          data-aos="fade-right"
                          data-aos-duration="1000"
                        >
                          Student at{" "}
                          <span className="font-extrabold text-blue-500 animate-pulse">
                            SRMIST KTR
                          </span>
                          , Chennai{" "}
                          <span className=" animate-spin inline-block">😊</span>
                        </span>
                      </div>

                      <div className="text-xl sm:text-2xl md:mt-2 text-center ">
                        AI/ML Developer{" "}
                        <span className="animate-bounce inline-block">👨‍💻</span>
                      </div>
                    </div>
                  </div>
                </Flip>
              </div>
            </div>
          </div>

          <div className=" animate-sb pt-8 sm:pt-8  flex justify-center">
            <a href="#about">
              <IoIosArrowDropdownCircle className="scale-[200%] hover:scale-[150%] transition delay-150" />
            </a>
          </div>
        </div>
      </Waypoints>
      {/* Header Ends */}

      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
