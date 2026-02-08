import { Phone, Mail, ArrowRight } from 'lucide-react';

export default function ContactFormSection() {
    return (
        <section className="relative w-full overflow-hidden bg-white dark:bg-slate-950 py-24" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 rounded-3xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800">

                    {/* Left Side - Dark Premium Content Area */}
                    <div className="lg:w-5/12 bg-slate-900 text-white p-10 lg:p-16 relative overflow-hidden flex flex-col justify-between">
                        {/* Abstract Background Shapes */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                        <div className="relative z-10">
                            <p className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-6 inline-flex items-center gap-2">
                                <span className="w-8 h-[1px] bg-orange-500"></span>
                                Let's Build Something Great
                            </p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-8 text-white">
                                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Scale</span> Your Business?
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-12">
                                Your vision deserves world-class execution. Whether you need a product built from scratch or a team to scale your existing platform, we're here to make it happen.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                                        <Mail className="w-5 h-5 text-slate-300 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Email Us</p>
                                        <p className="text-white font-medium">kiri.tech.hub@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                                        <Phone className="w-5 h-5 text-slate-300 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Call Us</p>
                                        <p className="text-white font-medium">+91 85117 05401</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Location Pills */}
                        <div className="mt-16 pt-8 border-t border-slate-800">
                            <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                <span className="hover:text-white transition-colors cursor-default">Bangalore</span>
                                <span>•</span>
                                <span className="hover:text-white transition-colors cursor-default">Hyderabad</span>
                                <span>•</span>
                                <span className="hover:text-white transition-colors cursor-default">Ahmedabad</span>
                                <span>•</span>
                                <span className="hover:text-white transition-colors cursor-default">Pune</span>
                                <span>•</span>
                                <span className="hover:text-white transition-colors cursor-default">Mumbai</span>
                                <span>•</span>
                                <span className="hover:text-white transition-colors cursor-default">Kolkata</span>
                                <span>•</span>
                                <span className="hover:text-white transition-colors cursor-default">Delhi</span>
                                <span>•</span>
                                <span className="hover:text-white transition-colors cursor-default">Gurugram</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Clean Spacious Form */}
                    <div className="lg:w-7/12 bg-slate-50 dark:bg-slate-900/50 p-10 lg:p-16 flex flex-col justify-center">
                        <div className="max-w-lg mx-auto w-full">
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                                Send us a Message
                            </h3>
                            <p className="text-slate-500 mb-10">We usually respond within 24 hours.</p>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            required
                                            placeholder=" "
                                            className="peer w-full px-5 py-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
                                        />
                                        <label className="absolute left-5 top-4 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-orange-500 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs bg-white dark:bg-slate-950 px-1 pointer-events-none">
                                            Full Name
                                        </label>
                                    </div>

                                    <div className="relative group">
                                        <input
                                            type="email"
                                            required
                                            placeholder=" "
                                            className="peer w-full px-5 py-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
                                        />
                                        <label className="absolute left-5 top-4 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-orange-500 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs bg-white dark:bg-slate-950 px-1 pointer-events-none">
                                            Email Address
                                        </label>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative group">
                                        <input
                                            type="tel"
                                            placeholder=" "
                                            className="peer w-full px-5 py-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
                                        />
                                        <label className="absolute left-5 top-4 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-orange-500 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs bg-white dark:bg-slate-950 px-1 pointer-events-none">
                                            Phone (Optional)
                                        </label>
                                    </div>

                                    <div className="relative group">
                                        <select
                                            required
                                            className="peer w-full px-5 py-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium appearance-none cursor-pointer"
                                            defaultValue=""
                                        >
                                            <option value="" disabled></option>
                                            <option value="web">Web Development</option>
                                            <option value="app">Mobile App</option>
                                            <option value="uiux">UI/UX Design</option>
                                            <option value="consulting">Consulting</option>
                                        </select>
                                        <label className="absolute left-5 top-4 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-orange-500 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs bg-white dark:bg-slate-950 px-1 pointer-events-none">
                                            Service Interested In
                                        </label>
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative group">
                                    <textarea
                                        required
                                        placeholder=" "
                                        rows={4}
                                        className="peer w-full px-5 py-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium resize-none"
                                    ></textarea>
                                    <label className="absolute left-5 top-4 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-orange-500 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs bg-white dark:bg-slate-950 px-1 pointer-events-none">
                                        Tell us about your project
                                    </label>
                                </div>

                                <button
                                    type="button"
                                    className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 active:scale-[0.98] transform flex items-center justify-center gap-2 group"
                                >
                                    Get Your Free Quote
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
