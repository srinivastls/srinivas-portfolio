import React, { useLayoutEffect, useRef } from 'react';
import { Award, Users, Star, Code, ExternalLink } from 'lucide-react';
import { TiltCard } from './ui/TiltCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Achievements() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const section = sectionRef.current;
            const trigger = triggerRef.current;

            if (!section || !trigger) return;

            // Calculate scroll values matching the Projects section approach
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
                    scrub: 1,
                    invalidateOnRefresh: true,
                }
            });
        });

        return () => ctx.revert();
    }, []);

    const achievements = [
        {
            title: 'Research Paper Published',
            organization: 'MIKE2025 / TENCON2025',
            icon: <Award className="w-6 h-6 text-yellow-400" />,
            description: 'Published research on LegalAI at major international conferences.',
            link: 'https://www.linkedin.com/posts/srinivastls_mike2025-tencon2025-legalai-activity-7431903210417762304-ABHG',
            color: 'yellow'
        },
        {
            title: 'CP Snippets',
            organization: 'PyPI / GitHub',
            icon: <Code className="w-6 h-6 text-teal-400" />,
            description: 'Authored an open-source Python library of reusable competitive programming snippets. Released as an MIT-licensed package on PyPI with auto-generated MkDocs API documentation.',
            link: 'https://pypi.org/project/cp-snippets/',
            color: 'teal'
        },
       
        {
            title: 'Smart Expense Tracker',
            organization: 'Google Play Store App',
            icon: <Star className="w-6 h-6 text-green-400" />,
            description: 'Designed, developed, and published an intuitive expense tracking application for Android devices.',
            link: 'https://play.google.com/store/apps/details?id=com.artly.expense_tracker',
            color: 'green'
        },
        {
            title: 'Placement Cell Coordinator',
            organization: 'IIITDM Kancheepuram',
            icon: <Users className="w-6 h-6 text-purple-400" />,
            description: 'Coordinated campus placement activities and corporate relations for the student body.',
            color: 'purple'
        },
        {
            title: 'Head Core',
            organization: 'Developers Club IIITDM (2024–25)',
            icon: <Code className="w-6 h-6 text-blue-400" />,
            description: 'Organized major technical events including Vashisht Hackathons and led development of the club website.',
            link: 'https://devclub.iiitdm.ac.in/',
            color: 'blue'
        },
        {
            title: 'Website Developer',
            organization: 'Computer Science & Engineering Dept',
            icon: <Code className="w-6 h-6 text-indigo-400" />,
            description: 'Designed and deployed the official website for the CSE Department at IIITDM.',
            link: 'https://cse.iiitdm.ac.in/',
            color: 'indigo'
        },
        {
            title: 'Core Member',
            organization: 'Google Developer Student Club',
            icon: <Star className="w-6 h-6 text-pink-400" />,
            description: 'Active core member facilitating developer community growth and technical workshops.',
            color: 'pink'
        }
    ];

    return (
        <section id="achievements" ref={triggerRef} className="pt-24 pb-12 overflow-hidden bg-gray-950/20 border-t border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
                        Responsibilities & Achievements
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        Leadership roles and community contributions
                    </p>
                </div>
            </div>

            <div className="flex gap-8 px-[10vw] pb-12" ref={sectionRef} style={{ width: 'max-content' }}>
                {achievements.map((item, index) => (
                    <div key={index} className="w-[300px] md:w-[450px] flex-shrink-0 self-stretch group">
                        <TiltCard className="h-full">
                            <div className="relative h-full bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/[0.1] rounded-3xl p-8 hover:bg-[#111111]/90 hover:border-white/[0.2] transition-all duration-500 flex flex-col items-start text-left group/card shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
                                <div className={`absolute top-0 right-0 w-24 h-24 bg-${item.color}-500/5 blur-2xl -mr-12 -mt-12 group-hover/card:bg-${item.color}-500/10 transition-colors`}></div>
                                
                                <div className={`w-14 h-14 bg-${item.color}-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover/card:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-2xl font-bold text-white tracking-tight">
                                            {item.title}
                                        </h3>
                                        {item.link && (
                                            <a 
                                                href={item.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all ml-2"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                    <div className="text-blue-400/90 text-sm font-semibold mb-4 tracking-wider uppercase">
                                        {item.organization}
                                    </div>
                                    <p className="text-gray-400 text-base leading-relaxed font-light">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </TiltCard>
                    </div>
                ))}
            </div>
        </section>
    );
}
