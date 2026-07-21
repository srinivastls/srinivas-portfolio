import React, { useRef, useLayoutEffect } from 'react';
import { Briefcase, Calendar, Github, MapPin, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  githubUrl?: string;
}

const experiences: ExperienceItem[] = [
  {
    title: 'Advanced App Engineering Analyst — AI & Enterprise Automation',
    company: 'Accenture',
    period: 'Oct 2025 – Jul 2026',
    location: 'Hyderabad, India',
    description: 'Specializing in AI-driven enterprise automation, intelligent agents, and infrastructure operations.',
    achievements: [
      'Designed AI-powered intelligent agents to automate enterprise workflows, contextual information retrieval, and operational assistance, reducing repetitive manual intervention across infrastructure operations.',
      'Built a production-grade RHEL patching automation framework (Python) for Oracle RAC, covering validation, service migration, patch execution, and resumable execution; improved throughput from 4–6 systems/day to 15–20 systems in ~3 hours (~80% effort reduction).',
      'Modernized enterprise Oracle GoldenGate automation by migrating legacy Shell-based workflows to a modular Python architecture, improving maintainability and scalability.',
      'Architected a centralized operations dashboard for real-time automation monitoring, execution tracking, patch status visualization, and failure diagnostics.',
      'Implemented production-ready reliability features: structured logging, checkpoint-based recovery, automated notifications, and robust error handling.'
    ]
  },
  {
    title: 'Artificial Intelligence Intern',
    company: 'Vizzhy Inc (Hanooman.ai)',
    period: 'May 2024 - October 2024',
    location: 'Bangalore, India',
    description: 'Fine-tuned Large Language Models (LLMs) for diverse applications and designed data preprocessing pipelines.',
    achievements: [
      'Designed data preprocessing pipelines using Selenium and BeautifulSoup for web scraping and content enrichment',
      'Built REST APIs with FastAPI for user management and data retrieval in the DARPG project',
      'Enhanced the beta version of the Hanooman.ai interface, improving usability and performance'
    ]
  },
  {
    title: 'Teaching Assistant',
    company: 'IIITDM Kancheepuram',
    period: '2024 - 2025',
    location: 'Chennai, India',
    description: 'Assisted in courses: Computer Organization and Architecture, Data Structures and Algorithms, Digital System Design.',
    achievements: [
      'Conducted tutorial sessions and doubt-clearing labs for 100+ students across multiple semesters',
      'Supported grading of assignments, projects, and exams with detailed feedback',
      'Created supplemental materials and demonstrations for digital logic, memory hierarchy, and recursion',
      'Collaborated with faculty in improving course structure and mentorship activities'
    ]
  }
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const timelineLineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Timeline line animation
      gsap.from(timelineLineRef.current, {
        scaleY: 0,
        transformOrigin: "top",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 80%",
          scrub: 1,
        }
      });

      // Cards reveal animation
      const cards = cardsRef.current.filter(Boolean);
      if (cards.length > 0) {
        cards.forEach((card, index) => {
          gsap.fromTo(card,
            { 
              x: index % 2 === 0 ? -50 : 50,
              opacity: 0,
              rotateY: index % 2 === 0 ? 10 : -10
            },
            {
              x: 0,
              opacity: 1,
              rotateY: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none"
              }
            }
          );
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 5;
    const rotateY = ((centerX - x) / centerX) * 5;

    gsap.to(card, {
      rotateX,
      rotateY,
      scale: 1.02,
      duration: 0.5,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = (index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.5,
      ease: "power2.out"
    });
  };

  return (
    <section id="experience" ref={containerRef} className="py-12 relative overflow-hidden bg-gray-950/20">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Work <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line (Desktop) */}
          <div 
            ref={timelineLineRef}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 -translate-x-1/2"
          ></div>

          {/* Left Line (Mobile) */}
          <div className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={`exp-${index}`} 
                className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-8 md:-translate-x-1/2 flex items-center justify-center z-20">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-gray-950 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                </div>

                {/* Content Area */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 pl-8 md:pl-0' : 'md:pl-12 pl-8 md:pr-0'}`}>
                  <div
                    ref={(el) => { cardsRef.current[index] = el; }}
                    onMouseMove={(e) => handleMouseMove(e, index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    className="group relative bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-2xl p-8 transition-all duration-300 hover:border-white/[0.15] overflow-hidden shadow-2xl"
                    style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
                  >
                    <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
                      <div className="flex flex-col gap-4 mb-6">
                        <div className="flex justify-between items-start">
                          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {exp.title}
                          </h3>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          <div className="flex items-center gap-2 text-blue-400 font-medium bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                            <Award className="w-4 h-4" />
                            {exp.company}
                          </div>
                          <div className="flex items-center gap-2 text-gray-400">
                            <Calendar className="w-4 h-4 text-purple-400" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-2 text-gray-400">
                            <MapPin className="w-4 h-4 text-pink-400" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-8 leading-relaxed italic">
                        "{exp.description}"
                      </p>

                      <div className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start gap-3 group/item">
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mt-2 transition-transform group-hover/item:scale-150"></div>
                            <span className="text-gray-400 group-hover/item:text-gray-200 transition-colors text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>

                      {exp.githubUrl && (
                        <div className="mt-8 pt-6 border-t border-white/[0.05]">
                          <a
                            href={exp.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-xl transition-all border border-white/10"
                          >
                            <Github className="w-4 h-4" />
                            <span className="text-sm font-medium">Project Repository</span>
                          </a>
                        </div>
                      )}
                    </div>
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute -inset-24 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl"></div>
                  </div>
                </div>

                {/* Empty Area (Desktop) */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        #experience {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
