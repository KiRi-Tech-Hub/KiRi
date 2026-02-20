import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Briefcase, Clock, ArrowRight, Heart, Zap, Globe, Users, TrendingUp, BookOpen, X, Loader2, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

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

// ── Apply Modal ────────────────────────────────────────────────
interface ApplyModalProps {
    role: typeof openings[0] | null;
    onClose: () => void;
}

function ApplyModal({ role, onClose }: ApplyModalProps) {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current || !role) return;
        setStatus('sending');
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setStatus('success');
        } catch {
            setStatus('error');
        }
    };

    const inputCls = 'w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all duration-200';

    return (
        <AnimatePresence>
            {role && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Drawer / Modal */}
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0, y: 40, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.97 }}
                        transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="relative w-full max-w-lg bg-[#111116] border border-white/[0.1] rounded-3xl shadow-2xl overflow-hidden pointer-events-auto max-h-[90vh] flex flex-col">

                            {/* Header */}
                            <div className="flex items-start justify-between p-7 border-b border-white/[0.07] flex-shrink-0">
                                <div>
                                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 mb-2">
                                        Applying for
                                    </p>
                                    <h2 className="font-extrabold text-white text-lg leading-snug">{role.title}</h2>
                                    <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                                        <span className="text-[9px] font-black uppercase tracking-widest text-white/25 border border-white/[0.1] px-2 py-0.5 rounded">
                                            {role.team}
                                        </span>
                                        <span className="flex items-center gap-1 text-white/20 text-[10px]">
                                            <MapPin size={9} /> {role.location}
                                        </span>
                                        <span className="flex items-center gap-1 text-white/20 text-[10px]">
                                            <Clock size={9} /> {role.experience}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-xl text-white/30 hover:text-white hover:bg-white/[0.07] transition-all flex-shrink-0"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="overflow-y-auto flex-1 p-7">
                                <AnimatePresence mode="wait">
                                    {status === 'success' ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                                        >
                                            <div className="w-14 h-14 rounded-full bg-white/[0.06] flex items-center justify-center">
                                                <CheckCircle size={26} className="text-white/80" />
                                            </div>
                                            <div>
                                                <h3 className="text-white font-bold text-lg mb-1">Application received!</h3>
                                                <p className="text-white/35 text-sm leading-relaxed">
                                                    We have your details for <span className="text-white/60 font-medium">{role.title}</span>.<br />
                                                    We will reach out within 3–5 business days.
                                                </p>
                                            </div>
                                            <button
                                                onClick={onClose}
                                                className="mt-2 text-white/40 text-xs underline underline-offset-4 hover:text-white/70 transition-colors"
                                            >
                                                Close
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            ref={formRef}
                                            onSubmit={handleSubmit}
                                            className="space-y-4"
                                        >
                                            {/* Hidden field — role title included in email */}
                                            <input type="hidden" name="subject" value={`Job Application: ${role.title} — KiRi Tech Hub`} />

                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30 mb-1.5 block">
                                                        Full Name *
                                                    </label>
                                                    <input
                                                        name="user_name"
                                                        required
                                                        placeholder="Rahul Verma"
                                                        className={inputCls}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30 mb-1.5 block">
                                                        Email *
                                                    </label>
                                                    <input
                                                        name="user_email"
                                                        type="email"
                                                        required
                                                        placeholder="you@example.com"
                                                        className={inputCls}
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30 mb-1.5 block">
                                                        Phone
                                                    </label>
                                                    <input
                                                        name="user_phone"
                                                        type="tel"
                                                        placeholder="+91 98765 43210"
                                                        className={inputCls}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30 mb-1.5 block">
                                                        Experience
                                                    </label>
                                                    <input
                                                        name="company"
                                                        placeholder="e.g. 3 years at Infosys"
                                                        className={inputCls}
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30 mb-1.5 block">
                                                    Resume / Portfolio URL
                                                </label>
                                                <input
                                                    name="portfolio_url"
                                                    type="url"
                                                    placeholder="https://drive.google.com/file/d/1234567890"
                                                    className={inputCls}
                                                />
                                            </div>

                                            <div>
                                                <label className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30 mb-1.5 block">
                                                    Why KiRi? *
                                                </label>
                                                <textarea
                                                    name="message"
                                                    required
                                                    rows={4}
                                                    placeholder="Tell us about yourself, what excites you about this role, and what you'd bring to the team…"
                                                    className={`${inputCls} resize-none`}
                                                />
                                            </div>

                                            {status === 'error' && (
                                                <p className="text-red-400 text-xs">
                                                    Something went wrong. Please email us directly at{' '}
                                                    <a href="mailto:kiri.tech.hub@gmail.com" className="underline">
                                                        kiri.tech.hub@gmail.com
                                                    </a>.
                                                </p>
                                            )}

                                            <button
                                                type="submit"
                                                disabled={status === 'sending'}
                                                className="group w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white text-black font-bold text-sm hover:bg-white/90 transition-colors disabled:opacity-50"
                                            >
                                                {status === 'sending' ? (
                                                    <><Loader2 size={15} className="animate-spin" /> Sending…</>
                                                ) : (
                                                    <>
                                                        Submit Application
                                                        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                                    </>
                                                )}
                                            </button>

                                            <p className="text-center text-white/20 text-[9px] pt-1">
                                                We respect your privacy. Your details are used only for this application.
                                            </p>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

// ── Page ───────────────────────────────────────────────────────
export default function Careers() {
    const [active, setActive] = useState('All');
    const [applyRole, setApplyRole] = useState<typeof openings[0] | null>(null);
    const filtered = active === 'All' ? openings : openings.filter(o => o.team === active);

    return (
        <div className="min-h-screen bg-[#f8f8fb] dark:bg-[#0a0a0b] pt-20">

            {/* Apply Modal */}
            <ApplyModal role={applyRole} onClose={() => setApplyRole(null)} />

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
                        <div className="pt-1">
                            <p className="text-[9px] font-black uppercase tracking-[0.28em] text-slate-400 dark:text-white/25 mb-3">
                                01 / Why KiRi
                            </p>
                            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                                What you get
                            </h2>
                        </div>
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
                        <div className="pt-1">
                            <p className="text-[9px] font-black uppercase tracking-[0.28em] text-slate-400 dark:text-white/25 mb-3">
                                02 / Openings
                            </p>
                            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug mb-6">
                                {filtered.length} role{filtered.length !== 1 ? 's' : ''} open
                            </h2>
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
                                            <button
                                                onClick={() => setApplyRole(role)}
                                                className="group/btn flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 dark:border-white/[0.12] text-slate-700 dark:text-white/60 text-xs font-bold hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-transparent transition-all self-start sm:self-center"
                                            >
                                                Apply
                                                <ArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
                                            </button>
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
