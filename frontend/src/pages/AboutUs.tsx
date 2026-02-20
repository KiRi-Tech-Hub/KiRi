import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ─── Data ───────────────────────────────────────────────────────────── */




const manifesto = [
    'We do not sell hours.',
    'We engineer outcomes.',
    'We do not ship features.',
    'We build systems.',
];

const principles = [
    { index: '01', title: 'Precision over speed', body: 'Moving fast is easy. Moving fast without breaking things takes discipline. We obsess over correctness before velocity.' },
    { index: '02', title: 'Partnership, not vendor', body: 'We embed in your team. We attend your retros, read your PRDs, care about your users. Your success is our only metric.' },
    { index: '03', title: 'Craft over commodity', body: "Generic solutions exist for a reason — we are not one of them. Every system we build is designed for the specific problem it solves." },
    { index: '04', title: 'Honest communication', body: 'We will tell you when an idea is wrong, a deadline is unrealistic, or a technology is a poor fit. Blunt, respectful, always.' },
    { index: '05', title: 'Long-term thinking', body: 'The code we write today will be maintained for years. We engineer for that reality — clear, tested, documented, maintainable.' },
    { index: '06', title: 'Results above all else', body: 'Aesthetics matter. Process matters. But the only thing that truly counts is whether it works for your users in production.' },
];

const timeline = [
    { year: '2023', title: 'Founded', body: 'Two engineers quit their jobs with one belief: software quality is not a luxury. KiRi is born.' },
    { year: '2024', title: 'Enterprise Partnerships', body: 'Signed engagements with international clients. Built a core team of specialists.' },
    { year: '2024', title: 'Mobile & Cloud practice', body: 'Expanded service lines. Delivered 30+ projects across India and Singapore.' },
    { year: '2025', title: 'AI integration practice', body: 'Launched our AI/ML integration practice. Still obsessed with precision-engineered software.' },
];

const team = [
    {
        name: 'Kishan Roy',
        role: 'Founder',
        initials: 'KR',
        hue: '244',
        bio: 'Visionary engineer and strategist dedicated to building high-performance digital products that drive industry transformation.'
    },
];

/* ─── Component ─────────────────────────────────────────────────────── */

export default function AboutUs() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
    const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    return (
        <div className="min-h-screen bg-white dark:bg-[#080809] pt-20 selection:bg-indigo-500 selection:text-white">

            {/* ══════════════════════════════════════════════
                01 — HERO  (editorial split)
            ══════════════════════════════════════════════ */}
            <section
                ref={heroRef}
                className="relative bg-[#080809] overflow-hidden"
                style={{ minHeight: '100vh' }}
            >
                {/* Background video — screen blend makes brights visible on dark bg */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                    style={{ mixBlendMode: 'screen' }}
                    src="/kiri_video.mp4"
                />

                {/* Edge vignette — only darkens periphery, keeps centre visible */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#080809]/90 via-transparent to-[#080809]/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080809] via-transparent to-[#080809]/50" />

                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 h-screen flex flex-col justify-center"
                >
                    <div className="grid grid-cols-1 gap-12">
                        {/* Left — headline */}
                        <div>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-[9px] font-black uppercase tracking-[0.32em] text-white/35 mb-8 flex items-center gap-3"
                            >
                                <span className="w-6 h-[1px] bg-white/30 inline-block" />
                                KiRi Tech Hub · Est. 2023
                            </motion.p>

                            <motion.h1
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.65, delay: 0.08 }}
                                className="font-extrabold text-white leading-[1.08] tracking-[-0.025em] mb-6"
                                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.8rem)' }}
                            >
                                We engineer digital<br />
                                products{' '}
                                <span className="relative inline-block">
                                    that last.
                                    <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-white/20 rounded-full" />
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-white/45 text-base leading-relaxed max-w-sm mb-10"
                            >
                                High-end software consultancy. We partner with founders and enterprises to build systems — not just features.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="flex items-center gap-4 flex-wrap"
                            >
                                <Link
                                    to="/contact-us"
                                    className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-bold rounded-full hover:bg-white/90 transition-colors"
                                >
                                    Work with us
                                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                                <Link
                                    to="/portfolio"
                                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white/70 text-sm font-semibold rounded-full hover:border-white/40 hover:text-white transition-all"
                                >
                                    See our work <ArrowUpRight size={13} />
                                </Link>
                            </motion.div>
                        </div>

                    </div>
                </motion.div>

                {/* Bottom fade */}
                <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white dark:from-[#080809] to-transparent" />
            </section>

            {/* ══════════════════════════════════════════════
                02 — MANIFESTO  (giant statement)
            ══════════════════════════════════════════════ */}
            <section className="bg-white dark:bg-[#080809] border-t border-b border-slate-100 dark:border-white/[0.06] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28">
                    <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-16 items-start">
                        <div className="lg:pt-3">
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-400 block mb-1">Our belief</span>
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-300 dark:text-white/15">§ 001</span>
                        </div>
                        <div className="space-y-0">
                            {manifesto.map((line, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.55, delay: i * 0.08 }}
                                    className={`border-b border-slate-100 dark:border-white/[0.06] py-5 flex items-center justify-between group cursor-default ${i % 2 === 0
                                        ? 'text-slate-900 dark:text-white'
                                        : 'text-slate-400 dark:text-white/30'
                                        }`}
                                >
                                    <span className="text-[clamp(1.6rem,4vw,3rem)] font-extrabold tracking-tight leading-none group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-200">
                                        {line}
                                    </span>
                                    <span className="text-xs font-mono text-slate-200 dark:text-white/10 tabular-nums">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                03 — TIMELINE
            ══════════════════════════════════════════════ */}
            <section className="bg-slate-50 dark:bg-[#0a0a0c] border-b border-slate-100 dark:border-white/[0.06]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28">
                    <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-16">
                        <div>
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-400 block mb-1">Our story</span>
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-300 dark:text-white/15">§ 002</span>
                            <p className="text-slate-400 dark:text-white/30 text-xs leading-relaxed mt-6 max-w-[160px]">
                                Two years of compounding craft.
                            </p>
                        </div>
                        <div>
                            {timeline.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.06 }}
                                    className="grid grid-cols-[80px_1fr] gap-8 border-b border-slate-100 dark:border-white/[0.06] py-7 group hover:bg-slate-100/60 dark:hover:bg-white/[0.02] -mx-4 px-4 transition-colors"
                                >
                                    <div className="font-mono text-xs font-black text-indigo-500 dark:text-indigo-400 pt-1 uppercase tracking-widest">
                                        {item.year}
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 dark:text-white text-base mb-1.5">{item.title}</div>
                                        <div className="text-slate-500 dark:text-white/40 text-sm leading-relaxed">{item.body}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                04 — PRINCIPLES  (numbered list)
            ══════════════════════════════════════════════ */}
            <section className="bg-white dark:bg-[#080809] border-b border-slate-100 dark:border-white/[0.06]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28">
                    <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-16">
                        <div>
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-400 block mb-1">Principles</span>
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-300 dark:text-white/15">§ 003</span>
                            <p className="text-slate-400 dark:text-white/30 text-xs leading-relaxed mt-6 max-w-[160px]">
                                The operating model behind every project we take on.
                            </p>
                        </div>
                        <div>
                            {principles.map((p, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    className="grid grid-cols-[48px_1fr] gap-8 border-b border-slate-100 dark:border-white/[0.06] py-7 group"
                                >
                                    <div className="font-mono text-[10px] font-black text-slate-300 dark:text-white/15 pt-1 tabular-nums">
                                        {p.index}
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4">
                                        <div className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                                            {p.title}
                                        </div>
                                        <div className="text-slate-500 dark:text-white/40 text-sm leading-relaxed">{p.body}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                05 — TEAM
            ══════════════════════════════════════════════ */}
            <section className="bg-slate-50 dark:bg-[#0a0a0c] border-b border-slate-100 dark:border-white/[0.06]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28">
                    <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-16">
                        <div>
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-400 block mb-1">The team</span>
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-300 dark:text-white/15">§ 004</span>
                            <p className="text-slate-400 dark:text-white/30 text-xs leading-relaxed mt-6 max-w-[160px]">
                                Small by design. Every person here is a senior practitioner.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-px bg-slate-100 dark:bg-white/[0.06] border border-slate-100 dark:border-white/[0.06] max-w-xl">
                            {team.map((member, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.35, delay: i * 0.06 }}
                                    className="bg-white dark:bg-[#0a0a0c] p-10 group hover:bg-slate-50 dark:hover:bg-white/[0.03] transition-colors"
                                >
                                    {/* Initials block */}
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-black mb-6 transition-transform group-hover:scale-105"
                                        style={{
                                            background: `linear-gradient(135deg, hsl(${member.hue},70%,55%), hsl(${member.hue},60%,40%))`,
                                        }}
                                    >
                                        {member.initials}
                                    </div>
                                    <div className="font-bold text-slate-900 dark:text-white text-xl mb-1">{member.name}</div>
                                    <div className="text-indigo-500 dark:text-indigo-400 text-sm font-bold uppercase tracking-wider mb-4">{member.role}</div>
                                    <p className="text-slate-500 dark:text-white/40 text-sm leading-relaxed">{member.bio}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                06 — CTA
            ══════════════════════════════════════════════ */}
            <section className="bg-[#080809]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-b border-white/[0.06]">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400 mb-6 flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-indigo-400 inline-block" />
                            Let's build together
                        </p>
                        <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-extrabold text-white tracking-tight leading-[1.05]">
                            Have a product in mind?<br />
                            <span className="text-white/30">We should talk.</span>
                        </h2>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                        <Link
                            to="/contact-us"
                            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold text-sm rounded-full hover:bg-white/90 transition-colors self-start"
                        >
                            Start a project
                            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                        <Link
                            to="/portfolio"
                            className="group inline-flex items-center gap-2 px-8 py-4 border border-white/[0.15] text-white font-bold text-sm rounded-full hover:border-white/30 hover:bg-white/[0.04] transition-all self-start"
                        >
                            View portfolio
                            <ArrowUpRight size={14} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
