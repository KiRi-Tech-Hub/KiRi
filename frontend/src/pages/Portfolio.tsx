import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, X, ChevronLeft, ChevronRight, MonitorPlay, Maximize2 } from 'lucide-react';

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
        hasShowcase: true,
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

/* ── CodeHive slides data ──────────────────────────────────────────────── */
const codehiveSlides = [
    {
        src: '/our project/codehive1.png',
        title: 'Landing Page',
        description: 'The immersive CodeHive home screen — featuring a bold hero section that communicates the platform\'s mission of competitive coding excellence.',
    },
    {
        src: '/our project/codehive2.png',
        title: 'User Dashboard',
        description: 'Personalised dashboard showing contest history, ranking progress, solved problem counts, and activity heat-maps at a glance.',
    },
    {
        src: '/our project/codehive3.png',
        title: 'Problem Explorer',
        description: 'Browse and filter thousands of coding problems by difficulty, topic, tag, and company — with an instant search experience.',
    },
    {
        src: '/our project/codehive4.png',
        title: 'Code Editor',
        description: 'Feature-rich browser-based IDE with syntax highlighting, multi-language support, and real-time compilation feedback.',
    },
    {
        src: '/our project/codehive5.png',
        title: 'AI-Driven Hints',
        description: 'Stuck on a problem? The integrated AI assistant offers contextual hints and step-by-step guidance without giving away the full solution.',
    },
    {
        src: '/our project/codehive6.png',
        title: 'Live Contests',
        description: 'Host or join timed coding contests with live leaderboard updates, countdown timers, and automated result announcement.',
    },
    {
        src: '/our project/codehive7.png',
        title: 'Leaderboard',
        description: 'Global and per-contest leaderboards with tier badges, rating graphs, and peer comparison to fuel healthy competition.',
    },
    {
        src: '/our project/codehive8.png',
        title: 'Judging Engine Results',
        description: 'Millisecond-accurate verdict screen showing test-case pass/fail breakdown, execution time, and memory usage for each submission.',
    },
    {
        src: '/our project/codehive9.png',
        title: 'User Profile',
        description: 'Public developer profile showcasing badges earned, contest achievements, streak calendar, and problem-solving statistics.',
    },
    {
        src: '/our project/codehive10.png',
        title: 'Discussion Forum',
        description: 'Community-driven editorial forum where users share approaches, debate optimisations, and upvote the clearest explanations.',
    },
    {
        src: '/our project/codehive11.png',
        title: 'Interview Prep Mode',
        description: 'Curated problem sets mapped to real FAANG interview rounds, complete with time-boxed practice sessions and mock evaluations.',
    },
    {
        src: '/our project/codhive12.png',
        title: 'Analytics & Insights',
        description: 'Deep-dive analytics page revealing weak topic areas, time-per-problem trends, and personalised next-step recommendations.',
    },
    {
        src: '/our project/codehive13.png',
        title: 'Contest Room',
        description: 'Real-time collaborative contest room with participant presence indicators and live submission feeds.',
    },
    {
        src: '/our project/codehive14.png',
        title: 'Notifications Centre',
        description: 'Centralised notification hub for contest reminders, badge unlocks, editorial releases, and community reply alerts.',
    },
    {
        src: '/our project/codehive15.png',
        title: 'Admin Panel',
        description: 'Powerful admin interface for creating problems, setting contest rules, managing users, and monitoring platform health metrics.',
    },
];

/* ── Slideshow Modal ───────────────────────────────────────────────────── */
function CodeHiveShowcase({ onClose }: { onClose: () => void }) {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [fsHint, setFsHint] = useState(false);
    const touchStartX = useRef<number | null>(null);
    const total = codehiveSlides.length;

    const go = useCallback((dir: number) => {
        setDirection(dir);
        setCurrent(prev => (prev + dir + total) % total);
    }, [total]);

    // Keyboard navigation
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') go(1);
            if (e.key === 'ArrowLeft') go(-1);
            if (e.key === 'Escape') {
                if (isFullscreen) setIsFullscreen(false);
                else onClose();
            }
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [go, onClose, isFullscreen]);

    // Lock body scroll
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, []);

    // Touch swipe handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(delta) > 40) go(delta < 0 ? 1 : -1);
        touchStartX.current = null;
    };

    // Tap image → fullscreen
    const handleImageTap = () => {
        setIsFullscreen(true);
        setFsHint(true);
        setTimeout(() => setFsHint(false), 2000);
    };

    const slide = codehiveSlides[current];

    const variants = {
        enter: (dir: number) => ({ x: dir > 0 ? '60%' : '-60%', opacity: 0, scale: 0.95 }),
        center: { x: 0, opacity: 1, scale: 1 },
        exit: (dir: number) => ({ x: dir > 0 ? '-60%' : '60%', opacity: 0, scale: 0.95 }),
    };

    /* ── Fullscreen overlay (mobile tap-to-expand) ── */
    if (isFullscreen) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[10000] flex items-center justify-center bg-black"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onClick={() => setIsFullscreen(false)}
            >
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.img
                        key={current}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        src={slide.src}
                        alt={slide.title}
                        className="w-full h-full object-contain"
                        draggable={false}
                        onClick={e => e.stopPropagation()}
                    />
                </AnimatePresence>

                {/* Slide counter */}
                <div className="absolute top-4 right-4 font-mono text-xs text-white/40 tabular-nums">
                    {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </div>

                {/* Tap-to-close hint */}
                <AnimatePresence>
                    {fsHint && (
                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 text-white/50 text-xs"
                        >
                            Tap anywhere to exit · Swipe to navigate
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex flex-col"
            style={{ background: 'rgba(6,6,10,0.97)', backdropFilter: 'blur(16px)' }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* ── Top Bar ── */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.07] flex-shrink-0">
                <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center">
                        <MonitorPlay size={14} className="text-amber-400" />
                    </div>
                    <div>
                        <p className="text-[9px] font-black uppercase tracking-[0.25em] text-white/30">CodeHive · Project Showcase</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-white/25 tabular-nums">
                        {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                    </span>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center transition-colors"
                        aria-label="Close showcase"
                    >
                        <X size={14} className="text-white/60" />
                    </button>
                </div>
            </div>

            {/* ── Main area ── */}
            <div className="flex-1 flex items-center justify-center px-4 py-4 min-h-0 overflow-hidden">
                {/* Prev button — hidden on mobile (use swipe) */}
                <button
                    onClick={() => go(-1)}
                    className="hidden sm:flex flex-shrink-0 w-10 h-10 rounded-full bg-white/[0.06] hover:bg-white/[0.12] items-center justify-center transition-colors mr-4"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={18} className="text-white/60" />
                </button>

                {/* Image stage */}
                <div className="relative flex-1 flex items-center justify-center overflow-hidden" style={{ maxWidth: '900px' }}>
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={current}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="w-full"
                        >
                            <div
                                className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl cursor-zoom-in"
                                style={{ background: '#111116' }}
                                onClick={handleImageTap}
                            >
                                <img
                                    src={slide.src}
                                    alt={slide.title}
                                    className="w-full object-contain"
                                    style={{ maxHeight: 'calc(100vh - 260px)' }}
                                    draggable={false}
                                />
                            </div>
                            {/* Mobile tap hint */}
                            <p className="sm:hidden text-center text-[10px] text-white/20 mt-2">Tap image to expand · Swipe to navigate</p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Next button — hidden on mobile (use swipe) */}
                <button
                    onClick={() => go(1)}
                    className="hidden sm:flex flex-shrink-0 w-10 h-10 rounded-full bg-white/[0.06] hover:bg-white/[0.12] items-center justify-center transition-colors ml-4"
                    aria-label="Next slide"
                >
                    <ChevronRight size={18} className="text-white/60" />
                </button>
            </div>

            {/* ── Bottom: CodeHive brief + dots ── */}
            <div className="flex-shrink-0 border-t border-white/[0.07] px-6 py-5">
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-white/50 text-sm leading-relaxed mb-4">
                        <span className="text-amber-400 font-semibold">CodeHive</span> is a competitive coding platform engineered for developers who thrive under pressure — featuring real-time code execution with multi-language support, an AST-powered static analyzer for instant feedback, AI-driven hints, browser-proctored live contests, and a global leaderboard system. Built with <span className="text-white/70 font-medium">React 19 + Vite + TypeScript + Tailwind CSS</span> on the frontend, <span className="text-white/70 font-medium">Node.js + TypeScript + Redis</span> on the backend, and <span className="text-white/70 font-medium">Monaco Editor</span> for the in-browser IDE — it delivers a low-latency, secure judging experience with sandboxed code execution, identity verification, and a rich analytics suite, designed to scale for thousands of concurrent competitors across all skill levels.
                    </p>

                    {/* Dot strip */}
                    <div className="flex items-center justify-center gap-1.5 flex-wrap">
                        {codehiveSlides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                                aria-label={`Go to slide ${i + 1}`}
                                className="transition-all duration-200"
                                style={{
                                    width: i === current ? '20px' : '6px',
                                    height: '6px',
                                    borderRadius: '4px',
                                    background: i === current ? '#f59e0b' : 'rgba(255,255,255,0.2)',
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Keyboard hint */}
            <div className="absolute bottom-4 right-6 text-[10px] text-white/15 hidden md:block">
                ← → to navigate · Esc to close
            </div>
        </motion.div>
    );
}

/* ── Sticky stacked card ─────────────────────────────────────────────── */
function StackCard({
    project,
    index,
    onShowcase,
}: {
    project: typeof projects[0];
    index: number;
    onShowcase?: () => void;
}) {
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
                {/* Thin top border accent — special amber for CodeHive */}
                <div className={`h-[2px] w-full ${project.hasShowcase ? 'bg-amber-500' : 'bg-slate-900 dark:bg-white'}`} />

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

                            {/* Result + (CodeHive only) View Project button */}
                            <div className="flex items-center gap-5 flex-wrap">
                                <div className="inline-flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-white/30 flex-shrink-0" />
                                    <span className="text-xs font-semibold text-slate-600 dark:text-white/50">
                                        {project.result}
                                    </span>
                                </div>

                                {project.hasShowcase && onShowcase && (
                                    <button
                                        onClick={onShowcase}
                                        className="group inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold border border-amber-500/40 text-amber-600 dark:text-amber-400 hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all duration-200"
                                    >
                                        <Maximize2 size={11} className="group-hover:scale-110 transition-transform" />
                                        View Project
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Right — index */}
                        <div className="flex md:flex-col items-center md:items-end gap-6 md:gap-10 flex-shrink-0">
                            <span className="font-mono text-5xl font-black text-slate-100 dark:text-white/[0.06] tabular-nums select-none">
                                {String(index + 1).padStart(2, '0')}
                            </span>
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
    const [showcaseOpen, setShowcaseOpen] = useState(false);
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
                        <StackCard
                            key={project.title}
                            project={project}
                            index={i}
                            onShowcase={project.hasShowcase ? () => setShowcaseOpen(true) : undefined}
                        />
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

            {/* ── CodeHive Showcase Modal ───────────────────── */}
            <AnimatePresence>
                {showcaseOpen && (
                    <CodeHiveShowcase onClose={() => setShowcaseOpen(false)} />
                )}
            </AnimatePresence>
        </div>
    );
}
