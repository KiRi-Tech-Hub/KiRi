import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { techCategories } from '../data/technologies';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.6, delay: i * 0.1 },
    }),
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function Technologies() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-20">
            {/* ── Hero ─────────────────────────────────────────── */}
            <section className="relative py-28 px-4 text-center overflow-hidden">
                {/* Background blobs */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl" />
                    <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
                </div>

                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={stagger}
                    className="relative z-10 max-w-4xl mx-auto"
                >
                    <motion.p variants={fadeUp} custom={0} className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">
                        Our Technology Stack
                    </motion.p>
                    <motion.h1 variants={fadeUp} custom={1} className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                        Technologies That{' '}
                        <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                            Power Your Vision
                        </span>
                    </motion.h1>
                    <motion.p variants={fadeUp} custom={2} className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        From pixel-perfect frontends to bulletproof backends, cloud-native devops, and everything in between—we master the tools that matter.
                    </motion.p>
                </motion.div>
            </section>

            {/* ── Category Cards ────────────────────────────────── */}
            <section className="max-w-7xl mx-auto px-4 pb-32">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={stagger}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {techCategories.map((cat, i) => (
                        <motion.div
                            key={cat.id}
                            variants={fadeUp}
                            custom={i}
                            whileHover={{ y: -8 }}
                            className={`group relative rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-2xl transition-all duration-400 ${i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                        >
                            {/* Gradient top bar */}
                            <div
                                className="h-1.5 w-full"
                                style={{ background: `linear-gradient(90deg, ${cat.gradientFrom}, ${cat.gradientTo})` }}
                            />

                            {/* Card body */}
                            <div className="p-8">
                                {/* Icon + label */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform duration-300"
                                        style={{ background: `linear-gradient(135deg, ${cat.gradientFrom}20, ${cat.gradientTo}20)` }}
                                    >
                                        {cat.heroIcon}
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">{cat.label}</h2>
                                        <p className="text-sm font-medium" style={{ color: cat.accentColor }}>{cat.tagline}</p>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {cat.description}
                                </p>

                                {/* Tech icons row */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {cat.technologies.slice(0, 5).map((tech, idx) => {
                                        const TIcon = tech.icon;
                                        return (
                                            <div
                                                key={idx}
                                                className="w-9 h-9 rounded-xl flex items-center justify-center border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 hover:scale-110 transition-transform duration-200"
                                                title={tech.name}
                                            >
                                                <TIcon size={18} style={{ color: tech.color }} />
                                            </div>
                                        );
                                    })}
                                    {cat.technologies.length > 5 && (
                                        <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-500 dark:text-slate-400">
                                            +{cat.technologies.length - 5}
                                        </div>
                                    )}
                                </div>

                                {/* Stats row */}
                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    {cat.stats.slice(0, 2).map((stat, idx) => (
                                        <div key={idx} className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-3 text-center">
                                            <div className="font-extrabold text-lg bg-clip-text text-transparent"
                                                style={{ backgroundImage: `linear-gradient(135deg, ${cat.gradientFrom}, ${cat.gradientTo})` }}>
                                                {stat.value}
                                            </div>
                                            <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA */}
                                <Link
                                    to={`/technologies/${cat.slug}`}
                                    className="inline-flex items-center gap-2 w-full justify-center py-3.5 rounded-xl font-bold text-white hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 text-sm shadow-md"
                                    style={{ background: `linear-gradient(135deg, ${cat.gradientFrom}, ${cat.gradientTo})` }}
                                >
                                    Explore {cat.label} <ArrowRight size={16} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ── Bottom CTA ────────────────────────────────────── */}
            <section className="bg-slate-900 dark:bg-black py-20 px-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-transparent to-blue-900/30" />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative z-10 max-w-2xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5">Not sure which stack is right for you?</h2>
                    <p className="text-slate-400 text-lg mb-10">Our architects will analyze your requirements and recommend the perfect technology mix—for free.</p>
                    <button className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold text-lg shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        Get Free Tech Consultation <ArrowRight size={20} />
                    </button>
                </motion.div>
            </section>
        </div>
    );
}
