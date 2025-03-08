import Image from "next/image";
import face from "../../public/img/codeing2.gif";

export default function About() {
  return (
    <section id="about" className="py-16 -mt-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Left Side Image with Animation */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-teal-100 rounded-2xl rotate-3 opacity-70"></div>
              <div className="absolute -inset-4 bg-teal-50 rounded-2xl -rotate-2 opacity-70"></div>
              <div className="relative">
                <Image 
                  src={face} 
                  alt="Coding Animation" 
                  width={450} 
                  height={450} 
                  className="rounded-xl shadow-lg border-2 border-teal-100"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-teal-600 rounded-full opacity-20"></div>
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-teal-600 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
          
          {/* Right Side Content with Enhanced Styling */}
          <div className="w-full md:w-1/2 bg-white p-8 md:p-10 rounded-xl shadow-lg border border-teal-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-teal-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-50 rounded-full translate-y-1/2 -translate-x-1/2 opacity-60"></div>
            
            <div className="relative">
              <h2 className="text-5xl font-bold text-teal-700 mb-8 relative">
                About Me
                <div className="absolute h-1 w-24 bg-teal-600 bottom-0 left-0 rounded-full"></div>
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Hey! I'm <span className="font-semibold text-teal-700">Himani Bhammar</span>, the coding virtuoso and AI adventurer at SRM Institute of Science and Technology. Imagine me diving deep into machine learning algorithms by day and debugging my way through the labyrinth of code by night—all while sipping chai and plotting my next big project.
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                In the world of tech, I'm on a mission to unravel the mysteries of AI/ML, crafting smart solutions that bridge innovation and real-world impact. From training deep learning models to tackling algorithmic challenges, every line of code is a step closer to shaping the future.
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                But wait, it's not just about code! Whether it's building AI-driven solutions, crafting intuitive web apps, or exploring the depths of data science, I thrive on transforming challenges into innovations. So gear up—this journey is a fusion of technology, creativity, and relentless curiosity, where every dataset holds a secret, every project is a new quest, and every bug is just a riddle waiting to be solved!
              </p>
            </div>
            
            {/* Added Stats/Highlights
            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-700">3+</div>
                <div className="text-gray-600">Years of Coding</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-700">15+</div>
                <div className="text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-700">5+</div>
                <div className="text-gray-600">Technologies</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}