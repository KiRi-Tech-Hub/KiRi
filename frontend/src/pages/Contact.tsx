import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, Clock, MessageSquare, Building2 } from 'lucide-react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const contactInfo = [
    {
        icon: Mail,
        label: 'Email',
        value: 'kiri.tech.hub@gmail.com',
        href: 'mailto:kiri.tech.hub@gmail.com',
        color: '#6366f1',
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '+91 85117 05401',
        href: 'tel:+918511705401',
        color: '#22c55e',
    },
    {
        icon: MapPin,
        label: 'Office',
        value: 'Koramangala, Bengaluru, India',
        href: '#',
        color: '#f59e0b',
    },
    {
        icon: Clock,
        label: 'Hours',
        value: 'Mon – Fri, 9 AM – 7 PM IST',
        href: '#',
        color: '#ec4899',
    },
];

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;
        setStatus('sending');
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setStatus('success');
        } catch {
            setStatus('error');
        }
    };

    const inputClass = (name: string) =>
        `w-full bg-white/[0.04] border rounded-xl px-5 py-4 text-white placeholder-white/20 text-sm outline-none transition-all duration-200 ${focusedField === name
            ? 'border-violet-500/60 bg-white/[0.07]'
            : 'border-white/[0.1] hover:border-white/20'
        }`;

    return (
        <div className="min-h-screen bg-[#0d0d12] pt-20">
            {/* ── Hero ─────────────────────────────── */}
            <section className="relative pt-20 pb-16 px-6 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[140px] opacity-[0.08] bg-violet-500 pointer-events-none" />
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55 }}
                    >
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-violet-400 mb-4 flex items-center gap-2">
                            <MessageSquare size={12} />
                            Get in touch
                        </p>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.02] mb-6">
                            Let's Build Something{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-blue-400">
                                Great
                            </span>
                        </h1>
                        <p className="text-white/40 text-lg max-w-lg leading-relaxed">
                            Have a project in mind? Tell us about it. We typically respond within a few hours.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── Main grid ────────────────────────── */}
            <section className="max-w-5xl mx-auto px-6 pb-32 grid grid-cols-1 lg:grid-cols-5 gap-12">
                {/* Left: info cards */}
                <div className="lg:col-span-2 flex flex-col gap-4">
                    {contactInfo.map((info, i) => (
                        <motion.a
                            key={i}
                            href={info.href}
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.45, delay: 0.1 + i * 0.07 }}
                            className="group flex items-center gap-4 p-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-200"
                        >
                            <div
                                className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center"
                                style={{ background: `${info.color}20` }}
                            >
                                <info.icon size={18} style={{ color: info.color }} />
                            </div>
                            <div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-0.5">{info.label}</div>
                                <div className="text-white/80 text-sm font-medium">{info.value}</div>
                            </div>
                        </motion.a>
                    ))}

                    {/* Office blurb */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="mt-4 p-5 rounded-2xl border border-white/[0.08] bg-white/[0.02]"
                    >
                        <div className="flex items-center gap-2 text-white/30 text-[10px] uppercase tracking-widest font-bold mb-3">
                            <Building2 size={11} /> Registered Office
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed">
                            KiRi Tech Hub Pvt. Ltd.<br />
                            No. 12, 5th Cross, Koramangala<br />
                            Bengaluru – 560 034<br />
                            Karnataka, India
                        </p>
                    </motion.div>
                </div>

                {/* Right: form */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.15 }}
                    className="lg:col-span-3"
                >
                    <div className="p-8 rounded-3xl border border-white/[0.08] bg-white/[0.03]">
                        <h2 className="text-xl font-bold text-white mb-8">Send us a message</h2>

                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center gap-4 py-16 text-center"
                                >
                                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-3xl">✓</div>
                                    <h3 className="text-white font-bold text-xl">Message sent!</h3>
                                    <p className="text-white/40 text-sm">We'll get back to you within 24 hours.</p>
                                    <button onClick={() => setStatus('idle')} className="text-violet-400 text-sm underline underline-offset-4 hover:text-violet-300 transition-colors">
                                        Send another
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    ref={form}
                                    onSubmit={handleSubmit}
                                    className="space-y-4"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2 block">Name</label>
                                            <input
                                                name="user_name"
                                                placeholder="John Smith"
                                                required
                                                className={inputClass('name')}
                                                onFocus={() => setFocusedField('name')}
                                                onBlur={() => setFocusedField(null)}
                                            />
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2 block">Email</label>
                                            <input
                                                name="user_email"
                                                type="email"
                                                placeholder="john@company.com"
                                                required
                                                className={inputClass('email')}
                                                onFocus={() => setFocusedField('email')}
                                                onBlur={() => setFocusedField(null)}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2 block">Company</label>
                                        <input
                                            name="company"
                                            placeholder="Your company (optional)"
                                            className={inputClass('company')}
                                            onFocus={() => setFocusedField('company')}
                                            onBlur={() => setFocusedField(null)}
                                        />
                                    </div>

                                    <div>
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2 block">Subject</label>
                                        <input
                                            name="subject"
                                            placeholder="What's this about?"
                                            required
                                            className={inputClass('subject')}
                                            onFocus={() => setFocusedField('subject')}
                                            onBlur={() => setFocusedField(null)}
                                        />
                                    </div>

                                    <div>
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2 block">Message</label>
                                        <textarea
                                            name="message"
                                            rows={5}
                                            placeholder="Tell us about your project, timeline, and budget..."
                                            required
                                            className={`${inputClass('message')} resize-none`}
                                            onFocus={() => setFocusedField('message')}
                                            onBlur={() => setFocusedField(null)}
                                        />
                                    </div>

                                    {status === 'error' && (
                                        <p className="text-red-400 text-xs">Something went wrong. Please try emailing us directly.</p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="group w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-colors duration-200 disabled:opacity-60"
                                    >
                                        {status === 'sending' ? 'Sending…' : 'Send Message'}
                                        {status !== 'sending' && (
                                            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                                        )}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
