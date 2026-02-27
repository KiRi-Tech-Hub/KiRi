import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const categories = ['All', 'Web', 'Mobile', 'E-Commerce', 'DevOps', 'AI / ML'];

const projects = [
    {
        category: 'Web',
        title: 'FinTrack Dashboard',
        client: 'FinTech Startup · UK · 2024',
        description: 'Real-time financial analytics platform with live charts, multi-currency support, and role-based access control.',
        tags: ['React', 'Node.js', 'PostgreSQL'],
        result: '3× faster reporting',
    },
    {
        category: 'Mobile',
        title: 'MediCare Pro',
        client: 'HealthTech · India · 2024',
        description: 'Patient-facing healthcare app enabling appointment booking, telemedicine sessions, and prescription management.',
        tags: ['React Native', 'Firebase', 'WebRTC'],
        result: '50K+ downloads in 3 months',
    },
    {
        category: 'E-Commerce',
        title: 'LuxBag Store',
        client: 'Luxury Retail · UAE · 2023',
        description: 'High-end Shopify-plus store with custom 3D product viewer, AR try-on, and multi-warehouse inventory sync.',
        tags: ['Shopify', 'Three.js', 'Liquid'],
        result: '2.4× conversion rate lift',
    },
    {
        category: 'DevOps',
        title: 'CloudScale CI/CD',
        client: 'SaaS Platform · US · 2023',
        description: 'Full GitOps pipeline on AWS EKS — zero-downtime deployments, auto-scaling, and Grafana observability.',
        tags: ['Kubernetes', 'Terraform', 'AWS'],
        result: '99.98% uptime SLA',
    },
    {
        category: 'AI / ML',
        title: 'SentimentLens',
        client: 'MarTech · Singapore · 2024',
        description: 'NLP-powered brand monitoring platform that analyzes social mentions across 12 languages in real time.',
        tags: ['Python', 'FastAPI', 'BERT'],
        result: '94% classification accuracy',
    },
    {
        category: 'Web',
        title: 'CodeHive',
        client: 'EdTech · India · 2024',
        description: 'Competitive coding platform with real-time judging, AI-driven hints, leaderboards, and live contest rooms.',
        tags: ['Next.js', 'Go', 'Redis'],
        result: '10K+ active users',
    },
    {
        category: 'Mobile',
        title: 'TrailMapper',
        client: 'Outdoor Startup · US · 2023',
        description: 'Offline-first hiking app with GPS trail logging, community photo pins, and live weather overlays.',
        tags: ['Flutter', 'Mapbox', 'SQLite'],
        result: 'Featured on App Store',
    },
    {
        category: 'E-Commerce',
        title: 'FreshCart',
        client: 'Grocery Delivery · India · 2022',
        description: 'Hyperlocal grocery delivery with real-time inventory, dynamic slot booking, and driver tracking.',
        tags: ['React', 'Django', 'Socket.io'],
        result: '8 cities launched in 6 months',
    },
];

/* ── Sticky stacked card ─────────────────────────────────────────────── */
function StackCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
    const opacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 1, 0.55]);

    // Each subsequent card sticks slightly lower, creating the layered effect
    const TOP_OFFSET = 88 + index * 16;

    return (
        <div
            ref={ref}
            className="sticky"
            style={{ top: `${TOP_OFFSET}px`, zIndex: 10 + index }}
        >
            <motion.div
                style={{ scale, opacity }}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                className="rounded-2xl overflow-hidden border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#111114] shadow-sm dark:shadow-none"
            >
                {/* Thin top border accent — single neutral color */}
                <div className="h-[2px] bg-slate-900 dark:bg-white w-full" />

                <div className="p-8 md:p-10">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start">

                        {/* Left */}
                        <div>
                            {/* Meta */}
                            <div className="flex items-center gap-3 mb-5 flex-wrap">
                                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-white/35 border border-slate-200 dark:border-white/[0.1] px-2.5 py-1 rounded-full">
                                    {project.category}
                                </span>
                                <span className="text-slate-400 dark:text-white/25 text-[10px]">
                                    {project.client}
                                </span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
                                {project.title}
                            </h3>
                            <p className="text-slate-500 dark:text-white/40 text-sm leading-relaxed max-w-lg mb-6">
                                {project.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2.5 py-1 text-[9px] font-black uppercase tracking-wide rounded-lg bg-slate-100 dark:bg-white/[0.06] text-slate-500 dark:text-white/35"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Result */}
                            <div className="inline-flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-white/30 flex-shrink-0" />
                                <span className="text-xs font-semibold text-slate-600 dark:text-white/50">
                                    {project.result}
                                </span>
                            </div>
                        </div>

                        {/* Right — index + link */}
                        <div className="flex md:flex-col items-center md:items-end gap-6 md:gap-10 flex-shrink-0">
                            <span className="font-mono text-5xl font-black text-slate-100 dark:text-white/[0.06] tabular-nums select-none">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            {/* Link removed as per request */}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

/* ── Page ────────────────────────────────────────────────────────────── */
export default function Portfolio() {
    const [active, setActive] = useState('All');
    const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

    return (
        <div className="min-h-screen bg-[#f8f8fb] dark:bg-[#0a0a0b] pt-20">

            {/* ── Hero ─────────────────────────────────────── */}
            <section className="relative bg-[#0d0d12] overflow-hidden pt-24 pb-20 px-6">
                <div className="absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#f8f8fb] dark:from-[#0a0a0b] to-transparent" />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 mb-8 flex items-center gap-3"
                    >
                        <span className="w-6 h-[1px] bg-white/25 inline-block" />
                        Selected Work
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.08 }}
                        className="font-extrabold text-white tracking-tight leading-[1.05] mb-5"
                        style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
                    >
                        Products we're<br />proud of.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-white/35 text-base leading-relaxed max-w-md"
                    >
                        A curated selection across industries — each one a story of a challenge solved and a partnership formed.
                    </motion.p>
                </div>
            </section>

            {/* ── Sticky filter bar ────────────────────────── */}
            <div className="sticky top-[72px] z-50 bg-[#f8f8fb]/90 dark:bg-[#0a0a0b]/90 backdrop-blur-md border-b border-slate-100 dark:border-white/[0.06]">
                <div className="max-w-4xl mx-auto px-6 py-3.5">
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${active === cat
                                    ? 'bg-slate-900 dark:bg-white text-white dark:text-black'
                                    : 'border border-slate-200 dark:border-white/[0.1] text-slate-500 dark:text-white/40 hover:border-slate-400 dark:hover:border-white/30 hover:text-slate-800 dark:hover:text-white/70'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Stacked cards ────────────────────────────── */}
            <AnimatePresence mode="wait">
                <motion.section
                    key={active}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="max-w-4xl mx-auto px-6 pt-8 pb-64"
                >
                    {filtered.map((project, i) => (
                        <StackCard key={project.title} project={project} index={i} />
                    ))}
                </motion.section>
            </AnimatePresence>

            {/* ── CTA ──────────────────────────────────────── */}
            <section className="bg-[#0d0d12] border-t border-white/[0.06] px-6 py-24">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div>
                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/25 mb-4 flex items-center gap-3">
                            <span className="w-6 h-[1px] bg-white/20 inline-block" />
                            Next steps
                        </p>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
                            Ready to be our<br />next success story?
                        </h2>
                    </div>
                    <a
                        href="/contact-us"
                        className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-white/90 transition-colors flex-shrink-0"
                    >
                        Start a project
                        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </a>
                </div>
            </section>
        </div>
    );
}
