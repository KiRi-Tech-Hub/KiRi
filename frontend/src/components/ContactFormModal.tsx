import { X, ArrowRight, Loader2, Mail, Phone } from 'lucide-react';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

interface ContactFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        setIsSubmitting(true);
        setStatus('idle');

        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                form.current?.reset();
                setTimeout(() => {
                    onClose();
                    setStatus('idle');
                }, 2000);
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                    <X className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                </button>

                <div className="flex flex-col lg:flex-row">
                    {/* Left Side - Dark Premium Content */}
                    <div className="lg:w-5/12 bg-slate-900 text-white p-8 lg:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative z-10">
                            <p className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-4 inline-flex items-center gap-2">
                                <span className="w-8 h-[1px] bg-orange-500"></span>
                                Let's Build Something Great
                            </p>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold leading-tight mb-6 text-white">
                                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Scale</span> Your Business?
                            </h2>
                            <p className="text-slate-400 text-base leading-relaxed mb-8">
                                Your vision deserves world-class execution. Whether you need a product built from scratch or a team to scale your existing platform, we're here to make it happen.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 group cursor-pointer">
                                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                                        <Mail className="w-4 h-4 text-slate-300 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Email Us</p>
                                        <p className="text-white text-sm font-medium">kiri.tech.hub@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 group cursor-pointer">
                                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                                        <Phone className="w-4 h-4 text-slate-300 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Call Us</p>
                                        <p className="text-white text-sm font-medium">+91 85117 05401</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="lg:w-7/12 p-8 lg:p-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                            Send us a Message
                        </h3>
                        <p className="text-slate-500 mb-8">We usually respond within 24 hours.</p>

                        <form ref={form} onSubmit={sendEmail} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="relative group">
                                    <input
                                        type="text"
                                        name="user_name"
                                        required
                                        placeholder=" "
                                        className="peer w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
                                    />
                                    <label className="absolute left-4 top-3 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-orange-500 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs bg-white dark:bg-slate-900 px-1 pointer-events-none">
                                        Full Name
                                    </label>
                                </div>

                                <div className="relative group">
                                    <input
                                        type="email"
                                        name="user_email"
                                        required
                                        placeholder=" "
                                        className="peer w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
                                    />
                                    <label className="absolute left-4 top-3 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-orange-500 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs bg-white dark:bg-slate-900 px-1 pointer-events-none">
                                        Email Address
                                    </label>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="relative group">
                                    <input
                                        type="tel"
                                        name="user_phone"
                                        placeholder=" "
                                        className="peer w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
                                    />
                                    <label className="absolute left-4 top-3 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-orange-500 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs bg-white dark:bg-slate-900 px-1 pointer-events-none">
                                        Phone (Optional)
                                    </label>
                                </div>

                                <div className="relative group">
                                    <select
                                        name="service_interest"
                                        required
                                        className="peer w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium appearance-none cursor-pointer"
                                        defaultValue=""
                                    >
                                        <option value="" disabled></option>
                                        <option value="web">Web Development</option>
                                        <option value="app">Mobile App</option>
                                        <option value="uiux">UI/UX Design</option>
                                        <option value="consulting">Consulting</option>
                                    </select>
                                    <label className="absolute left-4 top-3 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-orange-500 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs bg-white dark:bg-slate-900 px-1 pointer-events-none">
                                        Service Interested In
                                    </label>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="relative group">
                                <textarea
                                    name="message"
                                    required
                                    placeholder=" "
                                    rows={4}
                                    className="peer w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium resize-none"
                                ></textarea>
                                <label className="absolute left-4 top-3 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-orange-500 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs bg-white dark:bg-slate-900 px-1 pointer-events-none">
                                    Tell us about your project
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold text-base py-3 rounded-xl transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 active:scale-[0.98] transform flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <p className="text-center text-green-500 font-semibold animate-in fade-in slide-in-from-bottom-2">
                                    Success! We've received your message and will be in touch shortly.
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="text-center text-red-500 font-semibold animate-in fade-in slide-in-from-bottom-2">
                                    Something went wrong. Please try again or email us directly.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
