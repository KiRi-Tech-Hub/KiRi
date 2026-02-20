import { useParams, Navigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { getTechCategoryBySlug, techCategories } from '../data/technologies';
import ContactFormModal from '../components/ContactFormModal';

// ──────── Animation Variants ──────────────────────────────────────────────────
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.07 },
    }),
};

const staggerContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07 } },
};

// ──────── Hero Section ────────────────────────────────────────────────────────
function Hero({ category, onOpenModal }: { category: ReturnType<typeof getTechCategoryBySlug>; onOpenModal: () => void }) {
    if (!category) return null;
    return (
        <section
            className="relative min-h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden pt-24 pb-20 px-4"
            style={{
                background: `linear-gradient(135deg, ${category.gradientFrom}15 0%, ${category.gradientTo}15 100%)`,
            }}
        >
            {/* Animated blurred blobs */}
            <div
                className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none animate-blob"
                style={{ background: category.gradientFrom }}
            />
            <div
                className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl pointer-events-none animate-blob animation-delay-2000"
                style={{ background: category.gradientTo }}
            />

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />

            <motion.div
                initial="hidden"
                animate="show"
                variants={staggerContainer}
                className="relative z-10 max-w-4xl mx-auto"
            >
                {/* Category badge */}
                <motion.div variants={fadeUp} custom={0} className="mb-6">
                    <span
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-widest text-white shadow-lg"
                        style={{ background: `linear-gradient(135deg, ${category.gradientFrom}, ${category.gradientTo})` }}
                    >
                        <Zap size={14} />
                        {category.label}
                    </span>
                </motion.div>

                {/* Emoji icon */}
                <motion.div variants={fadeUp} custom={1} className="text-7xl mb-6 select-none">
                    {category.heroIcon}
                </motion.div>

                {/* Tagline */}
                <motion.h1
                    variants={fadeUp}
                    custom={2}
                    className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight"
                >
                    {category.tagline}
                </motion.h1>

                {/* Description */}
                <motion.p
                    variants={fadeUp}
                    custom={3}
                    className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10"
                >
                    {category.description}
                </motion.p>

                {/* CTA */}
                <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-4 justify-center">
                    <button
                        onClick={onOpenModal}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-base"
                        style={{ background: `linear-gradient(135deg, ${category.gradientFrom}, ${category.gradientTo})` }}
                    >
                        Start a Project <ArrowRight size={18} />
                    </button>
                    <Link
                        to="/technologies"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-semibold hover:border-slate-500 hover:-translate-y-0.5 transition-all duration-300 text-base bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm"
                    >
                        ← All Technologies
                    </Link>
                </motion.div>
            </motion.div>

            {/* Stats bar */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="relative z-10 mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto w-full"
            >
                {category.stats.map((stat, i) => (
                    <div
                        key={i}
                        className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-5 text-center shadow-sm border border-white/60 dark:border-slate-700/60"
                    >
                        <div
                            className="text-3xl font-extrabold bg-clip-text text-transparent"
                            style={{ backgroundImage: `linear-gradient(135deg, ${category.gradientFrom}, ${category.gradientTo})` }}
                        >
                            {stat.value}
                        </div>
                        <div className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">{stat.label}</div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}

// ──────── Tech Cards Section ──────────────────────────────────────────────────
function TechStack({ category }: { category: ReturnType<typeof getTechCategoryBySlug> }) {
    if (!category) return null;
    return (
        <section className="py-24 px-4 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                    className="text-center mb-16"
                >
                    <motion.p
                        variants={fadeUp}
                        className="text-sm font-bold uppercase tracking-widest mb-3"
                        style={{ color: category.accentColor }}
                    >
                        Our Tech Arsenal
                    </motion.p>
                    <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
                        Technologies We Master
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-lg">
                        Battle-tested tools chosen for performance, community support, and long-term maintainability.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {category.technologies.map((tech, i) => {
                        const Icon = tech.icon;
                        return (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                custom={i}
                                whileHover={{ y: -6, boxShadow: `0 20px 40px -10px ${tech.color}30` }}
                                className="group relative bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 cursor-pointer overflow-hidden transition-all duration-300"
                            >
                                {/* Hover gradient overlay */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"
                                    style={{ background: tech.color }}
                                />

                                <div className="flex items-start gap-4">
                                    {/* Icon */}
                                    <div
                                        className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300"
                                        style={{ backgroundColor: `${tech.color}15`, border: `1.5px solid ${tech.color}30` }}
                                    >
                                        <Icon size={30} style={{ color: tech.color }} />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-bold text-slate-900 dark:text-white text-base">{tech.name}</h3>
                                            {tech.tag && (
                                                <span
                                                    className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white uppercase tracking-wide flex-shrink-0"
                                                    style={{ background: category.accentColor }}
                                                >
                                                    {tech.tag}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{tech.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

// ──────── Use Cases Section ───────────────────────────────────────────────────
function UseCases({ category }: { category: ReturnType<typeof getTechCategoryBySlug> }) {
    if (!category) return null;
    return (
        <section
            className="py-24 px-4"
            style={{ background: `linear-gradient(135deg, ${category.gradientFrom}08 0%, ${category.gradientTo}08 100%)` }}
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                    className="text-center mb-16"
                >
                    <motion.p
                        variants={fadeUp}
                        className="text-sm font-bold uppercase tracking-widest mb-3"
                        style={{ color: category.accentColor }}
                    >
                        What We Build
                    </motion.p>
                    <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
                        Real-World Use Cases
                    </motion.h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {category.useCases.map((uc, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            custom={i}
                            whileHover={{ y: -4, scale: 1.02 }}
                            className="bg-white dark:bg-slate-900 rounded-2xl p-8 text-center border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">{uc.icon}</div>
                            <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-3">{uc.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{uc.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// ──────── Why Choose Section ──────────────────────────────────────────────────
function WhyChoose({ category, onOpenModal }: { category: ReturnType<typeof getTechCategoryBySlug>; onOpenModal: () => void }) {
    if (!category) return null;
    return (
        <section className="py-24 px-4 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p
                            className="text-sm font-bold uppercase tracking-widest mb-4"
                            style={{ color: category.accentColor }}
                        >
                            Our Advantage
                        </p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                            Why Choose KiRi for {category.label}?
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-10">
                            We don't just write code—we engineer solutions that stand the test of time, scale with your ambitions, and delight your users.
                        </p>
                        <button
                            onClick={onOpenModal}
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold hover:-translate-y-0.5 transition-all duration-300 text-base shadow-lg"
                            style={{ background: `linear-gradient(135deg, ${category.gradientFrom}, ${category.gradientTo})` }}
                        >
                            Talk to an Expert <ArrowRight size={18} />
                        </button>
                    </motion.div>

                    {/* Right: Feature grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                    >
                        {category.whyChoose.map((point, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                custom={i}
                                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 group"
                            >
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                                    style={{ backgroundColor: `${category.accentColor}15` }}
                                >
                                    <CheckCircle2 size={20} style={{ color: category.accentColor }} />
                                </div>
                                <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-base">{point.title}</h4>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{point.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ──────── Process Section ─────────────────────────────────────────────────────
function Process({ category }: { category: ReturnType<typeof getTechCategoryBySlug> }) {
    if (!category) return null;
    return (
        <section
            className="py-24 px-4 overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${category.gradientFrom}10 0%, ${category.gradientTo}10 100%)` }}
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                    className="text-center mb-16"
                >
                    <motion.p
                        variants={fadeUp}
                        className="text-sm font-bold uppercase tracking-widest mb-3"
                        style={{ color: category.accentColor }}
                    >
                        How We Work
                    </motion.p>
                    <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
                        Our Proven Process
                    </motion.h2>
                </motion.div>

                <div className="relative">
                    {/* Connecting line (desktop) */}
                    <div
                        className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 opacity-20"
                        style={{ background: `linear-gradient(90deg, ${category.gradientFrom}, ${category.gradientTo})` }}
                    />

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {category.processSteps.map((step, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                custom={i}
                                className="relative text-center group"
                            >
                                {/* Step number circle */}
                                <div className="relative mx-auto w-24 h-24 mb-6">
                                    <div
                                        className="absolute inset-0 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 animate-pulse-slow"
                                        style={{ background: `linear-gradient(135deg, ${category.gradientFrom}, ${category.gradientTo})` }}
                                    />
                                    <div
                                        className="absolute inset-2 rounded-full flex items-center justify-center text-white font-black text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                                        style={{ background: `linear-gradient(135deg, ${category.gradientFrom}, ${category.gradientTo})` }}
                                    >
                                        {step.step}
                                    </div>
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-3">{step.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ──────── Related Categories Nav ──────────────────────────────────────────────
function RelatedCategories({ currentSlug }: { currentSlug: string }) {
    const others = techCategories.filter((c) => c.slug !== currentSlug);
    return (
        <section className="py-20 px-4 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                >
                    <motion.h2
                        variants={fadeUp}
                        className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-10 text-center"
                    >
                        Explore Other Technologies
                    </motion.h2>
                    <motion.div
                        variants={staggerContainer}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        {others.map((cat, i) => (
                            <motion.div key={cat.id} variants={fadeUp} custom={i}>
                                <Link
                                    to={`/technologies/${cat.slug}`}
                                    className="group inline-flex items-center gap-3 px-6 py-4 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-600 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 font-semibold text-slate-700 dark:text-slate-200"
                                >
                                    <span className="text-2xl">{cat.heroIcon}</span>
                                    {cat.label}
                                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

// ──────── CTA Banner ──────────────────────────────────────────────────────────
function CTABanner({ category, onOpenModal }: { category: ReturnType<typeof getTechCategoryBySlug>; onOpenModal: () => void }) {
    if (!category) return null;
    return (
        <section className="py-20 px-4 bg-slate-900 dark:bg-black relative overflow-hidden">
            {/* Gradient blobs */}
            <div
                className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-30 blur-3xl pointer-events-none"
                style={{ background: category.gradientFrom }}
            />
            <div
                className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
                style={{ background: category.gradientTo }}
            />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative z-10 max-w-3xl mx-auto text-center"
            >
                <div className="text-6xl mb-6">{category.heroIcon}</div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                    Ready to Build with {category.label}?
                </h2>
                <p className="text-slate-300 text-lg mb-10">
                    Let's turn your vision into a world-class {category.label.toLowerCase()} product. Our team is ready to start.
                </p>
                <button
                    onClick={onOpenModal}
                    className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-white font-bold text-lg shadow-2xl hover:-translate-y-1 hover:shadow-3xl transition-all duration-300"
                    style={{ background: `linear-gradient(135deg, ${category.gradientFrom}, ${category.gradientTo})` }}
                >
                    Get a Free Consultation <ArrowRight size={20} />
                </button>
            </motion.div>
        </section>
    );
}

// ──────── Main Page ───────────────────────────────────────────────────────────
export default function TechCategoryPage() {
    const { slug } = useParams<{ slug: string }>();
    const category = getTechCategoryBySlug(slug ?? '');
    const [modalOpen, setModalOpen] = useState(false);

    if (!category) {
        return <Navigate to="/technologies" replace />;
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <style>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -30px) scale(1.05); }
                    66% { transform: translate(-20px, 20px) scale(0.97); }
                }
                .animate-blob { animation: blob 10s ease-in-out infinite; }
                .animation-delay-2000 { animation-delay: 2s; }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.2; transform: scale(1); }
                    50% { opacity: 0.35; transform: scale(1.05); }
                }
                .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
            `}</style>

            <Hero category={category} onOpenModal={() => setModalOpen(true)} />
            <TechStack category={category} />
            <UseCases category={category} />
            <WhyChoose category={category} onOpenModal={() => setModalOpen(true)} />
            <Process category={category} />
            <RelatedCategories currentSlug={slug ?? ''} />
            <CTABanner category={category} onOpenModal={() => setModalOpen(true)} />

            <ContactFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
}
