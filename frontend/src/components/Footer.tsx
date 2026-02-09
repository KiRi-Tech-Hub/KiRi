
import React from 'react';
import { ArrowRight, Globe, Linkedin, Twitter, Download } from 'lucide-react';

export default function Footer() {
    return (
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
    );
}
