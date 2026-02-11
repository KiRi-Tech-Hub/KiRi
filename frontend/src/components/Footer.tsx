
import React from 'react';
import { Globe, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    <div className="space-y-4">
                        <a href="https://mykiri.in" className="flex items-center gap-2 font-bold text-xl text-slate-900 cursor-pointer">
                            <img src="/logo.png" alt="KiRi" className="h-10 w-auto" />
                        </a>
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
                            <li><a href="/our-philosophy" className="hover:text-blue-600 transition-colors">Our Philosophy</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Portfolio</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
                        </ul>
                    </div>


                </div>

                <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 uppercase tracking-wider">
                    <p>© 2024 KIRISTUDIO. PRECISION ENGINEERED.</p>
                    <div className="flex gap-6">
                        <a href="https://mykiri.in" target="_blank" rel="noopener noreferrer">
                            <Globe size={16} className="hover:text-slate-600 cursor-pointer transition-colors" />
                        </a>
                        <a href="https://www.linkedin.com/company/kiri/" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={16} className="hover:text-slate-600 cursor-pointer transition-colors" />
                        </a>
                        <a href="https://x.com/KiRi_TechHub" target="_blank" rel="noopener noreferrer">
                            <Twitter size={16} className="hover:text-slate-600 cursor-pointer transition-colors" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
