import { useParams, Navigate, Link } from 'react-router-dom';
import { solutionsData, type SolutionSlug } from '../data/solutions';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { CheckCircle2, ArrowRight, Shield, Zap, HeartHandshake, ChevronDown, TrendingUp, Award, Layers, Target, Rocket, Activity, Box } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { ThreeDCard, CardItem } from '../components/ui/ThreeDCard';

export default function SolutionDetail() {
    const { slug } = useParams<{ slug: string }>();
    const solution = solutionsData[slug as SolutionSlug];
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeSection, setActiveSection] = useState('vision');

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    // Character animation variants
    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.05,
            },
        },
    };

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['vision', 'capabilities', 'impact', 'roadmap', 'faq'];
            const scrollPos = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
                    setActiveSection(section);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!solution) {
        return <Navigate to="/solutions" replace />;
    }

    const SolutionIcon = solution.icon;

    return (
        <div ref={containerRef} className="min-h-screen bg-[#f8f8fb] dark:bg-[#0a0a0b] pt-20 overflow-x-hidden selection:bg-blue-500/30">
            {/* ── Scroll Progress Bar ──────────────────────── */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 z-[100] origin-left"
                style={{ scaleX }}
            />

            {/* ── Glassmorphic Sidebar ────────────────────── */}
            <aside className="fixed right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 z-50">
                {[
                    { id: 'vision', label: 'Vision', icon: Target },
                    { id: 'capabilities', label: 'Core', icon: Layers },
                    { id: 'impact', label: 'Impact', icon: Activity },
                    { id: 'roadmap', label: 'Roadmap', icon: Rocket },
                    { id: 'faq', label: 'Help', icon: HeartHandshake },
                ].map((item) => (
                    <button
                        key={item.id}
                        onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                        className="group relative flex items-center justify-end"
                    >
                        <span className={`absolute right-16 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-[10px] group-hover:translate-x-0 pointer-events-none border border-white/10 whitespace-nowrap`}>
                            {item.label}
                        </span>
                        <div className={`p-3 rounded-xl border backdrop-blur-md transition-all duration-500 ${activeSection === item.id
                            ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20 scale-110'
                            : 'bg-slate-100/50 dark:bg-white/5 border-slate-200/50 dark:border-white/10 text-slate-400 dark:text-white/30 hover:bg-slate-200/50 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white/60 shadow-sm dark:shadow-none'
                            }`}>
                            <item.icon size={18} />
                        </div>
                    </button>
                ))}
            </aside>

            <section id="vision" className="relative h-[95vh] flex items-center bg-[#0d0d12] px-6 overflow-hidden">
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

                <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

                <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#f8f8fb] dark:from-[#0a0a0b] to-transparent" />

                <motion.div
                    style={{ opacity: opacityHero }}
                    className="relative z-10 max-w-6xl mx-auto w-full"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-4 mb-10"
                    >
                        <div className={`p-4 bg-gradient-to-br ${solution.color} rounded-2xl border border-white/20 shadow-2xl shadow-blue-500/20`}>
                            <SolutionIcon size={28} className="text-white" />
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-500 flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-blue-500/30 inline-block" />
                                {solution.category}
                            </p>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[9px] font-bold text-emerald-500/80 uppercase tracking-widest">Architecture Active</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.h1
                        variants={sentence}
                        initial="hidden"
                        animate="visible"
                        className="font-black text-white leading-[0.9] tracking-tighter mb-10 overflow-hidden"
                        style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}
                    >
                        {solution.title.split(' ').map((word, i) => (
                            <span key={i} className="inline-block mr-[0.3em] overflow-hidden whitespace-nowrap">
                                {word.split('').map((char, j) => (
                                    <motion.span key={j} variants={letter} className="inline-block">
                                        {char}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="text-white/50 text-xl md:text-3xl leading-snug max-w-4xl mb-14 font-light tracking-tight"
                    >
                        {solution.description}
                    </motion.p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                        <Link to="/contact-us">
                            <motion.button
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.5, duration: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative px-12 py-6 rounded-full bg-white text-black font-black text-[10px] uppercase tracking-[0.3em] overflow-hidden shadow-2xl shadow-white/10"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Initiate Prototype
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
                >
                    <span className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-black">Decrypt Roadmap</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-[1px] h-16 bg-gradient-to-b from-blue-500 to-transparent"
                    />
                </motion.div>
            </section>

            {/* ── Impact Metrics Section ───────────────────── */}
            <section className="relative z-20 mt-24 mb-32 max-w-7xl mx-auto px-6">
                <div className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)',
                        backgroundSize: '32px 32px'
                    }}
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {solution.impactMetrics.map((metric, i) => (
                        <ThreeDCard key={i} className="h-full">
                            <div className="h-full p-10 rounded-3xl bg-white dark:bg-[#121217] border border-slate-100 dark:border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-none flex flex-col justify-between group overflow-hidden relative min-h-[320px]">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/5 rounded-full blur-2xl group-hover:bg-blue-600/10 transition-colors" />

                                <CardItem translateZ={20} className="mb-8 relative flex justify-between items-start w-full">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.color} opacity-10 flex items-center justify-center`}>
                                        <TrendingUp className="text-blue-500" size={24} />
                                    </div>
                                    <div className="flex flex-col items-end gap-1">
                                        <span className="px-2 py-0.5 rounded-full bg-blue-600 text-[8px] font-black text-white uppercase tracking-tighter">Projected</span>
                                        <span className="text-[8px] font-black text-slate-400 dark:text-white/20 uppercase tracking-widest italic">Live Audit v2.4</span>
                                    </div>
                                </CardItem>

                                <CardItem translateZ={40} className="flex-1">
                                    <div className="flex items-baseline gap-1 mb-2">
                                        <span className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white leading-none tracking-tighter">
                                            {metric.value}
                                        </span>
                                        <span className="text-2xl font-bold text-blue-600 leading-none">{metric.suffix}</span>
                                    </div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-white/20 mb-8">
                                        {metric.label}
                                    </p>

                                    {/* Mock Data Visualization Trendline to make it look 'full' */}
                                    <div className="flex items-end gap-1 h-12 w-full mt-auto opacity-40 group-hover:opacity-100 transition-opacity">
                                        {[40, 70, 45, 90, 65, 80, 50, 95, 75, 100].map((height, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${height * 0.4}px` }}
                                                className={`flex-1 rounded-t-sm bg-gradient-to-t ${idx % 2 === 0 ? 'from-blue-600/20 to-blue-600' : 'from-purple-600/20 to-purple-600'}`}
                                            />
                                        ))}
                                    </div>
                                </CardItem>
                            </div>
                        </ThreeDCard>
                    ))}
                </div>
            </section>

            {/* ── Strategic Blueprints (Horizontal Marquee) ── */}
            <div className="py-20 border-y border-slate-100 dark:border-white/[0.05] overflow-hidden bg-white/30 dark:bg-white/[0.02]">
                <div className="flex whitespace-nowrap animate-marquee">
                    {[...solution.technologies, ...solution.technologies].map((tech, i) => (
                        <div key={i} className="mx-12 flex items-center gap-6">
                            <Box className="text-blue-500/40" size={20} />
                            <span className="text-5xl md:text-7xl font-black text-slate-300 dark:text-white/[0.05] uppercase tracking-tighter outline-text">
                                {tech}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Visionary Overview ──────────────────────── */}
            <section className="bg-white dark:bg-[#0c0c0e] py-40 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-600">
                            <Shield size={14} />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Protocol 01 / Vision</span>
                        </div>
                        <h3 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.9]">
                            Architecting <br />
                            <span className="text-slate-400 dark:text-white/10">The Tomorrow.</span>
                        </h3>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="prose prose-slate dark:prose-invert max-w-none"
                    >
                        <p className="text-2xl md:text-3xl text-slate-500 dark:text-white/50 leading-snug font-light tracking-tight">
                            {solution.detailedDescription}
                        </p>
                        <div className="mt-16 grid grid-cols-2 gap-12">
                            <div>
                                <h4 className="text-slate-900 dark:text-white font-black uppercase tracking-widest text-xs mb-4">Market Readiness</h4>
                                <div className="h-[2px] w-full bg-slate-100 dark:bg-white/5">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '92%' }}
                                        viewport={{ once: true }}
                                        className="h-full bg-blue-600"
                                    />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-slate-900 dark:text-white font-black uppercase tracking-widest text-xs mb-4">Build Velocity</h4>
                                <div className="h-[2px] w-full bg-slate-100 dark:bg-white/5">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '85%' }}
                                        viewport={{ once: true }}
                                        className="h-full bg-purple-600"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Capabilities Grid ───────────────────────── */}
            <section id="capabilities" className="bg-[#f8f8fb] dark:bg-[#0a0a0b] py-40 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32">
                        <div className="space-y-6">
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-600 block">02 / Core Architecture</span>
                            <h3 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.85]">
                                Modular <br /> Infrastructure
                            </h3>
                        </div>
                        <p className="text-slate-500 dark:text-white/30 text-xl font-light tracking-tight max-w-md leading-relaxed">
                            Every component is designed for infinite vertical scaling and cross-platform compatibility.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {solution.features.map((feature, i) => (
                            <ThreeDCard key={i} className="w-full">
                                <div className="h-full p-12 rounded-[2.5rem] bg-white dark:bg-[#0c0c0e] border border-slate-100 dark:border-white/[0.08] hover:shadow-2xl transition-all group overflow-hidden relative">
                                    <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity">
                                        <SolutionIcon size={160} />
                                    </div>
                                    <CardItem translateZ={30} className="w-16 h-16 rounded-3xl bg-slate-50 dark:bg-white/[0.05] flex items-center justify-center mb-12 transition-all group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110">
                                        <CheckCircle2 size={24} />
                                    </CardItem>
                                    <CardItem translateZ={60}>
                                        <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">{feature.title}</h3>
                                        <p className="text-slate-500 dark:text-white/40 leading-relaxed text-xl font-light tracking-tight">{feature.description}</p>
                                    </CardItem>
                                </div>
                            </ThreeDCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Visionary Prototype (The Blurry section) ── */}
            <section className="bg-black py-40 px-6 relative overflow-hidden group">
                {/* Immersive Blurred Background Elements */}
                <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-700" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col items-center text-center space-y-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-3xl"
                        >
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500">Live Architecture Lab</span>
                        </motion.div>

                        <h2 className="text-5xl md:text-9xl font-black text-white tracking-tighter leading-[0.8] mb-8">
                            Experience the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400">Future Prototype.</span>
                        </h2>

                        <p className="max-w-3xl text-white/30 text-xl font-light tracking-tight leading-relaxed">
                            While this interface reflects our active prototype, our engineering team is ready to deploy a production-grade version tailored specifically for your organization's unique operational DNA.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl pt-12">
                            <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-3xl overflow-hidden relative">
                                <div className="absolute inset-0 bg-blue-600/5 blur-3xl" />
                                <div className="relative z-10 flex flex-col items-center gap-6">
                                    <div className="w-16 h-16 rounded-3xl bg-blue-600/20 flex items-center justify-center text-blue-500">
                                        <Box size={32} />
                                    </div>
                                    <h4 className="text-2xl font-black text-white tracking-tighter">Scalable Kernel</h4>
                                    <p className="text-white/20 text-sm font-light">The core logic is pre-optimized for high-load enterprise scenarios with sub-50ms latency.</p>
                                </div>
                            </div>
                            <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-3xl overflow-hidden relative">
                                <div className="absolute inset-0 bg-purple-600/5 blur-3xl" />
                                <div className="relative z-10 flex flex-col items-center gap-6">
                                    <div className="w-16 h-16 rounded-3xl bg-purple-600/20 flex items-center justify-center text-purple-500">
                                        <Shield size={32} />
                                    </div>
                                    <h4 className="text-2xl font-black text-white tracking-tighter">Encrypted Core</h4>
                                    <p className="text-white/20 text-sm font-light">Built on a Zero-Trust architecture using AESnd encryption for all state transitions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Strategic Impact (Use Case) ──────────────── */}
            <section id="impact" className="bg-slate-950 py-40 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-500 mb-10 block">03 / Implementation Audit</span>
                        <h3 className="text-5xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter mb-10">
                            The <br />
                            <span className="text-blue-500">{solution.useCase.title}</span> <br />
                            Integration
                        </h3>
                        <p className="text-white/40 text-2xl leading-relaxed font-light tracking-tight mb-16">
                            {solution.useCase.desc}
                        </p>
                        <div className="flex gap-16">
                            <div>
                                <p className="text-6xl font-black text-white mb-2 tracking-tighter">98%</p>
                                <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-black">Success Precision</p>
                            </div>
                            <div>
                                <p className="text-6xl font-black text-white mb-2 tracking-tighter">2.4x</p>
                                <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-black">Velocity Gain</p>
                            </div>
                        </div>
                    </motion.div>

                    <ThreeDCard className="w-full h-[500px]">
                        <div className="w-full h-full rounded-[3rem] overflow-hidden bg-gradient-to-br from-blue-600/20 to-purple-700/20 p-px relative group">
                            <div className="w-full h-full rounded-[2.9rem] bg-slate-950 flex items-center justify-center p-16 overflow-hidden relative">
                                <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-all duration-500" />
                                <div className="absolute top-0 right-0 p-12 opacity-[0.05]">
                                    <Award size={200} className="text-white" />
                                </div>
                                <CardItem translateZ={100} className="relative z-10 flex flex-col items-center text-center gap-10">
                                    <Award size={100} className="text-blue-500" />
                                    <div className="space-y-4">
                                        <h4 className="text-3xl font-black text-white tracking-tighter">Validated Architecture</h4>
                                        <p className="text-white/30 text-lg max-w-sm font-light leading-relaxed">Independently audited for extreme high-availability enterprise environments.</p>
                                    </div>
                                    <div className="w-full h-[1px] bg-white/10" />
                                    <div className="flex gap-4">
                                        <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-white/40">Tier 4 Ready</span>
                                        <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-white/40">SOC II Compliant</span>
                                    </div>
                                </CardItem>
                            </div>
                        </div>
                    </ThreeDCard>
                </div>
            </section>

            {/* ── Implementation Roadmap ──────────────────── */}
            <section id="roadmap" className="bg-white dark:bg-[#0c0c0e] py-40 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-32 max-w-3xl mx-auto space-y-6">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-600 block">04 / Deployment Lifecycle</span>
                        <h3 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.85]">
                            Execution <br /> Methodology
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-24">
                        {solution.process.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.8 }}
                                className="relative group"
                            >
                                <div className="text-9xl font-black text-slate-200/60 dark:text-white/[0.04] absolute -top-20 -left-6 pointer-events-none group-hover:text-blue-600/5 transition-colors duration-500">
                                    0{i + 1}
                                </div>
                                <div className="relative z-10 space-y-6">
                                    <div className="w-12 h-[1px] bg-blue-600" />
                                    <h4 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">{step.title}</h4>
                                    <p className="text-slate-500 dark:text-white/40 text-lg leading-snug font-light tracking-tight">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Global Support Network ──────────────────── */}
            <section className="bg-[#f8f8fb] dark:bg-[#0a0a0b] py-32 px-6 border-y border-slate-100 dark:border-white/[0.05]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: Shield, title: 'Zero Trust Protocol', desc: 'Quantum-resistant encryption layers protecting every operational node.' },
                            { icon: Zap, title: 'Kinetic Latency', desc: 'Sub-millisecond synchronization across global edge clusters.' },
                            { icon: HeartHandshake, title: 'Engineering Support', desc: 'Direct channel to our core architecture team available 24/7/365.' },
                        ].map((m, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="flex flex-col gap-8 p-12 bg-white dark:bg-[#121217] border border-slate-100 dark:border-white/[0.08] rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500"
                            >
                                <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${solution.color} opacity-10 flex items-center justify-center`}>
                                    <m.icon size={32} className="text-blue-600" />
                                </div>
                                <div className="space-y-4">
                                    <h4 className="font-black text-slate-900 dark:text-white text-2xl tracking-tighter">{m.title}</h4>
                                    <p className="text-slate-500 dark:text-white/30 text-lg leading-relaxed font-light tracking-tight">{m.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Intelligence Hub (FAQ) ──────────────────── */}
            <section id="faq" className="bg-white dark:bg-[#0c0c0e] py-40 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-32 space-y-6">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-600 block">05 / Protocol Intelligence</span>
                        <h3 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.85]">
                            Technical <br /> FAQ
                        </h3>
                    </div>
                    <div className="space-y-8">
                        {solution.faqs.map((faq, i) => (
                            <div key={i} className="p-10 rounded-[2.5rem] bg-slate-50 dark:bg-white/[0.02] border border-transparent hover:border-slate-100 dark:hover:border-white/10 transition-all duration-500">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between text-left group"
                                >
                                    <span className="font-extrabold text-slate-900 dark:text-white text-2xl tracking-tighter group-hover:text-blue-600 dark:group-hover:text-white transition-colors">
                                        {faq.q}
                                    </span>
                                    <div className={`w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center transition-all duration-500 ${openFaq === i ? 'bg-blue-600 border-blue-600 rotate-180 shadow-lg shadow-blue-500/20' : ''}`}>
                                        <ChevronDown size={20} className={openFaq === i ? 'text-white' : 'text-slate-400'} />
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
                                            <p className="pt-10 text-slate-500 dark:text-white/40 text-xl leading-relaxed font-light tracking-tight border-t border-slate-200 dark:border-white/5 mt-8">
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

            {/* ── Final Immersive Activation ──────────────── */}
            <section className="bg-white dark:bg-[#0a0a0b] px-6 py-60 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-blue-600/10 rounded-full blur-[200px] pointer-events-none" />

                <div className="max-w-6xl mx-auto relative z-10 text-center space-y-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[10px] font-black uppercase tracking-[1em] text-blue-600 mb-12 flex flex-col items-center gap-8">
                            <span className="w-[1px] h-20 bg-gradient-to-b from-transparent via-blue-600/50 to-blue-600" />
                            Final Protocol
                        </h2>
                        <h3 className="text-6xl md:text-[10rem] font-black text-slate-900 dark:text-white tracking-tighter leading-[0.8] mb-20">
                            Build Your <br />
                            <span className="text-blue-600">Tomorrow.</span>
                        </h3>
                        <Link
                            to="/contact-us"
                            className="group relative inline-flex items-center gap-6 px-16 py-8 rounded-full bg-slate-950 dark:bg-white text-white dark:text-black font-black text-xs uppercase tracking-[0.4em] hover:scale-105 transition-all shadow-2xl overflow-hidden"
                        >
                            <span className="relative z-10">Deploy Vision</span>
                            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform relative z-10" />
                            <div className="absolute inset-0 bg-blue-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ── Global Styles ─────────────────────────── */}
            <style>{`
                .outline-text {
                    color: transparent;
                    -webkit-text-stroke: 1px rgba(100, 116, 139, 0.1);
                }
                .dark .outline-text {
                    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.05);
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </div>
    );
}
