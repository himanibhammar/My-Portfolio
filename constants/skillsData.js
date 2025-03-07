import { AiFillHtml5 } from "react-icons/ai";
import {
  SiNodedotjs,
  SiNextdotjs,
  SiVercel,
  SiNetlify,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiChakraui,
  SiFirebase,
  SiTypescript,
  SiJquery,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiOpencv,
} from "react-icons/si";
import { DiJavascript1, DiReact, DiMongodb, DiSass, DiPython } from "react-icons/di";
import { BsGit, BsGithub } from "react-icons/bs";
import {
  FaBootstrap,
  FaCss3Alt,
  FaJava,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

export const skillsData = [
  {
    Advance: [
      {
        name: "Python",
        icon: <DiPython className="md:text-4xl text-2xl" color="#3776AB" />,
      },
      {
        name: "TensorFlow",
        icon: <SiTensorflow className="md:text-4xl text-2xl" color="#FF6F00" />,
      },
      {
        name: "PyTorch",
        icon: <SiPytorch className="md:text-4xl text-2xl" color="#EE4C2C" />,
      },
      {
        name: "OpenCV",
        icon: <SiOpencv className="md:text-4xl text-2xl" color="#5C3EE8" />,
      },
      {
        name: "ReactJS",
        icon: <DiReact className="md:text-4xl text-2xl" color="#53c1de" />,
      },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="md:text-4xl text-2xl" color="#ffd600" />,
      },
      {
        name: "HTML5",
        icon: <AiFillHtml5 className="md:text-4xl text-2xl" color="#fa6700" />,
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="md:text-4xl text-2xl" color={"#039be5"} />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="md:text-4xl text-2xl" color="#4caf50" />,
      },
      {
        name: "GitHub",
        icon: <BsGithub className="md:text-4xl text-2xl" color="#c9d1d9" />,
      },
    ],
    Good: [
      {
        name: "Bootstrap",
        icon: <FaBootstrap className="md:text-4xl text-2xl" color="#673ab7" />,
      },
      {
        name: "NodeJS",
        icon: <SiNodedotjs className="md:text-4xl text-2xl" color="#4caf50" />,
      },
      {
        name: "Express",
        icon: <SiExpress className="md:text-4xl text-2xl" color="#555555" />,
      },
      {
        name: "MongoDB",
        icon: <DiMongodb className="md:text-4xl text-2xl" color="#4caf50" />,
      },
      {
        name: "Scikit-learn",
        icon: <SiScikitlearn className="md:text-4xl text-2xl" color="#F7931E" />,
      },
      {
        name: "Git",
        icon: <BsGit className="md:text-4xl text-2xl" color="#f4511e" />,
      },
    ],
    Familiar: [
      {
        name: "TypeScript",
        icon: <SiTypescript className="md:text-4xl text-2xl" color="#377cc8" />,
      },
      {
        name: "Java",
        icon: <FaJava className="md:text-4xl text-2xl" color="#547c99" />,
      },
      {
        name: "MySQL",
        icon: <GrMysql className="md:text-4xl text-2xl" color="#08668e" />,
      },
    ],
  },
];
