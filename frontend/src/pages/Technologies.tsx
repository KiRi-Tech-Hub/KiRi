import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { techCategories } from '../data/technologies';

// ─── Stacked Cards Section ────────────────────────────────────────────────────
// Each card is sticky with an increasing top offset, creating a natural
// stacking/fanning effect as the user scrolls through the section.
function StackedCards() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={containerRef} className="relative bg-[#f5f5f7] dark:bg-[#0a0a0b]">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                {/* Section label */}
                <div className="pt-24 pb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 mb-2">
                            / What we work with
                        </p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
                            Our Technology<br />Areas
                        </h2>
                    </div>
                    <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
                        Each discipline is a world of its own. We are fluent in all of them.
                    </p>
                </div>

                {/* Stacked cards */}
                <div className="relative pb-40">
                    {techCategories.map((cat, i) => {
                        const CARD_HEIGHT = 480;
                        const STACK_OFFSET = 24; // px each card shifts down when stacked
                        const topOffset = 80 + i * STACK_OFFSET;

                        return (
                            <div
                                key={cat.id}
                                className="sticky"
                                style={{ top: `${topOffset}px`, zIndex: i + 1 }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 60, scale: 0.97 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                                    className="group relative rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] mb-4"
                                    style={{
                                        height: CARD_HEIGHT,
                                        background: `linear-gradient(135deg, #0d0d12 0%, #111118 100%)`,
                                    }}
                                >
                                    {/* Colored gradient panel — right half */}
                                    <div
                                        className="absolute inset-y-0 right-0 w-[52%] opacity-90"
                                        style={{
                                            background: `linear-gradient(135deg, ${cat.gradientFrom}22 0%, ${cat.gradientTo}44 100%)`,
                                        }}
                                    />

                                    {/* Subtle grid dots overlay */}
                                    <div
                                        className="absolute inset-0 pointer-events-none opacity-[0.04]"
                                        style={{
                                            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                                            backgroundSize: '24px 24px',
                                        }}
                                    />

                                    {/* Glowing accent orb */}
                                    <div
                                        className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[80px] opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                                        style={{ background: cat.gradientFrom }}
                                    />

                                    {/* Card number */}
                                    <div
                                        className="absolute top-8 right-10 text-[80px] font-black leading-none select-none tabular-nums opacity-[0.07]"
                                        style={{ color: cat.gradientFrom }}
                                    >
                                        {String(i + 1).padStart(2, '0')}
                                    </div>

                                    {/* ── Card content ── */}
                                    <div className="relative z-10 h-full flex flex-col md:flex-row">
                                        {/* Left pane */}
                                        <div className="flex-1 flex flex-col justify-between p-8 md:p-10">
                                            {/* Label */}
                                            <div>
                                                <span
                                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] border mb-6"
                                                    style={{
                                                        background: `${cat.gradientFrom}18`,
                                                        borderColor: `${cat.gradientFrom}35`,
                                                        color: cat.gradientFrom,
                                                    }}
                                                >
                                                    <span
                                                        className="w-1.5 h-1.5 rounded-full"
                                                        style={{ background: cat.gradientFrom }}
                                                    />
                                                    {cat.label}
                                                </span>

                                                <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight mb-4">
                                                    {cat.tagline}
                                                </h3>

                                                <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                                                    {cat.description}
                                                </p>
                                            </div>

                                            {/* Bottom row: stats + CTA */}
                                            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mt-8">
                                                {/* Stats */}
                                                <div className="flex gap-6">
                                                    {cat.stats.slice(0, 2).map((stat, si) => (
                                                        <div key={si}>
                                                            <div
                                                                className="text-2xl font-extrabold tracking-tight"
                                                                style={{ color: cat.gradientFrom }}
                                                            >
                                                                {stat.value}
                                                            </div>
                                                            <div className="text-white/30 text-[10px] uppercase tracking-wider font-medium mt-0.5">
                                                                {stat.label}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* CTA */}
                                                <Link
                                                    to={`/technologies/${cat.slug}`}
                                                    className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white text-sm font-semibold hover:bg-white hover:text-black hover:border-white transition-all duration-200 self-start sm:self-auto"
                                                >
                                                    Explore
                                                    <ArrowRight
                                                        size={15}
                                                        className="group-hover/btn:translate-x-0.5 transition-transform"
                                                    />
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Right pane — tech icons grid */}
                                        <div className="hidden md:flex md:w-72 flex-col justify-center px-10 border-l border-white/[0.06] gap-3">
                                            <p className="text-white/25 text-[10px] uppercase tracking-widest font-bold mb-2">
                                                Key Technologies
                                            </p>
                                            <div className="grid grid-cols-3 gap-3">
                                                {cat.technologies.slice(0, 6).map((tech, ti) => {
                                                    const TIcon = tech.icon;
                                                    return (
                                                        <motion.div
                                                            key={ti}
                                                            whileHover={{ scale: 1.12 }}
                                                            className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors duration-150 cursor-default"
                                                            title={tech.name}
                                                        >
                                                            <TIcon size={22} style={{ color: tech.color }} />
                                                            <span className="text-white/30 text-[9px] font-medium truncate w-full text-center leading-none">
                                                                {tech.name.split(' ')[0]}
                                                            </span>
                                                        </motion.div>
                                                    );
                                                })}
                                            </div>
                                            {cat.technologies.length > 6 && (
                                                <p className="text-white/20 text-[10px] mt-1">
                                                    +{cat.technologies.length - 6} more
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// ─── Animated word reveal helper ──────────────────────────────────────────────
function WordReveal({ text, className }: { text: string; className?: string }) {
    const words = text.split(' ');
    return (
        <span className={className}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    className="inline-block mr-[0.22em]"
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                    {word}
                </motion.span>
            ))}
        </span>
    );
}

// ─── Marquee strip ────────────────────────────────────────────────────────────
function TechMarquee() {
    const allIcons = techCategories.flatMap((c) => c.technologies.slice(0, 4));
    const doubled = [...allIcons, ...allIcons]; // seamless loop

    return (
        <div className="relative overflow-hidden py-10 bg-[#f5f5f7] dark:bg-[#0a0a0b] border-t border-slate-100 dark:border-white/[0.05]">
            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-[#f5f5f7] dark:from-[#0a0a0b] to-transparent" />
            <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-[#f5f5f7] dark:from-[#0a0a0b] to-transparent" />

            <motion.div
                className="flex gap-8 w-max"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
            >
                {doubled.map((tech, i) => {
                    const TIcon = tech.icon;
                    return (
                        <div
                            key={i}
                            className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.03] flex-shrink-0"
                        >
                            <TIcon size={16} style={{ color: tech.color }} />
                            <span className="text-slate-600 dark:text-slate-400 text-xs font-medium whitespace-nowrap">
                                {tech.name}
                            </span>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function Technologies() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
    const heroY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 80]), { stiffness: 80, damping: 20 });
    const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    return (
        <div className="min-h-screen bg-[#f5f5f7] dark:bg-[#0a0a0b]">
            {/* ── HERO ─────────────────────────────────────────────────── */}
            <section
                ref={heroRef}
                className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d0d12]"
            >
                {/* Background: dot grid */}
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
                        backgroundSize: '28px 28px',
                    }}
                />

                {/* Ambient color bleed */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.12] bg-violet-500" />
                    <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-[0.10] bg-blue-500" />
                </div>

                {/* Bottom fade */}
                <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#f5f5f7] dark:from-[#0a0a0b] to-transparent" />

                {/* ── Content ── */}
                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24"
                >
                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-sm text-white/50 text-xs font-bold uppercase tracking-widest mb-10"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                        Our Technology Stack
                    </motion.div>

                    {/* Main headline */}
                    <h1 className="text-[clamp(2.8rem,8vw,7rem)] font-extrabold text-white leading-[1.02] tracking-tight mb-8">
                        <WordReveal text="Engineering with" />
                        <br />
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage: 'linear-gradient(135deg, #a855f7, #6366f1, #3b82f6)',
                            }}
                        >
                            the Best Tools
                        </motion.span>
                    </h1>

                    {/* Sub */}
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.55, duration: 0.55 }}
                        className="text-white/40 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-12"
                    >
                        From pixel-perfect frontends to bulletproof backends — we master the full spectrum of modern technology.
                    </motion.p>

                    {/* Category quick-links */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className="flex flex-wrap justify-center gap-3"
                    >
                        {techCategories.map((cat) => (
                            <Link
                                key={cat.id}
                                to={`/technologies/${cat.slug}`}
                                className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm text-white/60 text-sm font-medium hover:border-white/30 hover:text-white hover:bg-white/[0.08] transition-all duration-200"
                            >
                                <span className="text-base">{cat.heroIcon}</span>
                                {cat.label}
                                <ArrowUpRight
                                    size={12}
                                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                                />
                            </Link>
                        ))}
                    </motion.div>

                    {/* Scroll cue */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                        className="mt-20 flex flex-col items-center gap-2"
                    >
                        <span className="text-white/20 text-[10px] uppercase tracking-widest font-bold">
                            Scroll to explore
                        </span>
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                            className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center pt-1.5"
                        >
                            <div className="w-1 h-1.5 rounded-full bg-white/30" />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* ── MARQUEE ───────────────────────────────────────────────── */}
            <TechMarquee />

            {/* ── STACKED CARDS ─────────────────────────────────────────── */}
            <StackedCards />

            {/* ── CTA ───────────────────────────────────────────────────── */}
            <section className="relative bg-[#0d0d12] overflow-hidden">
                {/* Color wash */}
                <div className="absolute inset-0 opacity-[0.08] bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600" />

                {/* Dot grid */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                        backgroundSize: '24px 24px',
                    }}
                />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 max-w-4xl mx-auto px-6 py-28 flex flex-col lg:flex-row lg:items-center justify-between gap-12"
                >
                    <div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-violet-400 mb-4">
                            Not sure where to start?
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-lg">
                            We'll find the right
                            stack for you.
                        </h2>
                        <p className="text-white/30 text-base mt-4 max-w-sm leading-relaxed">
                            Our architects analyze your requirements and recommend the perfect technology mix — for free.
                        </p>
                    </div>

                    <Link
                        to="/contact-us"
                        className="group flex-shrink-0 flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-colors duration-200 self-start lg:self-center"
                    >
                        Get Free Consultation
                        <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
