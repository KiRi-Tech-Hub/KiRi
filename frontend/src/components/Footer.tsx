import { Globe, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
                    <div className="space-y-4 flex flex-col items-center md:items-start">
                        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-slate-900 dark:text-white cursor-pointer">
                            <img src="/logo.png" alt="KiRi" className="h-10 w-auto" />
                        </Link>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
                            High-end technical consultancy and development. Since 2023, we've been crafting digital products that define industries.
                        </p>

                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase text-xs tracking-wider">Expertise</h4>
                        <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                            <li><Link to="/portfolio" onClick={() => window.scrollTo(0, 0)} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Web Engineering</Link></li>
                            <li><Link to="/portfolio" onClick={() => window.scrollTo(0, 0)} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Android Platforms</Link></li>
                            <li><Link to="/portfolio" onClick={() => window.scrollTo(0, 0)} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Cloud Infrastructure</Link></li>
                            <li><Link to="/portfolio" onClick={() => window.scrollTo(0, 0)} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Product Strategy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase text-xs tracking-wider">Company</h4>
                        <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                            <li><Link to="/our-philosophy" onClick={() => window.scrollTo(0, 0)} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Our Philosophy</Link></li>
                            <li><Link to="/about" onClick={() => window.scrollTo(0, 0)} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Us</Link></li>
                            <li><Link to="/portfolio" onClick={() => window.scrollTo(0, 0)} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Portfolio</Link></li>
                            <li><Link to="/careers" onClick={() => window.scrollTo(0, 0)} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Careers</Link></li>
                            <li><Link to="/contact-us" onClick={() => window.scrollTo(0, 0)} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest text-center">
                    <p>© 2026 KiRi. PRECISION ENGINEERED.</p>
                    <div className="flex gap-8">
                        <a href="https://mykiri.in" target="_blank" rel="noopener noreferrer" aria-label="Website">
                            <Globe size={18} className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors" />
                        </a>
                        <a href="https://www.linkedin.com/company/kiri-techhub/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin size={18} className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors" />
                        </a>
                        <a href="https://x.com/KiRi_TechHub" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <Twitter size={18} className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
