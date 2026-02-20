import { ArrowRight, Handshake, Lightbulb, Zap, Cpu, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ExpertiseSection from '../components/ExpertiseSection';
import IndustriesSection from '../components/IndustriesSection';
import TechnologiesSection from '../components/TechnologiesSection';
import ProcessSection from '../components/ProcessSection';
import FAQSection from '../components/FAQSection';
import ContactFormModal from '../components/ContactFormModal';
import { AuroraBackground } from '../components/ui/aurora-background';
import { BentoGrid, BentoGridItem } from '../components/ui/bento-grid';
import { BackgroundBeams } from '../components/ui/background-beams';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white pt-20 transition-colors duration-300">
            {/* Hero Section */}
            {/* Hero Section - Professional Redesign */}
            {/* Hero Section - Aurora Background */}
            <AuroraBackground>
                <div className="relative px-4 flex flex-col justify-center items-center overflow-hidden z-10 w-full max-w-7xl mx-auto">

                    <div className="text-center space-y-8 animate-fade-in relative">

                        {/* Slogan - Highly Highlighted */}
                        <div className="flex flex-col items-center gap-4 mb-4">
                            <div className="w-1 h-12 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-50 mx-auto"></div>
                            <h2 className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-orange-500 animate-gradient-x select-none">
                                Innovate &bull; Integrate &bull; Impact
                            </h2>
                        </div>

                        {/* Headline - Serif & Impactful */}
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-slate-900 dark:text-white leading-[1.05]">
                            Engineering digital <br />
                            <span className="italic text-slate-400 dark:text-slate-600 font-light">excellence.</span>
                        </h1>

                        {/* Description - Professional & Concise */}
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
                            We don't just write code; we architect scalable digital ecosystems. Partner with us to transform complex challenges into elegant, high-performance solutions.
                        </p>

                        {/* Buttons - Refined */}
                        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
                            <button onClick={() => setIsModalOpen(true)} className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold text-sm uppercase tracking-widest transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 overflow-hidden">
                                <span className="relative z-10 flex items-center gap-2">
                                    Start A Project
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                            </button>

                            <Link to="/portfolio">
                                <button className="px-8 py-4 bg-transparent hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-400 rounded-full font-semibold text-sm uppercase tracking-widest transition-all border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600">
                                    Our Work
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </AuroraBackground>



            {/* Partner in Innovation Section - Redesigned */}
            <section className="py-20 border-t border-slate-100 dark:border-slate-900 bg-slate-50 dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-blue-600 dark:text-blue-500 font-bold tracking-widest uppercase text-xs mb-4">
                        PARTNER IN INNOVATION
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                        We work closely with founders & startups
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-lg mb-12">
                        Acting as your technology partner from idea validation to scalable product launch.
                    </p>

                    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
                        {[
                            {
                                title: "Collaborative Approach",
                                description: "We work as an extension of your team, ensuring total alignment.",
                                header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden"><img src="/collaborative.png" alt="Collaborative Approach" className="w-full h-full object-cover opacity-80 group-hover/bento:scale-105 transition-transform duration-300" /></div>,
                                icon: <Handshake className="h-4 w-4 text-neutral-500" />,
                            },
                            {
                                title: "Idea-to-Product",
                                description: "Comprehensive guidance from napkin sketch to market launch.",
                                header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden"><img src="/ideatoproduct.png" alt="Idea-to-Product Guidance" className="w-full h-full object-cover opacity-80 group-hover/bento:scale-105 transition-transform duration-300" /></div>,
                                icon: <Lightbulb className="h-4 w-4 text-neutral-500" />,
                            },
                            {
                                title: "Agile Execution",
                                description: "Fast iteration cycles to adapt to market feedback instantly.",
                                header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden"><img src="/agileexecution.png" alt="Agile Execution" className="w-full h-full object-cover opacity-80 group-hover/bento:scale-105 transition-transform duration-300" /></div>,
                                icon: <Zap className="h-4 w-4 text-neutral-500" />,
                            },
                            {
                                title: "Modern Scalable Tech",
                                description: "Built on future-proof stacks like React, Next.js, Node, and AWS.",
                                header: (
                                    <div className="flex flex-col space-y-4 justify-center items-center h-full w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-xl relative">
                                        {/* Gradient Masks */}
                                        <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-neutral-100 dark:from-neutral-900 to-transparent z-10"></div>
                                        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-neutral-100 dark:from-neutral-900 to-transparent z-10"></div>

                                        <div className="flex overflow-hidden">
                                            <div className="flex space-x-6 animate-marquee whitespace-nowrap py-2">
                                                {/* Tech Icons Row 1 - Duplicated for seamless loop */}
                                                {[
                                                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
                                                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js", className: "dark:invert" },
                                                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind" },
                                                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
                                                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
                                                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", alt: "PHP" },
                                                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java" },
                                                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", alt: "AWS" },
                                                    // Duplicate
                                                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
                                                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js", className: "dark:invert" },
                                                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind" },
                                                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
                                                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
                                                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", alt: "PHP" },
                                                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java" },
                                                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", alt: "AWS" },
                                                ].map((icon, idx) => (
                                                    <div key={idx} className="flex flex-col items-center justify-center w-12 h-12 bg-white dark:bg-neutral-800 rounded-lg shadow-sm flex-shrink-0">
                                                        <img src={icon.src} alt={icon.alt} className={`w-6 h-6 ${icon.className || ''}`} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex overflow-hidden">
                                            <div className="flex space-x-6 animate-marquee-reverse whitespace-nowrap py-2">
                                                {/* Tech Icons Row 2 - Duplicated for seamless loop */}
                                                {[
                                                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
                                                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "MySQL" },
                                                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" },
                                                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", alt: "Laravel" },
                                                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg", alt: "Vite" },
                                                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", alt: "Flutter" },
                                                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
                                                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker" },
                                                    // Duplicate
                                                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
                                                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "MySQL" },
                                                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" },
                                                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", alt: "Laravel" },
                                                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg", alt: "Vite" },
                                                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", alt: "Flutter" },
                                                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
                                                    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker" },
                                                ].map((icon, idx) => (
                                                    <div key={idx} className="flex flex-col items-center justify-center w-12 h-12 bg-white dark:bg-neutral-800 rounded-lg shadow-sm flex-shrink-0">
                                                        <img src={icon.src} alt={icon.alt} className="w-6 h-6" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <style>{`
                                            @keyframes marquee {
                                                0% { transform: translateX(0); }
                                                100% { transform: translateX(-50%); }
                                            }
                                            @keyframes marquee-reverse {
                                                0% { transform: translateX(-50%); }
                                                100% { transform: translateX(0); }
                                            }
                                            .animate-marquee {
                                                animation: marquee 10s linear infinite;
                                            }
                                            .animate-marquee-reverse {
                                                animation: marquee-reverse 10s linear infinite;
                                            }
                                        `}</style>
                                    </div>
                                ),

                                icon: <Cpu className="h-4 w-4 text-neutral-500" />,
                                className: "md:col-span-2",
                            },
                            {
                                title: "Growth Focused",
                                description: "Features designed specifically to drive user acquisition and retention.",
                                header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden"><img src="/growth.png" alt="Growth Focused" className="w-full h-full object-cover opacity-80 group-hover/bento:scale-105 transition-transform duration-300" /></div>,
                                icon: <TrendingUp className="h-4 w-4 text-neutral-500" />,
                            },
                        ].map((item, i) => (
                            <BentoGridItem
                                key={i}
                                title={item.title}
                                description={item.description}
                                header={item.header}
                                icon={item.icon}
                                className={item.className}
                            />
                        ))}
                    </BentoGrid >

                    <div className="mt-16 flex justify-center">
                        <div className="inline-flex items-center gap-3 bg-white dark:bg-slate-800 px-5 py-2.5 rounded-full shadow-sm border border-slate-200 dark:border-slate-700">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </span>
                            <span className="text-slate-600 dark:text-slate-300 text-sm font-medium tracking-wide">
                                Accepting select projects for Q3 2026
                            </span>
                        </div>
                    </div>
                </div >
            </section >

            {/* Expertise Section - Redesigned */}
            < ExpertiseSection onOpenModal={() => setIsModalOpen(true)} />

            {/* Process Section - Product Development Process */}
            < ProcessSection />

            {/* Industries Section */}
            < IndustriesSection />

            {/* Technologies Marquee Section */}
            < TechnologiesSection />

            {/* CTA Section - Background Beams */}
            < section className="py-20 px-4" >
                <div className="max-w-5xl mx-auto bg-neutral-950 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden border border-neutral-800">
                    <BackgroundBeams className="opacity-40" />

                    <div className="relative z-10 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                            Elevate Your Digital <br /> Presence Today
                        </h2>
                        <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                            Our team of senior architects and designers is ready to take your project from concept to industry leader.
                        </p>
                        <button onClick={() => setIsModalOpen(true)} className="px-8 py-4 bg-white text-neutral-950 rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] inline-flex items-center gap-2 z-50">
                            Get a Detailed Quote
                        </button>
                    </div>
                </div>
            </section >

            {/* FAQ Section */}
            < FAQSection />

            {/* Contact Form Section */}
            {/* < ContactFormSection /> - Moved to Global Layout */}

            {/* Footer */}
            {/* < Footer /> - Moved to Global Layout */}

            {/* Contact Form Modal */}
            <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div >
    );
}
