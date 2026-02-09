import { ArrowRight, Globe, Linkedin, Twitter, Handshake, Lightbulb, Zap, Cpu, TrendingUp, Instagram, Facebook, Mail } from 'lucide-react';
import ExpertiseSection from '../components/ExpertiseSection';
import IndustriesSection from '../components/IndustriesSection';
import TechnologiesSection from '../components/TechnologiesSection';
import ProcessSection from '../components/ProcessSection';
import FAQSection from '../components/FAQSection';
import ContactFormSection from '../components/ContactFormSection';

export default function Home() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white pt-20 transition-colors duration-300">
            {/* Hero Section */}
            {/* Hero Section - Professional Redesign */}
            <section className="relative px-4 min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 pb-40">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
                    style={{ backgroundImage: 'linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>

                {/* Radial Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">

                    {/* Slogan - Highly Highlighted */}
                    <div className="flex flex-col items-center gap-4 mb-4 animate-fade-in">
                        <div className="w-1 h-12 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-50"></div>
                        <h2 className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-orange-500 animate-gradient-x select-none">
                            Innovate &bull; Integrate &bull; Impact
                        </h2>
                    </div>

                    {/* Headline - Serif & Impactful */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-slate-900 dark:text-white leading-[1.05] animate-fade-in">
                        Engineering digital <br />
                        <span className="italic text-slate-400 dark:text-slate-600 font-light">excellence.</span>
                    </h1>

                    {/* Description - Professional & Concise */}
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-100 font-light">
                        We don't just write code; we architect scalable digital ecosystems. Partner with us to transform complex challenges into elegant, high-performance solutions.
                    </p>

                    {/* Buttons - Refined */}
                    <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8 animate-fade-in delay-200">
                        <button className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold text-sm uppercase tracking-widest transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">
                                Start A Project
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                        </button>

                        <button className="px-8 py-4 bg-transparent hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-400 rounded-full font-semibold text-sm uppercase tracking-widest transition-all border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600">
                            Our Work
                        </button>
                    </div>
                </div>
            </section>

            {/* Fixed Social Sidebar - Left */}
            <div className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-6 items-center">
                <div className="w-[1px] h-24 bg-slate-300 dark:bg-slate-700"></div>
                <div className="flex flex-col gap-4">
                    <a href="https://www.linkedin.com/in/kiri-techhub-6464393ab/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-blue-600 dark:hover:text-blue-500 transition-all hover:scale-110 shadow-sm hover:shadow-md group relative">
                        <Linkedin size={20} />
                        <span className="absolute left-full ml-4 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">LinkedIn</span>
                    </a>
                    <a href="https://www.instagram.com/kiri.tech.hub/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-pink-600 dark:hover:text-pink-500 transition-all hover:scale-110 shadow-sm hover:shadow-md group relative">
                        <Instagram size={20} />
                        <span className="absolute left-full ml-4 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Instagram</span>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61587947721184" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-blue-700 dark:hover:text-blue-600 transition-all hover:scale-110 shadow-sm hover:shadow-md group relative">
                        <Facebook size={20} />
                        <span className="absolute left-full ml-4 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Facebook</span>
                    </a>
                    <a href="https://x.com/KiRi_TechHub" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-black dark:hover:text-white transition-all hover:scale-110 shadow-sm hover:shadow-md group relative">
                        <Twitter size={20} />
                        <span className="absolute left-full ml-4 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">X (Twitter)</span>
                    </a>
                    <a href="mailto:kiri.tech.hub@gmail.com" className="p-3 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-red-600 dark:hover:text-red-500 transition-all hover:scale-110 shadow-sm hover:shadow-md group relative">
                        <Mail size={20} />
                        <span className="absolute left-full ml-4 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">kiri.tech.hub@gmail.com</span>
                    </a>
                </div>
                <div className="w-[1px] h-24 bg-slate-300 dark:bg-slate-700"></div>
            </div>

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

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                        {[
                            { icon: Handshake, text: "Collaborative approach" },
                            { icon: Lightbulb, text: "Idea-to-product guidance" },
                            { icon: Zap, text: "Agile & fast execution" },
                            { icon: Cpu, text: "Modern scalable tech" },
                            { icon: TrendingUp, text: "Growth-focused solutions" },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center gap-4 group">
                                <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all group-hover:-translate-y-1 border border-slate-100 dark:border-slate-700">
                                    <item.icon className="w-8 h-8 text-blue-500" />
                                </div>
                                <span className="font-medium text-slate-700 dark:text-slate-300 text-sm">
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>

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
                </div>
            </section>

            {/* Expertise Section - Redesigned */}
            <ExpertiseSection />

            {/* Process Section - Product Development Process */}
            <ProcessSection />

            {/* Industries Section */}
            <IndustriesSection />

            {/* Technologies Marquee Section */}
            <TechnologiesSection />

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto bg-slate-900 dark:bg-slate-800 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 flex justify-center">
                        <div className="w-[600px] h-[300px] bg-blue-600/20 blur-[100px] rounded-full"></div>
                    </div>

                    <div className="relative z-10 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                            Elevate Your Digital <br /> Presence Today
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            Our team of senior architects and designers is ready to take your project from concept to industry leader.
                        </p>
                        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-md font-semibold text-sm uppercase tracking-wider transition-all shadow-lg shadow-blue-500/20 inline-flex items-center gap-2">
                            Get a Detailed Quote
                        </button>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection />

            {/* Contact Form Section */}
            <ContactFormSection />

            {/* Footer */}
            <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 font-bold text-xl text-slate-900">
                                <img src="/logo.png" alt="KiRi" className="h-10 w-auto" />
                            </div>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                High-end technical consultancy and development. Since 2018, we've been crafting digital products that define industries.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-wider">Expertise</h4>
                            <ul className="space-y-4 text-sm text-slate-600">
                                <li><a href="#" className="hover:text-blue-600 transition-colors">Web Engineering</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition-colors">Android Platforms</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition-colors">Cloud Infrastructure</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition-colors">Product Strategy</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-wider">Company</h4>
                            <ul className="space-y-4 text-sm text-slate-600">
                                <li><a href="#" className="hover:text-blue-600 transition-colors">Our Philosophy</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition-colors">Portfolio</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-wider">Newsletter</h4>
                            <p className="text-sm text-slate-500 mb-4">Insights on the future of tech.</p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="flex-1 px-4 py-2 bg-white border border-slate-200 rounded-md text-sm focus:outline-none focus:border-blue-600"
                                />
                                <button className="w-10 h-10 bg-blue-600 text-white rounded-md flex items-center justify-center hover:bg-blue-700 transition-colors">
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 uppercase tracking-wider">
                        <p>© 2024 KIRISTUDIO. PRECISION ENGINEERED.</p>
                        <div className="flex gap-6">
                            <Globe size={16} className="hover:text-slate-600 cursor-pointer transition-colors" />
                            <Linkedin size={16} className="hover:text-slate-600 cursor-pointer transition-colors" />
                            <Twitter size={16} className="hover:text-slate-600 cursor-pointer transition-colors" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
