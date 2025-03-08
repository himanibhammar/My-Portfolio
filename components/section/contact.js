"use client";
import { FaDiscord, FaEnvelope } from "react-icons/fa";
import toast from "react-hot-toast";
import Confetti from "react-dom-confetti";
import { useState } from "react";
import Waypoints from "../dust/waypoints";

export default function Contact() {
  const [explode, setExplode] = useState(false);

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
    colors: ["#FFD700", "#0D9488", "#3fe9ff", "#ff718d", "#fdff6a"],
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const submitButton = document.getElementById("contactFormSubmit");
    submitButton.innerHTML = "Sending...";
    submitButton.classList.add("btn-disabled", "loading");

    try {
      const response = await fetch("/api/sendcontact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from: e.target.from.value,
          email: e.target.email.value,
          msg: e.target.msg.value,
        }),
      });

      const res = await response.json();
      toast[res.type](res.message);

      if (res.type === "success") {
        setExplode(true);
        setTimeout(() => setExplode(false), 1000);
        e.target.reset();
      }
    } catch {
      toast.error("Internal server error.");
    } finally {
      submitButton.innerHTML = "Send Message";
      submitButton.classList.remove("btn-disabled", "loading");
    }
  };

  return (
    <>
      {/* Contact Section */}
      <div className="px-6 py-16 bg-white">
        <Waypoints target={"tocontact"}>
          <section id="contact" className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-4">
              Get in Touch
            </h1>
            <div className="flex justify-center mb-8">
              <span className="bg-teal-700 w-[200px] h-[6px] rounded-full"></span>
            </div>

            {/* Contact Options & Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
                <h2 className="text-2xl font-semibold text-teal-700 mb-3">
                  <FaDiscord className="inline-block text-teal-600 mr-2" />
                  Discord
                </h2>
                <p className="text-lg text-gray-700">himani_33774</p>

                <h2 className="text-2xl font-semibold text-teal-700 mt-6 mb-3">
                  <FaEnvelope className="inline-block text-teal-600 mr-2" />
                  Email
                </h2>
                <p className="text-lg text-gray-700">
                  <a
                    href="mailto:himanibhammar@gmail.com"
                    className="hover:text-teal-600"
                  >
                    himanibhammar@gmail.com
                  </a>
                </p>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
                <form onSubmit={formSubmit}>
                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold">
                      Name
                    </label>
                    <input
                      type="text"
                      name="from"
                      required
                      placeholder="Your Name"
                      className="w-full mt-2 p-3 rounded-lg bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-teal-600"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full mt-2 p-3 rounded-lg bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-teal-600"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold">
                      Message
                    </label>
                    <textarea
                      name="msg"
                      required
                      placeholder="What's on your mind?"
                      className="w-full mt-2 p-3 h-32 rounded-lg bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-teal-600"
                    ></textarea>
                  </div>

                  <div className="flex justify-center">
                    <button
                      id="contactFormSubmit"
                      type="submit"
                      className="px-8 py-4 bg-teal-700 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-teal-800 transition"
                    >
                      Send Message
                    </button>
                  </div>

                  <div className="flex justify-center mt-4">
                    <Confetti active={explode} config={confettiConfig} />
                  </div>
                </form>
              </div>
            </div>
          </section>
        </Waypoints>
      </div>
    </>
  );
}