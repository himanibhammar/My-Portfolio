import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaFileAlt, FaLaptopCode } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-teal-800 to-teal-600 text-white relative">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform -translate-y-full">
        <svg className="relative block w-full h-10" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" className="fill-white"></path>
        </svg>
      </div>
      
      <div className="container mx-auto pt-16 pb-8 px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Column 1: About */}
          <div>
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-teal-400 pb-2 inline-block">Himani Bhammar</h2>
            <p className="text-teal-100 mb-4">AI/ML Developer passionate about creating innovative solutions and exploring cutting-edge technologies.</p>
            <p className="text-teal-100">Based in Chennai • SRMIST KTR</p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b-2 border-teal-400 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-teal-100 hover:text-white flex items-center">
                  <FaCode className="mr-2" /> Skills
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-100 hover:text-white flex items-center">
                  <FaLaptopCode className="mr-2" /> Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-100 hover:text-white flex items-center">
                  <FaFileAlt className="mr-2" /> Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-teal-100 hover:text-white flex items-center">
                  <FaEnvelope className="mr-2" /> Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Connect */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b-2 border-teal-400 pb-2 inline-block">Connect</h3>
            <div className="grid grid-cols-2 gap-4">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" 
                className="bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300 flex flex-col items-center justify-center">
                <FaGithub className="text-3xl mb-2" />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" 
                className="bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300 flex flex-col items-center justify-center">
                <FaLinkedin className="text-3xl mb-2" />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:himanibhammar@gmail.com" 
                className="bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300 flex flex-col items-center justify-center col-span-2">
                <FaEnvelope className="text-3xl mb-2" />
                <span>himanibhammar@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-teal-400/30 my-6"></div>
        
        {/* Copyright */}
        <div className="text-center text-teal-200">
          <p>© {new Date().getFullYear()} Himani Bhammar. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}