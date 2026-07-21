import { Github, Linkedin, Mail, Download } from 'lucide-react';
export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;800&display=swap');
        .font-outfit {
          font-family: 'Outfit', sans-serif;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.8s ease-out forwards;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
      `}</style>


      <section id="about" className="font-outfit min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden relative">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="order-1 md:order-1 pt-8 md:pt-0 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="inline-block mb-3 px-4 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full opacity-0 animate-fade-up">
                <span className="text-blue-400 text-sm font-medium tracking-wide">👋 Welcome to my portfolio</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-1 font-bold tracking-tight text-white block opacity-0 animate-fade-up delay-100">
                Hi, I'm
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl mb-4 font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block drop-shadow-lg opacity-0 animate-fade-up delay-200">
                Lakshmi Srinivas
              </h1>
{/*
              <h2 className="text-xl md:text-2xl text-gray-300 mb-4 font-light tracking-wide opacity-0 animate-fade-up delay-300">
                Advanced Application Engineering Analyst
              </h2>*/}

              <p className="text-base lg:text-lg text-gray-400 mb-6 leading-relaxed font-light opacity-0 animate-fade-up delay-400">
                M.Tech student in Artificial Intelligence at IIT Roorkee with industry experience building production-grade
enterprise automation systems and AI-powered applications. Experienced in Large Language Models (LLMs),
Retrieval-Augmented Generation (RAG), Agentic AI, FastAPI, and Python. Developed enterprise-scale
automation solutions that reduced operational effort by approximately 80%, while pursuing research in
trustworthy AI and intelligent systems. Passionate about building scalable AI systems that bridge research
and real-world deployment.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 opacity-0 animate-fade-up delay-500">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/50 hover:-translate-y-0.5 transition-all duration-300 pointer-events-auto"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-2.5 border border-gray-700 text-gray-300 font-medium rounded-lg hover:border-blue-500 hover:text-white hover:-translate-y-0.5 transition-all duration-300 pointer-events-auto"
                >
                  Get In Touch
                </button>
              </div>

              {/* Social Links Expanding Pills */}
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mt-8 opacity-0 animate-fade-up delay-600">
                <a
                  href="https://github.com/srinivastls"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-2.5 bg-gray-800/40 hover:bg-gray-700/60 border border-gray-700/50 rounded-full transition-all duration-300 group pointer-events-auto shadow-sm hover:shadow-md"
                >
                  <Github className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                  <span className="max-w-0 opacity-0 group-hover:max-w-[100px] group-hover:opacity-100 group-hover:ml-2.5 whitespace-nowrap text-sm text-gray-200 group-hover:text-white transition-all duration-300 font-medium">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/telaprolu-lakshmi-srinivas-224589212/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-2.5 bg-gray-800/40 hover:bg-gray-700/60 border border-gray-700/50 rounded-full transition-all duration-300 group pointer-events-auto shadow-sm hover:shadow-md"
                >
                  <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                  <span className="max-w-0 opacity-0 group-hover:max-w-[100px] group-hover:opacity-100 group-hover:ml-2.5 whitespace-nowrap text-sm text-gray-200 group-hover:text-white transition-all duration-300 font-medium">LinkedIn</span>
                </a>
                <a
                  href="mailto:lakshmisrinivas365@gmail.com"
                  className="flex items-center justify-center p-2.5 bg-gray-800/40 hover:bg-gray-700/60 border border-gray-700/50 rounded-full transition-all duration-300 group pointer-events-auto shadow-sm hover:shadow-md"
                >
                  <Mail className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                  <span className="max-w-0 opacity-0 group-hover:max-w-[100px] group-hover:opacity-100 group-hover:ml-2.5 whitespace-nowrap text-sm text-gray-200 group-hover:text-white transition-all duration-300 font-medium">Email</span>
                </a>
                <a
                  href="Resume.pdf"
                  download="Lakshmi_Srinivas_Resume.pdf"
                  className="flex items-center justify-center p-2.5 bg-gray-800/40 hover:bg-gray-700/60 border border-gray-700/50 rounded-full transition-all duration-300 group pointer-events-auto shadow-sm hover:shadow-md"
                >
                  <Download className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                  <span className="max-w-0 opacity-0 group-hover:max-w-[100px] group-hover:opacity-100 group-hover:ml-2.5 whitespace-nowrap text-sm text-gray-200 group-hover:text-white transition-all duration-300 font-medium">Resume</span>
                </a>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="order-2 md:order-2 flex justify-center md:justify-end opacity-0 animate-fade-up delay-600">
              <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
                {/* Gradient Background - Optimized blur */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>

                {/* Main Image Container */}
                <div className="relative z-10 w-full h-full p-2">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/10 backdrop-blur-sm bg-white/5 shadow-2xl transition-transform duration-500 hover:scale-[1.03]">
                    <img
                      src="Image.jpeg"
                      alt="Lakshmi Srinivas"
                      loading="lazy"
                      className="w-full h-full object-cover rounded-full"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 to-transparent rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
