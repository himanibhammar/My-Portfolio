import dynamic from "next/dynamic";
import Typed from "react-typed";
import Waypoints from "../dust/waypoints";
import "@react-pdf-viewer/core/lib/styles/index.css";
import Slide from "react-reveal/Slide";

const Worker = dynamic(() =>
  import("@react-pdf-viewer/core").then((mod) => mod.Worker)
);
const Viewer = dynamic(
  () => import("@react-pdf-viewer/core").then((mod) => mod.Viewer),
  { ssr: false }
);

const Resume = () => {
  return (
    <div>
      <Waypoints target={"toresume"}>
        <section id="resume">
          <div
            className="text-3xl font-bold text-center mt-20 sm:mt-48"
            data-aos="fade-up"
          >
            Resume
          </div>
          <div className="flex justify-center mb-10 sm:mb-20">
            <span
              className="bg-[#6C63FF] w-[150px] h-[5px]"
              data-aos="fade-up"
              data-aos-delay="400"
            ></span>
          </div>
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-20">
            <Slide left>
              <div className="hidden sm:flex flex-col gap-20 justify-center items-center w-[40%]">
                <div className="flex justify-center">
                  <p
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="text-[13px] md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block text-center sm:text-start mb-2 md:mb-0 sm:mx-0 sm:mt-2"
                    style={{ width: "400px" }}
                  >
                    <span className="text-black">{`Checkout my `}</span>
                    <Typed
                      strings={["resume!"]}
                      typeSpeed={90}
                      backSpeed={60}
                      backDelay={40}
                      loop
                    />
                  </p>
                </div>

                <div className="flex justify-center items-center w-full">
                  <img
                    src="/resVid.gif"
                    className="h-72 w-60"
                    alt="Responsive GIF"
                  />
                </div>
                <div className="flex justify-center mt-4">
                  <p data-aos="fade-right">
                    <span className="text-black">
                      <a
                        href="/himaniresume.pdf"
                        download="himaniresume.pdf"
                        className="bg-red-600 text-white px-10 py-5 mx-2 rounded-lg text-sm hover:bg-red-700 hover:shadow-lg transition duration-300"
                      >
                        ⬇ DOWNLOAD RESUME
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </Slide>
            <Slide right>
              <div className=" w-[50%] flex flex-col  items-center ">
                <div className="hidden sm:block w-full">
                  <Worker
                    workerUrl={`https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js`}
                  >
                    <Viewer fileUrl="/himaniresume.pdf" />
                  </Worker>
                </div>

                <div className="block w-full ml-52 mb-24 mt-10 sm:hidden">
                  <p data-aos="fade-right">
                    <span className="text-black">
                      <a
                        href="/himaniresume.pdf"
                        download="himaniresume.pdf"
                        className="bg-red-600 text-white px-5 py-2  mx-2 rounded-lg text-sm hover:bg-red-700 hover:shadow-lg transition duration-300"
                      >
                        ⬇ DOWNLOAD
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </Slide>
          </div>
        </section>
      </Waypoints>
    </div>
  );
};

export default Resume;
