import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Info, FileText, Briefcase, UserPlus, Phone, BookOpen } from 'lucide-react';

const sections = [
    {
        icon: Info,
        title: 'About Us',
        description: 'Discover who we are, what we believe in, and why companies choose KiRi as their long-term engineering partner.',
        href: '/about',
        color: '#6366f1',
        stat: '6+ years',
        statLabel: 'in business',
    },
    {
        icon: Briefcase,
        title: 'Portfolio',
        description: 'Explore a curated selection of our work — 80+ projects across web, mobile, DevOps, and AI/ML.',
        href: '/portfolio',
        color: '#ec4899',
        stat: '80+',
        statLabel: 'projects delivered',
    },
    {
        icon: BookOpen,
        title: 'Blog',
        description: 'Engineering deep-dives, product thinking, and design insights from our team.',
        href: '/blog',
        color: '#3b82f6',
        stat: 'Weekly',
        statLabel: 'new articles',
    },
    {
        icon: UserPlus,
        title: 'Careers',
        description: 'Join a small team doing ambitious work. Remote-friendly, high ownership, fast growth.',
        href: '/careers',
        color: '#22c55e',
        stat: '6',
        statLabel: 'open roles',
    },
    {
        icon: Phone,
        title: 'Contact',
        description: "Have a project in mind? We respond within a few hours. Let's start a conversation.",
        href: '/contact-us',
        color: '#f59e0b',
        stat: '< 2 hrs',
        statLabel: 'avg. response time',
    },
];

export default function Insights() {
    return (
        <div className="min-h-screen bg-[#f8f8fb] dark:bg-[#0a0a0b] pt-20">

            {/* ── Hero ─────────────────────────────────────── */}
            <section className="relative bg-[#0d0d12] pt-24 pb-32 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[140px] opacity-[0.09] bg-amber-500 pointer-events-none" />
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#f8f8fb] dark:from-[#0a0a0b] to-transparent" />

                <div className="relative z-10 max-w-5xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-amber-400 mb-5 block flex items-center gap-2">
                            <FileText size={12} />
                            Insights
                        </span>
                        <h1 className="text-[clamp(2.6rem,7vw,5.5rem)] font-extrabold text-white leading-[1.04] tracking-tight mb-6">
                            Everything{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
                                KiRi.
                            </span>
                        </h1>
                        <p className="text-white/40 text-lg max-w-lg leading-relaxed">
                            From our story to our work, our writing to our team — everything you need to know about KiRi in one place.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── Section cards ─────────────────────────────── */}
            <section className="max-w-5xl mx-auto px-6 py-20 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {sections.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: i * 0.07 }}
                            className={i === 0 ? 'md:col-span-2' : ''}
                        >
                            <Link
                                to={s.href}
                                className="group block relative rounded-2xl border border-slate-100 dark:border-white/[0.07] bg-white dark:bg-white/[0.03] hover:border-slate-200 dark:hover:border-white/[0.15] hover:shadow-xl dark:hover:shadow-none transition-all duration-250 overflow-hidden p-7"
                            >
                                {/* Top accent bar */}
                                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: s.color }} />

                                <div className={`flex flex-col ${i === 0 ? 'md:flex-row md:items-center md:gap-12' : ''}`}>
                                    <div className={`flex-1 ${i === 0 ? 'mb-6 md:mb-0' : ''}`}>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${s.color}18` }}>
                                                <s.icon size={18} style={{ color: s.color }} />
                                            </div>
                                            <h2 className="font-extrabold text-slate-900 dark:text-white text-xl tracking-tight">{s.title}</h2>
                                        </div>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5 max-w-lg">{s.description}</p>
                                        <span className="group/link inline-flex items-center gap-2 text-sm font-semibold" style={{ color: s.color }}>
                                            Explore {s.title}
                                            <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                                        </span>
                                    </div>

                                    <div className="flex-shrink-0 flex items-center gap-6">
                                        <div>
                                            <div className="text-3xl font-extrabold tracking-tight" style={{ color: s.color }}>{s.stat}</div>
                                            <div className="text-xs font-medium text-slate-400 dark:text-white/30 uppercase tracking-wider mt-0.5">{s.statLabel}</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
