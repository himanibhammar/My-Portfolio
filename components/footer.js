import Logo from "./dust/logo";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";

import {
  FaCode,
  FaHeart,
  FaGithub,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaNpm,
} from "react-icons/fa";
import Social from "./dust/social";

export default function Footer() {
  return (
    <>
      <div className="px-6">
        <div className="border-b border-gray-200"></div>
      </div>
      <footer className="footer p-10">
        <Slide left>
          <div className="flex justify-center sm:justify-start w-full">
            <p>
              {/* <FaCode className="fill-indigo-500 hover:scale-110 transition delay-75 inline-block text-xl" />
              {` with `}
              <FaHeart className=" text-xl fill-error hover:scale-110 transition delay-75 inline-block mb-1" />{" "}
              by <Logo /> */}
              <br />
            </p>
          </div>
        </Slide>
        <Slide right>
          <div className="flex justify-center sm:justify-start w-full">
            <div className="flex flex-col ">
              <div className="flex justify-center sm:justify-start">
                {" "}
                <span className="footer-title ml-2 text-lg md:text-xl ">
                  Social
                </span>
              </div>
              <div>
                <Social type={"footer"} />
              </div>
            </div>
          </div>
        </Slide>
      </footer>
    </>
  );
}
