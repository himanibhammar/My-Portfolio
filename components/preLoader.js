// import React from "react";
// import Image from "next/image";
// import Loader from "../public/img/loader.gif";
// import { Fade, Slide, Zoom } from "react-awesome-reveal";

// const PreLoader = () => {
//   return (
//     <div className="relative flex flex-col justify-center items-center h-screen w-screen bg-white overflow-hidden">
//       {/* Floating Background Dots */}
//       <div className="absolute inset-0 z-0">
//         {/* Floating Dots */}
//         {[...Array(35)].map((_, index) => {
//           // Randomized properties for size, position, and delay
//           const size = `${Math.floor(Math.random() * 2) + 1}rem`; // Sizes between 3rem and 6rem
//           const top = `${Math.floor(Math.random() * 100)}%`; // Random top position
//           const left = `${Math.floor(Math.random() * 100)}%`; // Random left position
//           const delay = `${Math.random() * 1}s`; // Random delay between 0s and 2s

//           return (
//             <div
//               key={index}
//               className="rounded-full bg-gray-200 absolute animate-floating"
//               style={{
//                 width: size,
//                 height: size,
//                 top: top,
//                 left: left,
//                 animationDelay: delay,
//               }}
//             ></div>
//           );
//         })}
//       </div>

//       {/* Animated Heading */}
//       <Slide direction="down" triggerOnce>
//         <div className="text-4xl font-bold text-center mb-5 text-gray-800 animate-pulse z-10">
//           Hold on for Something Cool<span className="loader-dots">...</span>
//         </div>
//       </Slide>

//       {/* Loader GIF with Zoom Effect */}
//       <Zoom triggerOnce>
//         <div className="relative z-10">
//           <Image
//             src={Loader}
//             alt="loader"
//             width={500}
//             height={500}
//             className="mt-2 rounded-full"
//           />
//           {/* Subtle spinning border */}
//           <div className="absolute inset-0 w-[520px] h-[520px] border-4 border-dashed border-gray-300 rounded-full animate-spin-slow"></div>
//         </div>
//       </Zoom>

//       {/* Subtext with Bounce Animation */}
//       <Fade delay={500} triggerOnce>
//         <div className="mt-5 text-lg font-medium text-center text-gray-600 animate-bounce z-10">
//           We&apos;re almost ready! 🚀
//         </div>
//       </Fade>
//     </div>
//   );
// };

// export default PreLoader;
