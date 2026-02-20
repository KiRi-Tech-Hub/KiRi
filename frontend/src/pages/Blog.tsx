import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articles } from '../data/blogData';

const categories = ['All', 'Engineering', 'Design', 'Product', 'DevOps', 'Company'];

function AuthorAvatar({ name, color }: { name: string; color: string }) {
    const init = name.split(' ').map(n => n[0]).join('');
    return (
        <div
            className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-black text-white flex-shrink-0"
            style={{ background: `linear-gradient(135deg, ${color}cc, ${color}66)` }}
        >
            {init}
        </div>
    );
}

export default function Blog() {
    const [active, setActive] = useState('All');
    const [query, setQuery] = useState('');

    const filtered = articles.filter(a => {
        const matchCat = active === 'All' || a.category === active;
        const matchQ = a.title.toLowerCase().includes(query.toLowerCase()) || a.excerpt.toLowerCase().includes(query.toLowerCase());
        return matchCat && matchQ;
    });

    const featured = filtered.filter(a => a.featured);
    const regular = filtered.filter(a => !a.featured);

    return (
        <div className="min-h-screen bg-[#f8f8fb] dark:bg-[#0a0a0b] pt-20">

            {/* ── Hero ─────────────────────────────────────── */}
            <section className="relative bg-[#0d0d12] pt-24 pb-32 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
                <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] rounded-full blur-[120px] opacity-[0.10] bg-blue-500 pointer-events-none" />
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#f8f8fb] dark:from-[#0a0a0b] to-transparent" />

                <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-400 mb-5 block">/ KiRi Journal</span>
                        <h1 className="text-[clamp(2.4rem,6vw,5rem)] font-extrabold text-white leading-[1.04] tracking-tight">
                            Ideas worth<br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">shipping.</span>
                        </h1>
                    </motion.div>

                    {/* Search */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="relative w-full md:w-72 flex-shrink-0"
                    >
                        <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25" />
                        <input
                            type="text"
                            placeholder="Search articles…"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            className="w-full bg-white/[0.06] border border-white/[0.1] rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/25 text-sm outline-none focus:border-white/25 transition-colors"
                        />
                    </motion.div>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-6">
                {/* Filter tabs */}
                <div className="flex flex-wrap gap-2 pt-10 pb-8">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${active === cat
                                ? 'bg-slate-900 dark:bg-white text-white dark:text-black'
                                : 'border border-slate-200 dark:border-white/[0.1] text-slate-600 dark:text-slate-400 hover:border-slate-400 dark:hover:border-white/30'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div key={`${active}-${query}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>

                        {/* Featured */}
                        {featured.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                                {featured.map((a) => (
                                    <Link
                                        key={a.slug}
                                        to={`/blog/${a.slug}`}
                                        className="group relative rounded-2xl overflow-hidden bg-[#0d0d12] block"
                                        style={{ minHeight: 300 }}
                                    >
                                        <div className="absolute inset-0 opacity-[0.06]"
                                            style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                                        <div className="absolute top-0 inset-x-0 h-[3px]" style={{ background: a.color }} />
                                        <div className="absolute bottom-0 inset-x-0 h-32"
                                            style={{ background: `linear-gradient(to top, ${a.color}22, transparent)` }} />
                                        <div className="relative z-10 p-7 flex flex-col" style={{ minHeight: 300 }}>
                                            <span className="text-[9px] font-bold uppercase tracking-widest mb-5 px-2.5 py-1 rounded-full self-start" style={{ background: `${a.color}20`, color: a.color }}>
                                                {a.category}
                                            </span>
                                            <h2 className="text-xl font-extrabold text-white leading-snug tracking-tight mb-3 group-hover:text-white/90 transition-colors">
                                                {a.title}
                                            </h2>
                                            <p className="text-white/40 text-sm leading-relaxed flex-1 mb-6">{a.excerpt}</p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <AuthorAvatar name={a.author} color={a.color} />
                                                    <div>
                                                        <div className="text-white/50 text-[10px] font-semibold">{a.author}</div>
                                                        <div className="text-white/25 text-[9px]">{a.date}</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-1 text-white/25 text-[10px]">
                                                    <Clock size={10} /> {a.readTime}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}

                        {/* Regular articles list */}
                        <div className="divide-y divide-slate-100 dark:divide-white/[0.05] pb-32">
                            {regular.map((a, i) => (
                                <Link
                                    key={a.slug}
                                    to={`/blog/${a.slug}`}
                                    className="group flex items-start gap-5 py-6 hover:bg-slate-50 dark:hover:bg-white/[0.02] -mx-4 px-4 rounded-xl transition-colors"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: i * 0.04 }}
                                        className="flex items-start gap-5 w-full"
                                    >
                                        <div className="w-1 flex-shrink-0 self-stretch rounded-full mt-1" style={{ background: a.color }} />
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full" style={{ background: `${a.color}18`, color: a.color }}>
                                                    {a.category}
                                                </span>
                                                <span className="text-slate-400 dark:text-white/25 text-[10px]">{a.date}</span>
                                            </div>
                                            <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1.5 group-hover:text-slate-700 dark:group-hover:text-white/90 transition-colors leading-snug">
                                                {a.title}
                                            </h3>
                                            <p className="text-slate-500 dark:text-white/40 text-sm leading-relaxed line-clamp-2">{a.excerpt}</p>
                                        </div>
                                        <div className="flex flex-col items-end gap-3 flex-shrink-0">
                                            <div className="flex items-center gap-1 text-slate-400 dark:text-white/25 text-[10px]">
                                                <Clock size={10} /> {a.readTime}
                                            </div>
                                            <ArrowRight size={14} className="text-slate-300 dark:text-white/20 group-hover:text-slate-700 dark:group-hover:text-white transition-all group-hover:translate-x-0.5" />
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
