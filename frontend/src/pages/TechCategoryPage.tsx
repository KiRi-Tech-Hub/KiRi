import { useParams, Navigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { getTechCategoryBySlug, techCategories } from '../data/technologies';
import ContactFormModal from '../components/ContactFormModal';

// ─── Fade-up helper ───────────────────────────────────────────────────────────
const reveal = {
    hidden: { opacity: 0, y: 24 },
    show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: d } }),
};

// ─────────────────────────────────────────────────────────────────────────────
// HERO — full-viewport video background with dark overlay
// ─────────────────────────────────────────────────────────────────────────────
function Hero({
    category,
    onOpenModal,
}: {
    category: NonNullable<ReturnType<typeof getTechCategoryBySlug>>;
    onOpenModal: () => void;
}) {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 600], [0, 140]);

    return (
        <section className="relative h-screen min-h-[700px] flex flex-col justify-end overflow-hidden">
            {/* ── Video bg (parallax) ── */}
            <motion.video
                style={{ y }}
                src="/kiri_video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover scale-105"
            />

            {/* ── Layered dark scrim ── */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    background: `linear-gradient(135deg, ${category.gradientFrom}55 0%, transparent 60%)`,
                }}
            />

            {/* ── Bottom noise texture ── */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                    backgroundSize: '200px',
                }}
            />

            {/* ── Content ── */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 w-full">
                {/* Category label */}
                <motion.div
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3 mb-8"
                >
                    <span
                        className="h-px w-10"
                        style={{ background: category.gradientFrom }}
                    />
                    <span
                        className="text-xs font-bold uppercase tracking-[0.2em]"
                        style={{ color: category.gradientFrom }}
                    >
                        {category.label}
                    </span>
                </motion.div>

                {/* Hero content without tagline — video speaks for itself */}
                <div className="max-w-4xl">

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="text-white/60 text-lg max-w-xl leading-relaxed mb-10"
                    >
                        {category.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap items-center gap-4"
                    >
                        <button
                            onClick={onOpenModal}
                            className="group flex items-center gap-2 px-7 py-3.5 rounded-full text-black bg-white font-semibold text-sm hover:bg-white/90 transition-all duration-200"
                        >
                            Start a Project
                            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                        </button>
                        <Link
                            to="/technologies"
                            className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/25 text-white font-semibold text-sm hover:border-white/50 hover:bg-white/5 transition-all duration-200"
                        >
                            View All
                        </Link>
                    </motion.div>
                </div>

                {/* ── Stats row ── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.55, duration: 0.6 }}
                    className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {category.stats.map((s, i) => (
                        <div key={i}>
                            <div
                                className="text-2xl md:text-3xl font-extrabold tracking-tight"
                                style={{ color: category.gradientFrom }}
                            >
                                {s.value}
                            </div>
                            <div className="text-white/40 text-xs uppercase tracking-wider mt-1 font-medium">
                                {s.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// TECH STACK — horizontal scrolling ticker + detailed grid
// ─────────────────────────────────────────────────────────────────────────────
function TechStack({
    category,
}: {
    category: NonNullable<ReturnType<typeof getTechCategoryBySlug>>;
}) {
    return (
        <section className="bg-white dark:bg-[#0c0c0e] border-b border-slate-100 dark:border-white/[0.06]">
            {/* Section header */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div>
                        <div
                            className="text-[10px] font-bold uppercase tracking-[0.22em] mb-3"
                            style={{ color: category.accentColor }}
                        >
                            01 / Stack
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                            Technologies<br />We Master
                        </h2>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 max-w-xs text-sm leading-relaxed">
                        Every tool is chosen for performance, ecosystem maturity, and long-term maintainability.
                    </p>
                </div>

                {/* Tech grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.technologies.map((tech, i) => {
                        const Icon = tech.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.04 }}
                                className="group flex items-center gap-4 p-4 rounded-xl border border-slate-100 dark:border-white/[0.07] hover:border-slate-300 dark:hover:border-white/[0.16] bg-slate-50/50 dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/[0.05] transition-all duration-200 cursor-default"
                            >
                                {/* Icon */}
                                <div
                                    className="w-11 h-11 rounded-lg flex-shrink-0 flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                                    style={{ background: `${tech.color}18` }}
                                >
                                    <Icon size={22} style={{ color: tech.color }} />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-slate-900 dark:text-white text-sm">{tech.name}</span>
                                        {tech.tag && (
                                            <span
                                                className="text-[9px] font-bold px-1.5 py-0.5 rounded-full text-white uppercase tracking-wide leading-none"
                                                style={{ background: category.accentColor }}
                                            >
                                                {tech.tag}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-slate-400 dark:text-slate-500 text-xs mt-0.5 leading-snug truncate">
                                        {tech.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// USE CASES — editorial two-column bento style
// ─────────────────────────────────────────────────────────────────────────────
function UseCases({
    category,
}: {
    category: NonNullable<ReturnType<typeof getTechCategoryBySlug>>;
}) {
    return (
        <section className="bg-[#f8f8fb] dark:bg-[#0c0c0e] border-b border-slate-100 dark:border-white/[0.06]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div>
                        <div
                            className="text-[10px] font-bold uppercase tracking-[0.22em] mb-3"
                            style={{ color: category.accentColor }}
                        >
                            02 / Use Cases
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                            What We Build
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.useCases.map((uc, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.06 }}
                            className="group relative flex gap-5 p-6 rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-100 dark:border-white/[0.07] hover:border-slate-200 dark:hover:border-white/[0.14] hover:shadow-lg dark:hover:shadow-none transition-all duration-200 overflow-hidden"
                        >
                            {/* Numbered index */}
                            <div
                                className="absolute top-5 right-5 text-[10px] font-black tabular-nums opacity-20 select-none"
                                style={{ color: category.accentColor }}
                            >
                                {String(i + 1).padStart(2, '0')}
                            </div>

                            {/* Icon */}
                            <div
                                className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-xl mt-0.5"
                                style={{ background: `${category.gradientFrom}14` }}
                            >
                                {uc.icon}
                            </div>

                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">{uc.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{uc.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// WHY CHOOSE — full-width dark section with feature columns
// ─────────────────────────────────────────────────────────────────────────────
function WhyChoose({
    category,
    onOpenModal,
}: {
    category: NonNullable<ReturnType<typeof getTechCategoryBySlug>>;
    onOpenModal: () => void;
}) {
    return (
        <section className="bg-[#0c0c0e] border-b border-white/[0.06]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
                {/* Header row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
                    <div>
                        <div
                            className="text-[10px] font-bold uppercase tracking-[0.22em] mb-3"
                            style={{ color: category.accentColor }}
                        >
                            03 / Why KiRi
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                            The KiRi<br />Advantage
                        </h2>
                    </div>
                    <div className="flex flex-col justify-between gap-8">
                        <p className="text-white/50 text-base leading-relaxed">
                            We don't just deliver code — we engineer high-quality, scalable products that grow with your business. Every decision is made with precision and purpose.
                        </p>
                        <button
                            onClick={onOpenModal}
                            className="group self-start flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white text-sm font-semibold hover:bg-white hover:text-black transition-all duration-200"
                        >
                            Talk to an Expert
                            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Feature grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.07] rounded-2xl overflow-hidden border border-white/[0.07]">
                    {category.whyChoose.map((point, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            className="bg-[#0c0c0e] p-7 group hover:bg-white/[0.04] transition-colors duration-200"
                        >
                            <div
                                className="text-xs font-black tabular-nums mb-4 opacity-40"
                                style={{ color: category.accentColor }}
                            >
                                {String(i + 1).padStart(2, '0')}
                            </div>
                            <h4 className="font-bold text-white text-base mb-2">{point.title}</h4>
                            <p className="text-white/40 text-sm leading-relaxed">{point.description}</p>
                        </motion.div>
                    ))}

                    {/* Static bonus box 1 */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: category.whyChoose.length * 0.05 }}
                        className="bg-[#0c0c0e] p-7 group hover:bg-white/[0.04] transition-colors duration-200 relative overflow-hidden"
                    >
                        <div
                            className="text-xs font-black tabular-nums mb-4 opacity-40"
                            style={{ color: category.accentColor }}
                        >
                            {String(category.whyChoose.length + 1).padStart(2, '0')}
                        </div>
                        <h4 className="font-bold text-white text-base mb-2">On-Time Delivery</h4>
                        <p className="text-white/40 text-sm leading-relaxed">
                            We set realistic milestones and respect deadlines. Sprints are planned, tracked, and shipped — every time.
                        </p>
                        <div
                            className="absolute bottom-5 right-5 text-[42px] font-black leading-none opacity-[0.06] select-none"
                            style={{ color: category.accentColor }}
                        >
                            ⏱
                        </div>
                    </motion.div>

                    {/* Static bonus box 2 */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: (category.whyChoose.length + 1) * 0.05 }}
                        className="bg-[#0c0c0e] p-7 group hover:bg-white/[0.04] transition-colors duration-200 relative overflow-hidden"
                    >
                        <div
                            className="text-xs font-black tabular-nums mb-4 opacity-40"
                            style={{ color: category.accentColor }}
                        >
                            {String(category.whyChoose.length + 2).padStart(2, '0')}
                        </div>
                        <h4 className="font-bold text-white text-base mb-2">Long-Term Partnership</h4>
                        <p className="text-white/40 text-sm leading-relaxed">
                            We don't disappear after launch. We stay invested in your product's evolution, scaling and improving as you grow.
                        </p>
                        <div
                            className="absolute bottom-5 right-5 text-[42px] font-black leading-none opacity-[0.06] select-none"
                            style={{ color: category.accentColor }}
                        >
                            🤝
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// PROCESS — clean horizontal timeline
// ─────────────────────────────────────────────────────────────────────────────
function Process({
    category,
}: {
    category: NonNullable<ReturnType<typeof getTechCategoryBySlug>>;
}) {
    return (
        <section className="bg-white dark:bg-[#0c0c0e] border-b border-slate-100 dark:border-white/[0.06]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div>
                        <div
                            className="text-[10px] font-bold uppercase tracking-[0.22em] mb-3"
                            style={{ color: category.accentColor }}
                        >
                            04 / Process
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                            How We Deliver
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
                    {category.processSteps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: i * 0.07 }}
                            className="relative group pl-0 pr-8 py-8 border-l border-slate-100 dark:border-white/[0.07] first:border-l-0 sm:first:border-l sm:pl-8"
                        >
                            {/* Accent dot on the border */}
                            <div
                                className="absolute -left-[5px] top-8 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-[#0c0c0e] transition-transform duration-200 group-hover:scale-125"
                                style={{ background: category.gradientFrom }}
                            />

                            <div
                                className="text-[10px] font-black uppercase tracking-widest mb-4 opacity-50"
                                style={{ color: category.accentColor }}
                            >
                                Step {step.step}
                            </div>
                            <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2 leading-snug">
                                {step.title}
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// RELATED CATEGORIES — minimal pills row
// ─────────────────────────────────────────────────────────────────────────────
function RelatedCategories({ currentSlug }: { currentSlug: string }) {
    const others = techCategories.filter((c) => c.slug !== currentSlug);
    return (
        <section className="bg-[#f8f8fb] dark:bg-[#0c0c0e] border-b border-slate-100 dark:border-white/[0.06]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 whitespace-nowrap">
                        Explore areas
                    </span>
                    <div className="flex flex-wrap gap-3">
                        {others.map((cat) => (
                            <Link
                                key={cat.id}
                                to={`/technologies/${cat.slug}`}
                                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-white/[0.1] bg-white dark:bg-white/[0.03] hover:border-slate-400 dark:hover:border-white/30 hover:shadow-sm text-slate-700 dark:text-slate-300 text-sm font-medium transition-all duration-200"
                            >
                                {cat.label}
                                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// CTA — full-width dark strip with horizontal layout
// ─────────────────────────────────────────────────────────────────────────────
function CTABanner({
    category,
    onOpenModal,
}: {
    category: NonNullable<ReturnType<typeof getTechCategoryBySlug>>;
    onOpenModal: () => void;
}) {
    return (
        <section className="relative bg-[#0c0c0e] overflow-hidden">
            {/* Subtle color wash */}
            <div
                className="absolute inset-0 opacity-[0.07] pointer-events-none"
                style={{
                    background: `linear-gradient(135deg, ${category.gradientFrom} 0%, ${category.gradientTo} 100%)`,
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                    {/* Left */}
                    <div className="max-w-xl">
                        <motion.div
                            initial={reveal.hidden}
                            whileInView={reveal.show(0)}
                            viewport={{ once: true }}
                        >
                            <div
                                className="text-[10px] font-bold uppercase tracking-[0.22em] mb-4"
                                style={{ color: category.accentColor }}
                            >
                                Get started
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                                Ready to build with{' '}
                                <span
                                    className="bg-clip-text text-transparent"
                                    style={{
                                        backgroundImage: `linear-gradient(90deg, ${category.gradientFrom}, ${category.gradientTo})`,
                                    }}
                                >
                                    {category.label}?
                                </span>
                            </h2>
                            <p className="text-white/40 text-base leading-relaxed">
                                Our team of specialists is ready to scope, build, and ship your product — on time.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        initial={reveal.hidden}
                        whileInView={reveal.show(0.1)}
                        viewport={{ once: true }}
                    >
                        <button
                            onClick={onOpenModal}
                            className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full text-black bg-white font-semibold text-sm hover:bg-white/90 transition-colors duration-200 whitespace-nowrap"
                        >
                            Get a Free Consultation
                            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                        </button>
                        <Link
                            to="/technologies"
                            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-sm hover:border-white/40 hover:bg-white/5 transition-all duration-200 whitespace-nowrap"
                        >
                            View All Technologies
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE SHELL
// ─────────────────────────────────────────────────────────────────────────────
export default function TechCategoryPage() {
    const { slug } = useParams<{ slug: string }>();
    const category = getTechCategoryBySlug(slug ?? '');
    const [modalOpen, setModalOpen] = useState(false);

    if (!category) return <Navigate to="/technologies" replace />;

    const open = () => setModalOpen(true);
    const close = () => setModalOpen(false);

    return (
        <div className="min-h-screen">
            <Hero category={category} onOpenModal={open} />
            <TechStack category={category} />
            <UseCases category={category} />
            <WhyChoose category={category} onOpenModal={open} />
            <Process category={category} />
            <RelatedCategories currentSlug={slug ?? ''} />
            <CTABanner category={category} onOpenModal={open} />
            <ContactFormModal isOpen={modalOpen} onClose={close} />
        </div>
    );
}
