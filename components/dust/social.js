import {
  FaGithub,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaNpm,
  FaTwitter,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { useState, Fragment } from "react";
import { clsx } from "clsx";

export default function Social({ type }) {
  let [social] = useState([
    {
      href: "https://github.com/himanibhammar",
      icon: {
        icon: FaGithub,
        fill: clsx("hover:fill-black"),
      },
    },
    // {
    //   href: "https://twitter.com/Mehulkumar_27",
    //   icon: {
    //     icon: FaXTwitter,
    //     fill: clsx("hover:fill-black"),
    //   },
    // },
    // {
    //   href: "https://youtube.com/@daddyleap2970?si=-cyCPvwud0tlPav-",
    //   icon: {
    //     icon: FaYoutube,
    //     fill: clsx("hover:fill-red-500"),
    //   },
    // },
    {
      href: "https://www.instagram.com/himani_bhammar?igsh=MWI3ZWthNjZvNHFnNQ==",
      icon: {
        icon: FaInstagram,
        fill: clsx("hover:fill-[url(#instagram-gradient)]"),
      },
    },
    {
      href: "https://www.linkedin.com/in/himani-bhammar-442500281",
      icon: {
        icon: FaLinkedin,
        fill: clsx("hover:fill-[#0077b5]"),
      },
    },
  ]);

  return (
    <>
      <div className="text-center">
        <div
          className={`flex text-4xl md:text-5xl text-gray-500 ${
            type === "footer"
              ? "space-x-4 ml-2 md:space-x-6"
              : "space-x-7 mt-2 text-center md:text-left"
          }`}
        >
          {social.map(({ href, icon }) => {
            return (
              <Fragment key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <icon.icon className={`${icon.fill} transition delay-150`} />
                </a>
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}
