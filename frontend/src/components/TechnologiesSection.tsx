import {
    SiReact, SiAngular, SiVuedotjs, SiNextdotjs, SiTailwindcss,
    SiNodedotjs, SiPython, SiPhp, SiLaravel,
    SiMongodb, SiMysql, SiPostgresql, SiAmazon, SiDocker,
    SiFigma, SiFlutter, SiAndroid, SiApple, SiGit
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const technologies = [
    // Web & Frontend
    { name: 'React', icon: SiReact, color: 'text-blue-400' },
    { name: 'Angular', icon: SiAngular, color: 'text-red-600' },
    { name: 'Vue.js', icon: SiVuedotjs, color: 'text-green-500' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-slate-900 dark:text-slate-200' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400' },

    // Backend
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
    { name: 'Python', icon: SiPython, color: 'text-yellow-400' },
    { name: 'PHP', icon: SiPhp, color: 'text-purple-600' },
    { name: 'Laravel', icon: SiLaravel, color: 'text-red-600' },
    { name: 'Java', icon: FaJava, color: 'text-orange-500' },

    // Database & Cloud
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-500' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
    { name: 'AWS', icon: SiAmazon, color: 'text-orange-500' },
    { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },

    // Design & Others
    { name: 'Figma', icon: SiFigma, color: 'text-pink-500' },
    { name: 'Flutter', icon: SiFlutter, color: 'text-blue-400' },
    { name: 'Android', icon: SiAndroid, color: 'text-green-500' },
    { name: 'iOS', icon: SiApple, color: 'text-slate-900 dark:text-slate-200' },
    { name: 'Git', icon: SiGit, color: 'text-orange-600' }
];

export default function TechnologiesSection() {
    return (
        <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                <p className="text-blue-600 dark:text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">
                    TECHNOLOGIES WE DO BEST
                </p>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">
                    Digitize Your Business with Our Expert Web Technologies
                </h2>
                <p className="text-slate-500 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed text-lg">
                    From dynamic websites to feature-rich applications, we harness the power of top-tier technologies to make your digital experience more functional and user-friendly. Used by pioneering web design companies in India offering end-to-end development solutions prioritizing quality, performance, and client satisfaction.
                </p>
            </div>

            {/* Marquee Setup */}
            <div className="relative">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10"></div>

                {/* Marquee Row 1 */}
                <div className="flex overflow-hidden group space-x-16 pb-8">
                    <div className="flex space-x-16 animate-marquee">
                        {technologies.concat(technologies).map((tech, index) => (
                            <div key={index} className="flex flex-col items-center gap-4 flex-shrink-0 group/item cursor-pointer">
                                <div className={`w-20 h-20 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center shadow-sm group-hover/item:shadow-md transition-all duration-300 group-hover/item:-translate-y-1 border border-slate-100 dark:border-slate-800`}>
                                    <tech.icon size={40} className={tech.color} />
                                </div>
                                <span className="font-semibold text-slate-700 dark:text-slate-300 text-sm">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Marquee Row 2 (Reverse) */}
                <div className="flex overflow-hidden group space-x-16 mt-8">
                    <div className="flex space-x-16 animate-marquee-reverse">
                        {/* Shuffling the array slightly for variety visually */}
                        {[...technologies.slice(5), ...technologies.slice(0, 5)].concat([...technologies.slice(5), ...technologies.slice(0, 5)]).map((tech, index) => (
                            <div key={index} className="flex flex-col items-center gap-4 flex-shrink-0 group/item cursor-pointer">
                                <div className={`w-20 h-20 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center shadow-sm group-hover/item:shadow-md transition-all duration-300 group-hover/item:-translate-y-1 border border-slate-100 dark:border-slate-800`}>
                                    <tech.icon size={40} className={tech.color} />
                                </div>
                                <span className="font-semibold text-slate-700 dark:text-slate-300 text-sm">{tech.name}</span>
                            </div>
                        ))}
                    </div>
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
                    animation: marquee 40s linear infinite;
                }
                .animate-marquee-reverse {
                    animation: marquee-reverse 40s linear infinite;
                }
                .animate-marquee:hover, .animate-marquee-reverse:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
