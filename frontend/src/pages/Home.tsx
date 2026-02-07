import { ArrowRight, Globe, Linkedin, Twitter } from 'lucide-react';
import ExpertiseSection from '../components/ExpertiseSection';

export default function Home() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white pt-20 transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative px-4 min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 pb-60">
                <div className="max-w-7xl mx-auto text-center space-y-8">
                    {/* Pill */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-900 text-xs font-semibold tracking-wider uppercase text-slate-600 dark:text-slate-400 mb-4 animate-fade-in border border-transparent dark:border-slate-800">
                        Innovate. Integrate. Impact.
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] animate-fade-in">
                        Building Scalable <br />
                        <span className="text-blue-600 dark:text-blue-500">Digital Excellence</span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-100">
                        We design and develop modern web and mobile solutions that empower businesses worldwide. By combining creativity with technology, we build digital products that are fast, scalable, and crafted to deliver exceptional user experiences.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 animate-fade-in delay-200">
                        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold text-sm uppercase tracking-wider transition-all shadow-lg shadow-blue-500/30">
                            Start a Project
                        </button>
                        <button className="px-8 py-4 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white rounded-md font-semibold text-sm uppercase tracking-wider transition-all border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700">
                            View Portfolio
                        </button>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="py-12 border-t border-slate-100 dark:border-slate-900">
                <div className="max-w-7xl mx-auto px-4 text-center space-y-8">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                        Partners in Innovation
                    </p>
                    <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholders for partner logos */}
                        <div className="h-8 w-24 bg-slate-200 dark:bg-slate-800 rounded animate-pulse"></div>
                        <div className="h-8 w-24 bg-slate-200 dark:bg-slate-800 rounded animate-pulse delay-75"></div>
                        <div className="h-8 w-24 bg-slate-200 dark:bg-slate-800 rounded animate-pulse delay-150"></div>
                        <div className="h-8 w-24 bg-slate-200 dark:bg-slate-800 rounded animate-pulse delay-200"></div>
                        <div className="h-8 w-24 bg-slate-200 dark:bg-slate-800 rounded animate-pulse delay-300"></div>
                    </div>
                </div>
            </section>

            {/* Expertise Section - Redesigned */}
            <ExpertiseSection />

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
