import React, { useLayoutEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { TiltCard } from './ui/TiltCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  technologies: string[];
  metrics: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
 
  {
    title: 'NyayaMitra: AI-Powered Legal Assistant',
    description: 'An AI-powered legal documentation and chatbot system that assists users in generating legal documents and answering law-related queries using RAG and ReAct-based agents. Developed as a hackathon-winning prototype to democratize access to legal support in India.',
    technologies: ['PyTorch', 'Hugging Face', 'Milvus', 'FastAPI', 'Streamlit', 'LangChain', 'GCP'],
    metrics: ['91% factual consistency', '88.4% classification acc', '200K+ cases scraped'],
    image: '/NyayaMitra.png',
    githubUrl: 'https://github.com/srinivastls/NyayaMitra'
  },
  {
    title: 'AI-Powered Scam Detection & Automated Investigation System',
    description: 'Developed an AI-powered investigation platform aligned with Section 91 CrPC using GPT-4o and RoBERTa. Features an information-extraction pipeline for chat logs, AI-driven decoy agents to engage fraudsters, and a scalable backend with 40+ FastAPI REST APIs.',
    technologies: ['Python', 'FastAPI', 'Azure OpenAI', 'RoBERTa', 'Transformers'],
    metrics: ['Section 91 CrPC Aligned', '40+ REST APIs', 'Automated Investigation'],
    image: '/91-crpc.png',
    githubUrl: 'https://github.com/srinivastls/91-crpc'
  },
  {
    title: 'Celebrity Image Recognition',
    description: 'Developed image recognition system using ML classifiers and PCA for dimensionality reduction. Utilized OpenCV Haar cascades for facial feature detection.',
    technologies: ['Scikit-learn', 'OpenCV', 'Python', 'PCA'],
    metrics: ['Dimensionality reduction', 'Haar cascades'],
    image: '/celebrity.png',
    githubUrl: 'https://github.com/srinivastls/Image_recognition'
  },
  {
    title: 'cp_snippets',
    description: 'Small, fast, and reusable competitive programming snippets for Python. Built for GATE / ICPC / Codeforces / LeetCode preparation.',
    technologies: ['Python', 'Competitive Programming', 'Algorithms', 'Data Structures'],
    metrics: ['Snippets', 'Competitive Programming'],
    image: '/cp_snippets.png',
    githubUrl: 'https://github.com/srinivastls/cp_snippets'
  },
   {
    title: 'AADIS: Advanced Agentic Document Intelligence System',
    description: 'A sophisticated multi-agent system designed to automate deep document understanding and intelligent information retrieval. It processes complex documents through specialized agents to extract multi-modal data and provides an agentic QA chatbot.',
    technologies: ['Python', 'Multi-Agent Systems', 'LLMs', 'RAG'],
    metrics: ['Multi-Agent Architecture', 'Automated Decomposition', 'Agentic QA'],
    image: '/AADIS.png',
    githubUrl: 'https://github.com/srinivastls/AADIS'
  }
];

export function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const trigger = triggerRef.current;

      if (!section || !trigger) return;

      const totalWidth = section.scrollWidth;
      const amountToScroll = totalWidth - window.innerWidth;

      gsap.to(section, {
        x: -amountToScroll,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: () => `+=${amountToScroll}`,
          pin: true,
          scrub: 0.1, // Near-instant response instead of 1s lag
          invalidateOnRefresh: true,
          fastScrollEnd: true,
          preventOverlaps: true,
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={triggerRef} className="pt-24 pb-12 overflow-hidden bg-gray-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-heading mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Scroll down to explore my work horizontally
          </p>
        </div>
      </div>

      {/* Projects Horizontal Container */}
      <div 
        className="flex gap-4 md:gap-6 px-[5vw] md:px-[10vw] will-change-transform" 
        ref={sectionRef} 
        style={{ width: 'max-content', transform: 'translate3d(0,0,0)' }}
      >
        {projects.map((project, index) => (
          <div key={index} className="w-[280px] sm:w-[320px] md:w-[360px] flex-shrink-0 self-stretch group pb-8">
            <TiltCard className="h-full rounded-3xl">
              <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-700 h-full flex flex-col relative w-full group/card shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(255,255,255,0.04)]">
                
                {/* Edge-to-Edge Hero Image Section */}
                <div className="relative h-44 w-full flex-shrink-0 overflow-hidden bg-[#111]">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover/card:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-80 group-hover/card:opacity-100"
                  />
                  {/* Seamless fade into background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent z-10"></div>
                  
                  {/* Floating Action Buttons (Top Right) */}
                  <div className="absolute top-4 right-4 z-30 flex gap-2 opacity-0 group-hover/card:opacity-100 translate-y-2 group-hover/card:translate-y-0 transition-all duration-500 delay-100">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white flex-shrink-0 hover:text-black transition-colors duration-300"
                      title="Source Code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-400 flex-shrink-0 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="px-6 pb-6 pt-0 flex flex-col flex-1 z-20 relative h-full">
                  
                  {/* Metrics / Category (Super subtle) */}
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
                    {project.metrics.slice(0, 2).map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                        <span className="text-[10px] font-body font-medium tracking-wider text-gray-500 uppercase">{metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* Title & Description */}
                  <div className="flex-1 flex flex-col justify-start">
                    <h3 className="text-xl md:text-2xl font-heading font-semibold tracking-tight text-white mb-2.5 line-clamp-2 leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm font-body font-normal text-gray-400/90 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Elements: Floating Tags */}
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-[10px] md:text-[11px] font-body font-medium tracking-wide bg-white/5 text-gray-300 rounded-full hover:bg-white/10 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 text-[10px] md:text-[11px] font-medium tracking-wide bg-transparent border border-white/10 text-gray-500 rounded-full">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </TiltCard>
          </div>
        ))}
      </div>
    </section>
  );
}
