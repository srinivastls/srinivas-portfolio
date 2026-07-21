import React, { useRef, useLayoutEffect } from 'react';
import { GraduationCap, Calendar, Award, ChevronRight, ChevronLeft } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  details?: string;
  color: string;
}

const educationData: EducationItem[] = [
  {
    degree: 'M.Tech in Artificial Intelligence',
    institution: 'IIT Roorkee',
    period: 'Current',
    score: 'Pursuing',
    color: 'from-emerald-500 to-teal-400'
  },
  {
    degree: 'B.Tech in CSE (Major in AI)',
    institution: 'IIITDM Kancheepuram',
    period: '2021 - 2025',
    score: 'CGPA: 9.02',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    degree: 'Intermediate Education',
    institution: 'Narayana Junior College',
    period: '2019 - 2021',
    score: 'Score: 97.3%',
    color: 'from-purple-500 to-pink-400'
  },
  {
    degree: 'Secondary Education (CBSE)',
    institution: 'Jawahar Navodaya Vidyalaya',
    period: '2018 - 2019',
    score: 'Score: 92.6%',
    color: 'from-orange-500 to-yellow-400'
  }
];

export function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Reveal animation for the section
      gsap.from(".edu-header", {
        y: 30,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });

      // Reveal animation for cards
      const cards = cardsRef.current.filter(Boolean);
      if (cards.length > 0) {
        gsap.from(cards, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: scrollRef.current,
            start: "top 85%",
          }
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
    const rotateX = ((y - centerY) / centerY) * 8;
    const rotateY = ((centerX - x) / centerX) * 8;

    gsap.to(card, {
      rotateX,
      rotateY,
      scale: 1.05,
      duration: 0.4,
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
      duration: 0.4,
      ease: "power2.out"
    });
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="education" ref={containerRef} className="py-12 relative overflow-hidden bg-gray-950/20">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="edu-header text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Academic <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">Background</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>


        {/* Education Cards Grid */}
        <div 
          ref={scrollRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4"
        >
          {educationData.map((edu, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="w-full"
            >
              <div 
                className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-7 h-full transition-all duration-300 hover:border-white/[0.15] overflow-hidden"
                style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
              >
                {/* Visual Accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full blur-3xl`}></div>
                
                <div className="relative z-10" style={{ transform: 'translateZ(30px)' }}>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center mb-8 text-white shadow-xl`}>
                    <GraduationCap className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {edu.degree}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-purple-400 font-medium mb-6">
                    <Award className="w-4 h-4" />
                    {edu.institution}
                  </div>

                  <div className="space-y-4 text-sm">
                    <div className="flex items-center gap-3 text-gray-400">
                      <Calendar className="w-4 h-4 text-pink-400" />
                      {edu.period}
                    </div>
                    <div className="inline-block px-4 py-1.5 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full font-bold">
                      {edu.score}
                    </div>
                  </div>

                </div>

                {/* Bottom Line Accent */}
                <div className={`absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r ${edu.color} group-hover:w-full transition-all duration-700`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        #education {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
