import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Briefcase, Clock, ArrowRight, Heart, Zap, Globe, Users, TrendingUp, BookOpen } from 'lucide-react';

const perks = [
    { icon: Heart, label: 'Health Insurance', desc: 'Full medical coverage for you and your dependants.' },
    { icon: Zap, label: 'Flex Hours', desc: 'Work when you are most productive — no 9-to-5 rigidity.' },
    { icon: Globe, label: 'Remote-friendly', desc: 'Work from anywhere in India; optional office in Bengaluru.' },
    { icon: BookOpen, label: 'Learning Budget', desc: '₹30,000 per year for courses, books, and conferences.' },
    { icon: TrendingUp, label: 'ESOP Pool', desc: 'Equity participation — you grow with the company.' },
    { icon: Users, label: 'Fast Growth', desc: 'Flat hierarchy, high ownership, rapid career progression.' },
];

const openings = [
    {
        title: 'Senior Full-Stack Engineer',
        team: 'Engineering',
        type: 'Full-time',
        location: 'Remote / Bengaluru',
        experience: '3–6 years',
        skills: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
    },
    {
        title: 'Mobile Developer (React Native)',
        team: 'Engineering',
        type: 'Full-time',
        location: 'Remote',
        experience: '2–4 years',
        skills: ['React Native', 'Expo', 'Firebase', 'Redux'],
    },
    {
        title: 'UI/UX Designer',
        team: 'Design',
        type: 'Full-time',
        location: 'Bengaluru',
        experience: '2–5 years',
        skills: ['Figma', 'Prototyping', 'Design Systems', 'Motion'],
    },
    {
        title: 'DevOps & Cloud Engineer',
        team: 'Infrastructure',
        type: 'Full-time',
        location: 'Remote',
        experience: '3–5 years',
        skills: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
    },
    {
        title: 'Product Manager',
        team: 'Product',
        type: 'Full-time',
        location: 'Remote / Bengaluru',
        experience: '3–6 years',
        skills: ['Roadmapping', 'User Research', 'Agile', 'B2B SaaS'],
    },
    {
        title: 'Business Development Executive',
        team: 'Growth',
        type: 'Full-time',
        location: 'Bengaluru',
        experience: '1–3 years',
        skills: ['B2B Sales', 'Outreach', 'CRM', 'Proposals'],
    },
];

const teams = ['All', 'Engineering', 'Design', 'Infrastructure', 'Product', 'Growth'];

export default function Careers() {
    const [active, setActive] = useState('All');
    const filtered = active === 'All' ? openings : openings.filter(o => o.team === active);

    return (
        <div className="min-h-screen bg-[#f8f8fb] dark:bg-[#0a0a0b] pt-20">

            {/* ── Hero ─────────────────────────────────────── */}
            <section className="relative bg-[#0d0d12] pt-24 pb-32 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.035]"
                    style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#f8f8fb] dark:from-[#0a0a0b] to-transparent" />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-[9px] font-black uppercase tracking-[0.32em] text-white/30 mb-8 flex items-center gap-3"
                    >
                        <span className="w-6 h-[1px] bg-white/25 inline-block" />
                        KiRi Tech Hub · Open Roles
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.08 }}
                        className="font-extrabold text-white leading-[1.06] tracking-tight mb-6"
                        style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
                    >
                        Build the future<br />
                        <span className="relative inline-block">
                            with us.
                            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-white/20 rounded-full" />
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-white/40 text-base leading-relaxed max-w-md"
                    >
                        We are a small team doing ambitious work. If you love craft, ownership, and building products that matter — you will fit right in.
                    </motion.p>
                </div>
            </section>

            {/* ── Perks ────────────────────────────────────── */}
            <section className="bg-white dark:bg-[#0c0c0e] border-b border-slate-100 dark:border-white/[0.06]">
                <div className="max-w-4xl mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-12">
                        {/* Label */}
                        <div className="pt-1">
                            <p className="text-[9px] font-black uppercase tracking-[0.28em] text-slate-400 dark:text-white/25 mb-3">
                                01 / Why KiRi
                            </p>
                            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                                What you get
                            </h2>
                        </div>

                        {/* Perks grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-100 dark:bg-white/[0.06] border border-slate-100 dark:border-white/[0.06]">
                            {perks.map((perk, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    className="p-6 bg-white dark:bg-[#0c0c0e] hover:bg-slate-50 dark:hover:bg-white/[0.03] transition-colors"
                                >
                                    <perk.icon size={16} className="text-slate-400 dark:text-white/30 mb-4" />
                                    <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">{perk.label}</h3>
                                    <p className="text-slate-500 dark:text-white/35 text-xs leading-relaxed">{perk.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Open Roles ───────────────────────────────── */}
            <section className="bg-[#f8f8fb] dark:bg-[#0a0a0b]">
                <div className="max-w-4xl mx-auto px-6 py-20 pb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-12">
                        {/* Label */}
                        <div className="pt-1">
                            <p className="text-[9px] font-black uppercase tracking-[0.28em] text-slate-400 dark:text-white/25 mb-3">
                                02 / Openings
                            </p>
                            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug mb-6">
                                {filtered.length} role{filtered.length !== 1 ? 's' : ''} open
                            </h2>
                            {/* Filter */}
                            <div className="flex flex-col gap-1.5">
                                {teams.map(t => (
                                    <button
                                        key={t}
                                        onClick={() => setActive(t)}
                                        className={`text-left text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${active === t
                                            ? 'bg-slate-900 dark:bg-white text-white dark:text-black'
                                            : 'text-slate-500 dark:text-white/35 hover:text-slate-800 dark:hover:text-white/70'
                                            }`}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Roles */}
                        <div>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={active}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="divide-y divide-slate-100 dark:divide-white/[0.06]"
                                >
                                    {filtered.map((role, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 12 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: i * 0.05 }}
                                            className="group py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
                                        >
                                            <div>
                                                <div className="flex items-center gap-3 mb-2 flex-wrap">
                                                    <span className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-400 dark:text-white/30 border border-slate-200 dark:border-white/[0.1] px-2 py-0.5 rounded">
                                                        {role.team}
                                                    </span>
                                                    <span className="flex items-center gap-1 text-slate-400 dark:text-white/25 text-[10px]">
                                                        <MapPin size={9} /> {role.location}
                                                    </span>
                                                    <span className="flex items-center gap-1 text-slate-400 dark:text-white/25 text-[10px]">
                                                        <Clock size={9} /> {role.experience}
                                                    </span>
                                                </div>
                                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-3 leading-snug">
                                                    {role.title}
                                                </h3>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {role.skills.map((s, si) => (
                                                        <span key={si} className="px-2 py-0.5 text-[9px] font-black uppercase tracking-wide rounded bg-slate-100 dark:bg-white/[0.06] text-slate-500 dark:text-white/35">
                                                            {s}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <a
                                                href={`mailto:kiri.tech.hub@gmail.com?subject=Application: ${encodeURIComponent(role.title)}`}
                                                className="group/btn flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 dark:border-white/[0.12] text-slate-700 dark:text-white/60 text-xs font-bold hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-transparent transition-all self-start sm:self-center"
                                            >
                                                Apply
                                                <ArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
                                            </a>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>

                            {filtered.length === 0 && (
                                <div className="py-16 text-slate-400 dark:text-white/25">
                                    <p className="text-sm font-semibold mb-2">No openings in this area right now.</p>
                                    <p className="text-xs leading-relaxed">
                                        Send your CV to{' '}
                                        <a href="mailto:kiri.tech.hub@gmail.com" className="underline underline-offset-4 hover:text-slate-700 dark:hover:text-white transition-colors">
                                            kiri.tech.hub@gmail.com
                                        </a>{' '}
                                        — we will reach out when there is a fit.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ──────────────────────────────────────── */}
            <section className="bg-[#0d0d12] border-t border-white/[0.06] px-6 py-24">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div>
                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/25 mb-4 flex items-center gap-3">
                            <span className="w-6 h-[1px] bg-white/20 inline-block" />
                            Don't see your role?
                        </p>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
                            We always want to<br />hear from great people.
                        </h2>
                    </div>
                    <a
                        href="mailto:kiri.tech.hub@gmail.com?subject=General Application — KiRi Tech Hub"
                        className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-white/90 transition-colors flex-shrink-0"
                    >
                        Send us your CV
                        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </a>
                </div>
            </section>
        </div>
    );
}
