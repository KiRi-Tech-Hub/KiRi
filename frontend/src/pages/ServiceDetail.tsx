
import { useParams, Navigate, Link } from 'react-router-dom';
import { servicesData, type ServiceSlug } from '../data/services';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, Shield, Zap, HeartHandshake, ChevronDown } from 'lucide-react';
import TechStackMarquee from '../components/TechStackMarquee';
import { useState } from 'react';



export default function ServiceDetail() {
    const { slug } = useParams<{ slug: string }>();
    const service = servicesData[slug as ServiceSlug];
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    const ServiceIcon = service.icon;

    return (
        <div className="min-h-screen bg-[#f8f8fb] dark:bg-[#0a0a0b] pt-20">
            {/* ── Hero Section ─────────────────────────────── */}
            <section className="relative bg-[#0d0d12] pt-24 pb-32 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.035]"
                    style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#f8f8fb] dark:from-[#0a0a0b] to-transparent" />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <div className="p-2 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
                            <ServiceIcon size={20} className="text-white/60" />
                        </div>
                        <p className="text-[9px] font-black uppercase tracking-[0.32em] text-white/30 flex items-center gap-3">
                            <span className="w-6 h-[1px] bg-white/25 inline-block" />
                            {service.category}
                        </p>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.08 }}
                        className="font-extrabold text-white leading-[1.06] tracking-tight mb-6"
                        style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
                    >
                        {service.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-white/40 text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
                    >
                        {service.description}
                    </motion.p>

                    <Link to="/contact-us">
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold text-sm hover:bg-white/90 transition-all active:scale-95"
                        >
                            Start Your Project
                            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                        </motion.button>
                    </Link>
                </div>
            </section>

            {/* ── Detailed Description ────────────────────── */}
            <section className="bg-white dark:bg-[#0c0c0e] border-b border-slate-100 dark:border-white/[0.06]">
                <div className="max-w-4xl mx-auto px-6 py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12">
                        <div>
                            <p className="text-[9px] font-black uppercase tracking-[0.28em] text-slate-400 dark:text-white/25 mb-3">
                                01 / Overview
                            </p>
                            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                                The Approach
                            </h2>
                        </div>
                        <div className="prose prose-slate dark:prose-invert max-w-none">
                            <p className="text-lg text-slate-600 dark:text-white/40 leading-relaxed font-normal">
                                {service.detailedDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Features Grid ───────────────────────────── */}
            <section className="bg-[#f8f8fb] dark:bg-[#0a0a0b] py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12">
                        <div>
                            <p className="text-[9px] font-black uppercase tracking-[0.28em] text-slate-400 dark:text-white/25 mb-3">
                                02 / Capabilities
                            </p>
                            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                                What we deliver
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-200 dark:bg-white/[0.06] border border-slate-100 dark:border-white/[0.06] rounded-sm overflow-hidden shadow-2xl shadow-black/5">
                            {service.features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    className="p-8 bg-white dark:bg-[#0c0c0e] hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-white/[0.03] flex items-center justify-center mb-6">
                                        <CheckCircle2 size={14} className="text-slate-400 dark:text-white/25" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">{feature.title}</h3>
                                    <p className="text-slate-500 dark:text-white/35 text-xs leading-relaxed">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Process Timeline ────────────────────────── */}
            <section className="bg-white dark:bg-[#0c0c0e] py-24 border-y border-slate-100 dark:border-white/[0.06]">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12">
                        <div>
                            <p className="text-[9px] font-black uppercase tracking-[0.28em] text-slate-400 dark:text-white/25 mb-3">
                                03 / Process
                            </p>
                            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                                How we build
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {(service.process || []).map((step, i) => (
                                <div key={i} className="relative">
                                    <div className="text-[40px] font-black text-slate-100 dark:text-white/5 mb-2 leading-none">
                                        0{i + 1}
                                    </div>
                                    <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-2">{step.title}</h3>
                                    <p className="text-slate-500 dark:text-white/35 text-[11px] leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Trust Metrics ───────────────────────────── */}
            <section className="bg-[#f8f8fb] dark:bg-[#0a0a0b] py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: Shield, title: 'Secure Architecture', desc: 'Built to modern standards.' },
                            { icon: Zap, title: 'Speed Focused', desc: 'Optimized performance metrics.' },
                            { icon: HeartHandshake, title: 'Full Support', desc: 'Available whenever needed.' },
                        ].map((m, i) => (
                            <div key={i} className="flex items-center gap-4 p-5 bg-white dark:bg-[#0c0c0e] border border-slate-100 dark:border-white/[0.06] rounded-xl shadow-sm">
                                <m.icon size={18} className="text-slate-400 dark:text-white/20" />
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white text-[11px]">{m.title}</h4>
                                    <p className="text-slate-400 dark:text-white/25 text-[10px]">{m.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ ─────────────────────────────────────── */}
            <section className="bg-white dark:bg-[#0c0c0e] py-24 border-y border-slate-100 dark:border-white/[0.06]">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12">
                        <div>
                            <p className="text-[9px] font-black uppercase tracking-[0.28em] text-slate-400 dark:text-white/25 mb-3">
                                04 / Support
                            </p>
                            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                                Common Queries
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {(service.faqs || []).map((faq, i) => (
                                <div key={i} className="border-b border-slate-100 dark:border-white/[0.06] last:border-0 pb-4">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex items-center justify-between py-2 text-left group"
                                    >
                                        <span className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-white/70 transition-colors">
                                            {faq.q}
                                        </span>
                                        <ChevronDown size={14} className={`text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="py-2 text-slate-500 dark:text-white/35 text-xs leading-relaxed">
                                                    {faq.a}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Tech Stack ──────────────────────────────── */}
            <section className="bg-[#f8f8fb] dark:bg-[#0a0a0b] py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-[9px] font-black uppercase tracking-[0.28em] text-slate-400 dark:text-white/25 mb-4">
                            05 / Technology
                        </p>
                        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                            Tools of the trade
                        </h2>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f8fb] dark:from-[#0a0a0b] via-transparent to-[#f8f8fb] dark:to-[#0a0a0b] z-10 pointer-events-none" />
                        <TechStackMarquee technologies={service.technologies || []} />
                    </div>
                </div>
            </section>

            {/* ── Final CTA ────────────────────────────────── */}
            <section className="bg-[#0d0d12] px-6 py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02]"
                    style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

                <div className="max-w-4xl mx-auto relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 py-12">
                    <div>
                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/25 mb-4 flex items-center gap-3">
                            <span className="w-6 h-[1px] bg-white/20 inline-block" />
                            Ready to transform?
                        </p>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-snug">
                            Let's build something<br />extraordinary together.
                        </h2>
                    </div>
                    <Link
                        to="/contact-us"
                        className="group inline-flex items-center gap-2 px-10 py-5 rounded-full bg-white text-black font-bold text-sm hover:bg-white/90 transition-all hover:scale-105"
                    >
                        Get in Touch
                        <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
