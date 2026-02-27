import { useParams, Navigate, Link } from 'react-router-dom';
import { solutionsData, type SolutionSlug } from '../data/solutions';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, ArrowRight, Shield, Zap, HeartHandshake, ChevronDown, TrendingUp, Award } from 'lucide-react';
import { useState, useRef } from 'react';
import { ThreeDCard, CardItem } from '../components/ui/ThreeDCard';

export default function SolutionDetail() {
    const { slug } = useParams<{ slug: string }>();
    const solution = solutionsData[slug as SolutionSlug];
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    if (!solution) {
        return <Navigate to="/solutions" replace />;
    }

    const SolutionIcon = solution.icon;

    return (
        <div ref={containerRef} className="min-h-screen bg-[#f8f8fb] dark:bg-[#0a0a0b] pt-20 overflow-x-hidden">
            {/* ── Hero Section with Parallax ───────────────── */}
            <section className="relative h-[90vh] flex items-center bg-[#0d0d12] px-6 overflow-hidden">
                <motion.div
                    style={{ y: backgroundY }}
                    className="absolute inset-0 opacity-[0.05]"
                >
                    <div className="h-full w-full"
                        style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                            backgroundSize: '40px 40px'
                        }}
                    />
                </motion.div>

                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#f8f8fb] dark:from-[#0a0a0b] to-transparent" />

                <motion.div
                    style={{ opacity: opacityHero }}
                    className="relative z-10 max-w-5xl mx-auto w-full"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <div className={`p-3 bg-gradient-to-br ${solution.color} rounded-2xl border border-white/20 shadow-2xl shadow-blue-500/20`}>
                            <SolutionIcon size={24} className="text-white" />
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-blue-500/30 inline-block" />
                            {solution.category}
                        </p>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-black text-white leading-[0.95] tracking-tight mb-8"
                        style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}
                    >
                        {solution.title.split(' ').map((word, i) => (
                            <span key={i} className="inline-block mr-[0.2em]">
                                {word}
                            </span>
                        ))}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-white/50 text-xl md:text-2xl leading-relaxed max-w-3xl mb-12 font-light"
                    >
                        {solution.description}
                    </motion.p>

                    <Link to="/contact-us">
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-10 py-5 rounded-full bg-white text-black font-black text-xs uppercase tracking-widest overflow-hidden shadow-2xl shadow-white/10"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                Start Your Project
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </motion.button>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-[9px] uppercase tracking-widest text-white/20">Scroll to Explore</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"
                    />
                </motion.div>
            </section>

            {/* ── Impact Metrics Section ───────────────────── */}
            <section className="relative z-20 -mt-16 mb-24 max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {solution.impactMetrics.map((metric, i) => (
                        <ThreeDCard key={i} className="h-full">
                            <div className="h-full p-8 rounded-3xl bg-white dark:bg-[#121217] border border-slate-100 dark:border-white/[0.05] shadow-xl shadow-black/5 flex flex-col justify-between">
                                <CardItem translateZ={20} className="mb-6">
                                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${solution.color} opacity-10 flex items-center justify-center`}>
                                        <TrendingUp className="text-blue-500" size={20} />
                                    </div>
                                </CardItem>
                                <CardItem translateZ={40}>
                                    <div className="flex items-baseline gap-1 mb-2">
                                        <span className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-none">
                                            {metric.value}
                                        </span>
                                        <span className="text-xl font-bold text-blue-600 leading-none">{metric.suffix}</span>
                                    </div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-white/20">
                                        {metric.label}
                                    </p>
                                </CardItem>
                            </div>
                        </ThreeDCard>
                    ))}
                </div>
            </section>

            {/* ── Detailed Description ────────────────────── */}
            <section className="bg-white dark:bg-[#0c0c0e] py-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-sm font-black uppercase tracking-[0.4em] text-blue-600">
                            01 / Strategic Vision
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                            Redefining Efficiency. <br />
                            <span className="text-slate-400">Expanding Possibilities.</span>
                        </h3>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="prose prose-slate dark:prose-invert max-w-none"
                    >
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-white/40 leading-relaxed font-light">
                            {solution.detailedDescription}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── 3D Features Grid ────────────────────────── */}
            <section className="bg-[#f8f8fb] dark:bg-[#0a0a0b] py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                        <div className="space-y-4">
                            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-blue-600">
                                02 / Capabilities
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                                Integrated Core <br /> Features
                            </h3>
                        </div>
                        <p className="text-slate-500 dark:text-white/30 text-lg max-w-sm">
                            Tailored engineering that addresses the unique complexities of your specific industry.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {solution.features.map((feature, i) => (
                            <ThreeDCard key={i} className="w-full">
                                <div className="h-full p-10 rounded-3xl bg-white dark:bg-[#0c0c0e] border border-slate-100 dark:border-white/[0.05] hover:shadow-2xl transition-all group overflow-hidden relative">
                                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                                        <SolutionIcon size={120} />
                                    </div>
                                    <CardItem translateZ={30} className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/[0.03] flex items-center justify-center mb-10 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                        <CheckCircle2 size={18} />
                                    </CardItem>
                                    <CardItem translateZ={50}>
                                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">{feature.title}</h3>
                                        <p className="text-slate-500 dark:text-white/40 leading-relaxed text-lg font-light">{feature.description}</p>
                                    </CardItem>
                                </div>
                            </ThreeDCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Strategic Impact (Use Case) ──────────────── */}
            <section className="bg-slate-900 py-32 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-sm font-black uppercase tracking-[0.4em] text-blue-500 mb-8">
                            03 / Strategic Impact
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
                            Case Implementation: <br />
                            <span className="text-blue-500">{solution.useCase.title}</span>
                        </h3>
                        <p className="text-white/40 text-xl leading-relaxed font-light mb-12">
                            {solution.useCase.desc}
                        </p>
                        <div className="flex gap-12">
                            <div>
                                <p className="text-4xl font-black text-white mb-1">98%</p>
                                <p className="text-[10px] uppercase tracking-widest text-white/20 font-bold">Project Success</p>
                            </div>
                            <div>
                                <p className="text-4xl font-black text-white mb-1">2.4x</p>
                                <p className="text-[10px] uppercase tracking-widest text-white/20 font-bold">ROI Multiplier</p>
                            </div>
                        </div>
                    </motion.div>

                    <ThreeDCard className="w-full h-[400px]">
                        <div className="w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700 p-1 relative group">
                            <div className="w-full h-full rounded-[20px] bg-slate-950 flex items-center justify-center p-12 overflow-hidden relative">
                                <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-colors" />
                                <CardItem translateZ={100} className="relative z-10 flex flex-col items-center text-center gap-6">
                                    <Award size={80} className="text-blue-500" />
                                    <h4 className="text-2xl font-black text-white">Award Winning Architecture</h4>
                                    <p className="text-white/30 text-sm max-w-xs font-light">Custom engineered for high-availability enterprise environments.</p>
                                </CardItem>
                            </div>
                        </div>
                    </ThreeDCard>
                </div>
            </section>

            {/* ── Implementation Timeline ─────────────────── */}
            <section className="bg-white dark:bg-[#0c0c0e] py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24 max-w-2xl mx-auto space-y-4">
                        <h2 className="text-sm font-black uppercase tracking-[0.4em] text-blue-600">
                            04 / Roadmap
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                            Implementation Path
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
                        {solution.process.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative"
                            >
                                <div className="text-7xl font-black text-slate-100 dark:text-white/[0.03] absolute -top-12 -left-4 pointer-events-none">
                                    0{i + 1}
                                </div>
                                <div className="relative z-10 space-y-4">
                                    <h4 className="text-xl font-black text-slate-900 dark:text-white">{step.title}</h4>
                                    <p className="text-slate-500 dark:text-white/35 text-base leading-relaxed font-light">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Trust Indicators ────────────────────────── */}
            <section className="bg-[#f8f8fb] dark:bg-[#0a0a0b] py-24 px-6 border-y border-slate-100 dark:border-white/[0.05]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Shield, title: 'Zero Trust Security', desc: 'Enterprise-grade encryption and protocol management.' },
                            { icon: Zap, title: 'Ultra Latency Control', desc: 'Real-time synchronization for high-performance apps.' },
                            { icon: HeartHandshake, title: 'Continuous Support', desc: 'Dedicated engineering team available 24/7 post-launch.' },
                        ].map((m, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="flex flex-col gap-6 p-8 bg-white dark:bg-[#0c0c0e] border border-slate-100 dark:border-white/[0.05] rounded-3xl shadow-sm hover:shadow-xl transition-all"
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.color} opacity-10 flex items-center justify-center`}>
                                    <m.icon size={24} className="text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-black text-slate-900 dark:text-white text-lg mb-2">{m.title}</h4>
                                    <p className="text-slate-500 dark:text-white/30 text-sm leading-relaxed font-light">{m.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Support & FAQ ───────────────────────────── */}
            <section className="bg-white dark:bg-[#0c0c0e] py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-sm font-black uppercase tracking-[0.4em] text-blue-600">
                            05 / Assistance
                        </h2>
                        <h3 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                            Common Questions
                        </h3>
                    </div>
                    <div className="space-y-6">
                        {solution.faqs.map((faq, i) => (
                            <div key={i} className="p-6 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-transparent hover:border-slate-100 dark:hover:border-white/10 transition-all">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between text-left group"
                                >
                                    <span className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-blue-600 dark:group-hover:text-white transition-colors">
                                        {faq.q}
                                    </span>
                                    <div className={`w-8 h-8 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center transition-all ${openFaq === i ? 'bg-blue-600 border-blue-600 rotate-180' : ''}`}>
                                        <ChevronDown size={14} className={openFaq === i ? 'text-white' : 'text-slate-400'} />
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pt-6 text-slate-500 dark:text-white/40 text-lg leading-relaxed font-light">
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Final Immersive CTA ──────────────────────── */}
            <section className="bg-white dark:bg-[#0a0a0b] px-6 py-40 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

                <div className="max-w-5xl mx-auto relative z-10 text-center space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-sm font-black uppercase tracking-[0.5em] text-blue-600 mb-8 flex flex-col items-center gap-4">
                            <span className="w-[1px] h-12 bg-blue-600/30" />
                            Ready for the future?
                        </h2>
                        <h3 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.9] mb-12">
                            Transform your vision <br /> into <span className="text-blue-600">reality.</span>
                        </h3>
                        <Link
                            to="/contact-us"
                            className="group relative inline-flex items-center gap-4 px-12 py-6 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-2xl"
                        >
                            Connect with Experts
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
