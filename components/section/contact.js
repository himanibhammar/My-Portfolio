"use client";
import { FaDiscord, FaEnvelope } from "react-icons/fa";
import toast from "react-hot-toast";
import Confetti from "react-dom-confetti";
import { useEffect, useState } from "react";

import Waypoints from "../dust/waypoints";
import Slide from "react-reveal/Slide";
import Flip from "react-reveal/Flip";

export default function Contact() {
  const [explode, setExplode] = useState();
  const [clearFormFlag, setClearFormFlag] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallScreen = windowWidth < 640;

  const confettiConfig = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };
  const [formData, setFormData] = useState({
    from: "",
    email: "",
    msg: "",
  });
  useEffect(() => {
    if (explode) {
      const clearFormTimeout = setTimeout(() => {
        setClearFormFlag(true);
      }, 1);

      return () => clearTimeout(clearFormTimeout);
    }
  }, [explode, setClearFormFlag]);

  useEffect(() => {
    if (clearFormFlag) {
      setFormData({
        from: "",
        email: "",
        msg: "",
      });
      setClearFormFlag(false);
    }
  }, [clearFormFlag, setFormData]);
  const formSubmit = async (e) => {
    e.preventDefault();
    var d = document.getElementById("contactFormSubmit");
    d.innerHTML = "Sending...";
    d.classList.add("btn-disabled");
    d.classList.add("loading");

    try {
      const send = await fetch("/api/sendcontact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: e.target.from.value,
          email: e.target.email.value,
          msg: e.target.msg.value,
        }),
      });

      var res = await send.json();

      toast[res.type](res.message);

      if (res.type === "success") {
        setExplode(!explode);
        setTimeout(() => {
          setExplode(false);
          clearForm();
        }, 1000);
      }
    } catch {
      toast.error("Internal server error.");
    } finally {
      d.innerHTML = "Send Message";
      d.classList.remove("btn-disabled");
      d.classList.remove("loading");
    }
  };
  const clearForm = () => {
    setFormData({
      from: "",
      email: "",
      msg: "",
    });
  };

  return (
    <>
      {/* Contact Starts */}

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
      <div className="px-6 bg-[#3fe9ff]">
        <Waypoints target={"tocontact"}>
          <section id="contact" className="py-16">
            <h1
              className="text-2xl font-bold text-center text-gray-900"
              data-aos="fade-up"
            >{`Get in Touch`}</h1>
            <div className="flex justify-center">
              <div
                className="bg-[#6C63FF] w-[150px] h-[5px]"
                data-aos="fade-up"
                data-aos-delay="400"
              ></div>
            </div>
            <div className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-5  mx-auto text-gray-900">
              <Slide up>
                <div className="flex flex-col justify-between">
                  <div>
                    <div>
                      <h2
                        className="text-2xl text-center sm:text-start font-bold sm:mt-10"
                        data-aos="fade-right"
                      >
                        <FaDiscord className="fill-indigo-500 inline-block" />{" "}
                        Discord
                      </h2>
                      <div className="flex justify-center sm:justify-start">
                        <div
                          className="bg-[#6C63FF] w-[120px] h-[5px]"
                          data-aos="fade-right"
                          data-aos-duration="1000"
                        ></div>
                      </div>

                      <ul className="sm:list-disc flex justify-center sm:justify-start ml-5 mt-1">
                        <li>{`himani_33774`}</li>
                      </ul>
                    </div>

                    <div>
                      <h2
                        className="text-2xl font-bold mt-5 sm:mt-10 text-center sm:text-start"
                        data-aos="fade-right"
                      >
                        <FaEnvelope className="fill-indigo-500 inline-block" />{" "}
                        Email
                      </h2>
                      <div className="flex justify-center sm:justify-start">
                        <div
                          className="bg-[#6C63FF] w-[120px] h-[5px]"
                          data-aos="fade-right"
                          data-aos-duration="1000"
                        ></div>
                      </div>

                      <ul className="sm:list-disc  sm:ml-5 mt-1">
                        <li className="text-sm sm:text-xl text-center sm:text-start">
                          <a
                            href="mailto:himanibhammar@gmail.com"
                            className="hover:text-indigo-500"
                          >
                            himanibhammar@gmail.com
                          </a>{" "}
                          </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Slide>
              <div className="mt-5 sm:mt-0">
                <form id="contactForm" onSubmit={formSubmit}>
                  {/* <div className="grid grid-cols-2 gap-4"> */}
                  {isSmallScreen ? (
                    <>
                      <div>
                        <span className="uppercase text-sm font-bold">
                          Name
                        </span>
                        <input
                          className="w-full  bg-gray-200 text-gray-900 mt-2 p-5 sm:p-3 rfocus:outline-none focus:shadow-outline"
                          type="text"
                          placeholder="Your Name "
                          name="from"
                          required
                        />
                      </div>
                      <div>
                        <span className="uppercase text-sm font-bold">
                          Email
                        </span>
                        <input
                          className="w-full bg-gray-200 text-gray-900 mt-2 p-5 sm:p-3  focus:outline-none focus:shadow-outline"
                          type="email"
                          placeholder="your@email.com "
                          name="email"
                          required
                        />
                      </div>
                      <div className="mt-2">
                        <span className="uppercase text-sm font-bold">
                          Message
                        </span>
                        <textarea
                          className="w-full h-32 bg-gray-200 text-gray-900 mt-2 p-5 rfocus:outline-none focus:shadow-outline"
                          placeholder="What's on your mind? "
                          name="msg"
                          maxLength={1024}
                          required
                        ></textarea>
                      </div>
                      <div className="mt-8">
                        <button
                          className="uppercase text-sm font-bold btn btn-block btn-primary"
                          id="contactFormSubmit"
                          type="submit"
                        >
                          Send Message
                        </button>
                        <div className="flex justify-center">
                          <Confetti active={explode} config={confettiConfig} />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <Slide right>
                        <div>
                          <span className="uppercase text-sm font-bold">
                            Name
                          </span>
                          <input
                            className="w-full bg-gray-200 text-gray-900 mt-2 p-3  focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Your Name "
                            name="from"
                            required
                          />
                        </div>
                      </Slide>
                      <Slide left>
                        <div>
                          <span className="uppercase text-sm font-bold">
                            Email
                          </span>
                          <input
                            className="w-full bg-gray-200 text-gray-900 mt-2 p-3  focus:outline-none focus:shadow-outline"
                            type="email"
                            placeholder="your@email.com "
                            name="email"
                            required
                          />
                        </div>
                      </Slide>
                      <Slide right>
                        <div className="mt-2">
                          <span className="uppercase text-sm font-bold">
                            Message
                          </span>
                          <textarea
                            className="w-full h-32 bg-gray-200 text-gray-900 mt-2 p-3  focus:outline-none focus:shadow-outline"
                            placeholder="What's on your mind? "
                            name="msg"
                            maxLength={1024}
                            required
                          ></textarea>
                        </div>
                      </Slide>
                      <Flip right>
                        <div className="mt-8">
                          <button
                            className="uppercase text-sm font-bold btn btn-block btn-primary"
                            id="contactFormSubmit"
                            type="submit"
                          >
                            Send Message
                          </button>
                          <div className="flex justify-center">
                            <Confetti
                              active={explode}
                              config={confettiConfig}
                            />
                          </div>
                        </div>
                      </Flip>
                    </>
                  )}
                </form>
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

      {/* Contact Ends */}
    </>
  );
}
