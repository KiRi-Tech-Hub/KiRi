import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react';
import { articles } from '../data/blogData';

function AuthorAvatar({ name, color }: { name: string; color: string }) {
    const init = name.split(' ').map(n => n[0]).join('');
    return (
        <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black text-white flex-shrink-0"
            style={{ background: `linear-gradient(135deg, ${color}cc, ${color}66)` }}
        >
            {init}
        </div>
    );
}

export default function BlogPost() {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    const article = articles.find(a => a.slug === slug);

    if (!article) {
        return (
            <div className="min-h-screen bg-[#f8f8fb] dark:bg-[#0a0a0b] pt-40 flex flex-col items-center justify-center gap-4">
                <p className="text-slate-500 dark:text-white/40 text-lg">Article not found.</p>
                <Link to="/blog" className="text-sm font-bold text-slate-900 dark:text-white underline underline-offset-4">
                    Back to blog
                </Link>
            </div>
        );
    }

    const relatedArticles = articles
        .filter(a => a.slug !== slug && a.category === article.category)
        .slice(0, 2);

    return (
        <div className="min-h-screen bg-[#f8f8fb] dark:bg-[#0a0a0b] pt-20">

            {/* ── Hero ──────────────────────────────────────── */}
            <section className="relative bg-[#0d0d12] overflow-hidden pt-24 pb-20 px-6">
                <div className="absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
                <div
                    className="absolute top-0 inset-x-0 h-[3px]"
                    style={{ background: article.color }}
                />
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#f8f8fb] dark:from-[#0a0a0b] to-transparent" />

                <div className="relative z-10 max-w-3xl mx-auto">
                    {/* Back */}
                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center gap-2 text-white/30 hover:text-white/70 text-xs font-semibold mb-10 transition-colors"
                    >
                        <ArrowLeft size={13} /> Back to blog
                    </button>

                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-5 flex-wrap">
                        <span
                            className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full"
                            style={{ background: `${article.color}22`, color: article.color }}
                        >
                            {article.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-white/25 text-[10px]">
                            <Calendar size={10} /> {article.date}
                        </span>
                        <span className="flex items-center gap-1.5 text-white/25 text-[10px]">
                            <Clock size={10} /> {article.readTime} read
                        </span>
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-[2.6rem] font-extrabold text-white leading-[1.08] tracking-tight mb-6"
                    >
                        {article.title}
                    </motion.h1>

                    <p className="text-white/40 text-base leading-relaxed mb-8 max-w-2xl">
                        {article.excerpt}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                        <AuthorAvatar name={article.author} color={article.color} />
                        <div>
                            <div className="text-white/70 text-sm font-bold">{article.author}</div>
                            <div className="text-white/30 text-xs">KiRi Tech Hub</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Article body ──────────────────────────────── */}
            <article className="max-w-3xl mx-auto px-6 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="space-y-6"
                >
                    {article.body.map((paragraph, i) => (
                        <p
                            key={i}
                            className="text-slate-700 dark:text-white/60 text-base leading-[1.85] first:text-lg first:font-medium first:text-slate-800 dark:first:text-white/75"
                        >
                            {paragraph}
                        </p>
                    ))}
                </motion.div>

                {/* Divider */}
                <div className="border-t border-slate-100 dark:border-white/[0.07] mt-14 pt-8">
                    <div className="flex items-center gap-3">
                        <AuthorAvatar name={article.author} color={article.color} />
                        <div>
                            <div className="text-slate-900 dark:text-white text-sm font-bold">{article.author}</div>
                            <div className="text-slate-400 dark:text-white/30 text-xs">
                                {article.category} · KiRi Tech Hub
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* ── Related articles ──────────────────────────── */}
            {relatedArticles.length > 0 && (
                <section className="bg-slate-50 dark:bg-white/[0.02] border-t border-slate-100 dark:border-white/[0.06] px-6 py-16">
                    <div className="max-w-3xl mx-auto">
                        <p className="text-[9px] font-black uppercase tracking-[0.28em] text-slate-400 dark:text-white/25 mb-8">
                            More from {article.category}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {relatedArticles.map(rel => (
                                <Link
                                    key={rel.slug}
                                    to={`/blog/${rel.slug}`}
                                    className="group p-6 rounded-2xl border border-slate-100 dark:border-white/[0.07] bg-white dark:bg-white/[0.03] hover:border-slate-200 dark:hover:border-white/[0.15] transition-colors"
                                >
                                    <div className="h-[2px] w-8 rounded-full mb-4" style={{ background: rel.color }} />
                                    <h4 className="font-bold text-slate-900 dark:text-white text-sm leading-snug mb-2 group-hover:text-slate-700 dark:group-hover:text-white/80 transition-colors">
                                        {rel.title}
                                    </h4>
                                    <p className="text-slate-500 dark:text-white/35 text-xs leading-relaxed line-clamp-2 mb-4">
                                        {rel.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-400 dark:text-white/25 text-[10px]">{rel.author}</span>
                                        <ArrowRight size={12} className="text-slate-300 dark:text-white/20 group-hover:text-slate-700 dark:group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── CTA ───────────────────────────────────────── */}
            <section className="bg-[#0d0d12] border-t border-white/[0.06] px-6 py-20">
                <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/25 mb-3 flex items-center gap-3">
                            <span className="w-6 h-[1px] bg-white/20 inline-block" />
                            KiRi Tech Hub
                        </p>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                            Want to work with us?
                        </h2>
                        <p className="text-white/30 text-sm mt-2">
                            We build high-quality digital products for founders and enterprises.
                        </p>
                    </div>
                    <Link
                        to="/contact-us"
                        className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-white/90 transition-colors flex-shrink-0"
                    >
                        Start a project
                        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
